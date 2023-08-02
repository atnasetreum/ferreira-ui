import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Seller } from "../../ts/interfaces";
import { StyledTableCell, StyledTableRow } from "../ui";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import { ButtonGroup, Link, Typography } from "@mui/material";
import Image from "next/image";
import { createUrlImage } from "../../utils/images";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { SellerApi } from "../../utils/api";
import { useNotify } from "../../hooks";
import TableContainerCustom from "../ui/tables/TableContainerCustom";

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
    <TableContainerCustom
      rows={sellers}
      columns={[
        "ID",
        "UUID",
        "Nombre",
        "Ubicacion",
        "Imagen",
        "Ids, sucursales",
        "Telefonos",
        "Detalles",
        "Acciones",
      ]}
      renderListItem={(seller) => (
        <StyledTableRow key={seller.id}>
          <StyledTableCell component="th" scope="row">
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
      )}
    />
  );
}
