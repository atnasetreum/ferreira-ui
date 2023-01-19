import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Seller } from "../../../ts/interfaces";
import { StyledTableCell, StyledTableRow } from "../../ui";

interface Props {
  sellerSelected: Seller;
}

function TelefonosInfo({ sellerSelected }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Telefono</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerSelected.referencePhones.map((telefono) => (
            <StyledTableRow
              key={telefono.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {telefono.name}
              </StyledTableCell>
              <StyledTableCell>{telefono.phone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TelefonosInfo;
