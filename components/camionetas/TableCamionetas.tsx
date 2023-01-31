import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "../ui";
import { Camioneta } from "../../ts/interfaces";
import { formatTimeStamp } from "../../utils/dates";
import { ButtonGroup, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CamionetaApi } from "../../utils/api";
import { useNotify } from "../../hooks";

interface Props {
  camionetas: Camioneta[];
  getCamionetas: () => void;
  setCamionetaSelected: (camioneta: Camioneta) => void;
  setAction: (action: string) => void;
}

function TableLogisticas({
  camionetas,
  getCamionetas,
  setCamionetaSelected,
  setAction,
}: Props) {
  const { notify } = useNotify();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Placa</StyledTableCell>
            <StyledTableCell>Logistica</StyledTableCell>
            <StyledTableCell>Fecha Creacion</StyledTableCell>
            <StyledTableCell>Fecha de ultima actualizacion</StyledTableCell>
            <StyledTableCell>Acciones</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {camionetas.map((camioneta) => (
            <StyledTableRow
              key={camioneta.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {camioneta.id}
              </StyledTableCell>
              <StyledTableCell>{camioneta.placa}</StyledTableCell>
              <StyledTableCell>{camioneta.logistica.name}</StyledTableCell>
              <StyledTableCell>
                {formatTimeStamp(camioneta.createdAt)}
              </StyledTableCell>
              <StyledTableCell>
                {formatTimeStamp(camioneta.updatedAt)}
              </StyledTableCell>
              <StyledTableCell>
                <ButtonGroup aria-label="outlined primary button group">
                  <IconButton
                    color="warning"
                    aria-label="update row"
                    component="label"
                    onClick={() => {
                      setAction("edit");
                      setCamionetaSelected(camioneta);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    aria-label="delete row"
                    component="label"
                    onClick={() =>
                      CamionetaApi.remove(camioneta.id)
                        .then(() => {
                          notify("Placa eliminada correctamente", "success");
                          getCamionetas();
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
