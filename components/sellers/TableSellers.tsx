import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { Seller } from "../../ts/interfaces";
import { StyledTableCell, StyledTableRow, TablePaginationActions } from "../ui";
import { TableHead } from "@mui/material";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import { formatTimeStamp } from "../../utils/dates";
import { ButtonGroup, Link, Typography } from "@mui/material";
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
  sellers: rows,
  setSellerSelected,
  setAction,
  getSellers,
}: Props) {
  const { notify } = useNotify();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <StyledTableRow>
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
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((seller) => (
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
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={10} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={10}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
