import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { NewSeller } from "./FormSeller";
import { StyledTableCell, StyledTableRow } from "../ui";

interface Props {
  form: NewSeller;
  setForm: (form: NewSeller) => void;
}

export default function TableTelefonos({ form, setForm }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Orden</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Telefono</StyledTableCell>
            <StyledTableCell>Eliminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {form.telefonos.map((telefono, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {telefono.order}
              </StyledTableCell>
              <StyledTableCell>{telefono.name}</StyledTableCell>
              <StyledTableCell>{telefono.phone}</StyledTableCell>
              <StyledTableCell>
                <DeleteIcon
                  color="error"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setForm({
                      ...form,
                      telefonos: form.telefonos
                        .filter((ref) => ref.order !== telefono.order)
                        .map((ref, idxRef) => ({ ...ref, order: idxRef + 1 })),
                    });
                  }}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
