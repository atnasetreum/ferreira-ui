import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import { Seller } from "../../ts/interfaces";
import { StyledTableCell, StyledTableRow } from "../ui";
import { formatTimeStamp } from "../../utils/dates";
import { ButtonGroup, IconButton, Link, Typography } from "@mui/material";
import Image from "next/image";
import { createUrlImage } from "../../utils/images";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { SellerApi } from "../../utils/api";
import { useNotify } from "../../hooks";

interface Props {
  sellers: Seller[];
  setSellerSelected: (seller: Seller) => void;
  setAction: (action: string) => void;
  getSellers: () => void;
}

export default function TableSellers({
  sellers,
  setSellerSelected,
  setAction,
  getSellers,
}: Props) {
  const { notify } = useNotify();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>UUID</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Ubicacion</StyledTableCell>
            <StyledTableCell>Imagen</StyledTableCell>
            <StyledTableCell>Ids, sucursales</StyledTableCell>
            <StyledTableCell>Telefonos</StyledTableCell>
            <StyledTableCell>Ultima Actualizacion</StyledTableCell>
            <StyledTableCell align="center">Detalles</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellers.map((seller) => (
            <StyledTableRow key={seller.id}>
              <StyledTableCell component="th" scope="seller">
                {seller.id}
              </StyledTableCell>
              <StyledTableCell>{seller.uuid}</StyledTableCell>
              <StyledTableCell>{seller.nombre}</StyledTableCell>
              <StyledTableCell>
                <Typography
                  sx={{ display: "inline" }}
                  component={Link}
                  color="text.primary"
                >
                  <Link
                    href={seller.linkUbicacion}
                    underline="none"
                    target="_blank"
                  >
                    {seller.linkUbicacion}
                  </Link>
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Image
                  src={createUrlImage(seller.image)}
                  alt={seller.image}
                  width={125}
                  height={125}
                />
              </StyledTableCell>
              <StyledTableCell>
                {seller.sellers.map((sell) => sell.uuid).join(" - ")}
              </StyledTableCell>
              <StyledTableCell>
                {seller.referencePhones.map((tel) => tel.phone).join(" - ")}
              </StyledTableCell>
              <StyledTableCell>
                {formatTimeStamp(seller.updatedAt)}
              </StyledTableCell>
              <StyledTableCell align="center">
                <PrivacyTipIcon
                  style={{ cursor: "pointer" }}
                  color="primary"
                  onClick={() => setSellerSelected(seller)}
                />
              </StyledTableCell>
              <StyledTableCell align="center">
                <ButtonGroup aria-label="outlined primary button group">
                  <IconButton
                    color="warning"
                    aria-label="update row"
                    component="label"
                    onClick={() => {
                      setSellerSelected(seller);
                      setAction("edit");
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    aria-label="delete row"
                    component="label"
                    onClick={() => {
                      SellerApi.remove(seller.id)
                        .then(() => {
                          notify("Seller eliminado correctamente", "success");
                          getSellers();
                        })
                        .catch((err: any) =>
                          notify(err.response?.data?.message || err.message)
                        );
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
