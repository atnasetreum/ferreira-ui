import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Seller } from "../../ts/interfaces";
import { StyledTableCell, StyledTableRow } from "../ui";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import moment from "moment";
import "moment/locale/es";

interface Props {
  sellers: Seller[];
}

export default function TableSellers({ sellers }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>UUID</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Ubicacion</StyledTableCell>
            <StyledTableCell>Fecha de creacion</StyledTableCell>
            <StyledTableCell>Ultima Actualizacion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellers.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell>{row.uuid}</StyledTableCell>
              <StyledTableCell>{row.nombre}</StyledTableCell>
              <StyledTableCell>
                <a
                  target="_blank"
                  href={row.linkUbicacion}
                  rel="noopener noreferrer"
                >
                  <OpenInNewIcon />
                </a>
              </StyledTableCell>
              <StyledTableCell>
                {moment(row.createdAt).format("LLLL a")}
              </StyledTableCell>
              <StyledTableCell>
                {moment(row.updatedAt).format("LLLL a")}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
