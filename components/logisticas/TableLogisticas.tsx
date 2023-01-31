import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "../ui";
import { Logistica } from "../../ts/interfaces";
import { formatTimeStamp } from "../../utils/dates";
import { ButtonGroup, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { LogisticaApi } from "../../utils/api";
import { useNotify } from "../../hooks";

interface Props {
  logisticas: Logistica[];
  getLogisticas: () => void;
  setLogisticaSelected: (logistica: Logistica) => void;
  setAction: (action: string) => void;
}

function TableLogisticas({
  logisticas,
  getLogisticas,
  setLogisticaSelected,
  setAction,
}: Props) {
  const { notify } = useNotify();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Fecha Creacion</StyledTableCell>
            <StyledTableCell>Fecha de ultima actualizacion</StyledTableCell>
            <StyledTableCell>Acciones</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {logisticas.map((logistica) => (
            <StyledTableRow
              key={logistica.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {logistica.id}
              </StyledTableCell>
              <StyledTableCell>{logistica.name}</StyledTableCell>
              <StyledTableCell>
                {formatTimeStamp(logistica.createdAt)}
              </StyledTableCell>
              <StyledTableCell>
                {formatTimeStamp(logistica.updatedAt)}
              </StyledTableCell>
              <StyledTableCell>
                <ButtonGroup aria-label="outlined primary button group">
                  <IconButton
                    color="warning"
                    aria-label="update row"
                    component="label"
                    onClick={() => {
                      setAction("edit");
                      setLogisticaSelected(logistica);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    aria-label="delete row"
                    component="label"
                    onClick={() =>
                      LogisticaApi.remove(logistica.id)
                        .then(() => {
                          notify(
                            "Logistica eliminada correctamente",
                            "success"
                          );
                          getLogisticas();
                        })
                        .catch((err) =>
                          notify(err.response?.data?.message || err.message)
                        )
                    }
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

export default TableLogisticas;
