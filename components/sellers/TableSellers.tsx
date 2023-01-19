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
import { Link, Typography } from "@mui/material";

interface Props {
  sellers: Seller[];
  setSellerSelected: (seller: Seller) => void;
}

export default function TableSellers({ sellers, setSellerSelected }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>UUID</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Ubicacion</StyledTableCell>
            <StyledTableCell>Persona que atiende</StyledTableCell>
            <StyledTableCell>No. de sucursales</StyledTableCell>
            <StyledTableCell>Fecha de creacion</StyledTableCell>
            <StyledTableCell>Ultima Actualizacion</StyledTableCell>
            <StyledTableCell align="center">Detalles</StyledTableCell>
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
              <StyledTableCell>{seller.personaQueAtiende}</StyledTableCell>
              <StyledTableCell>{seller.sellers.length}</StyledTableCell>
              <StyledTableCell>
                {formatTimeStamp(seller.createdAt)}
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
