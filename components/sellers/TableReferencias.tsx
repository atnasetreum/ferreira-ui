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

export default function TableReferencias({ form, setForm }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Orden</StyledTableCell>
            <StyledTableCell>Descripcion</StyledTableCell>
            <StyledTableCell>Link ubicacion</StyledTableCell>
            <StyledTableCell>Imagen</StyledTableCell>
            <StyledTableCell>Eliminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {form.referencias.map((referencia, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {referencia.order}
              </StyledTableCell>
              <StyledTableCell>{referencia.description}</StyledTableCell>
              <StyledTableCell>{referencia.linkUbicacion}</StyledTableCell>
              <StyledTableCell>{referencia.image?.name}</StyledTableCell>
              <StyledTableCell>
                <DeleteIcon
                  color="error"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setForm({
                      ...form,
                      referencias: form.referencias
                        .filter((ref) => ref.order !== referencia.order)
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
