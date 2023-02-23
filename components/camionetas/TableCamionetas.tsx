import * as React from "react";
import { StyledTableCell, StyledTableRow } from "../ui";
import { Camioneta } from "../../ts/interfaces";
import { formatTimeStamp } from "../../utils/dates";
import { ButtonGroup, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CamionetaApi } from "../../utils/api";
import { useNotify } from "../../hooks";
import TableContainerCustom from "../ui/tables/TableContainerCustom";

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
    <TableContainerCustom
      rows={camionetas}
      columns={["ID", "Placa", "Logistica", "Acciones"]}
      renderListItem={(camioneta) => (
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
      )}
    />
  );
}

export default TableLogisticas;
