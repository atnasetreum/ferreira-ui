import * as React from "react";
import { StyledTableCell, StyledTableRow } from "../ui";
import { Logistica } from "../../ts/interfaces";
import { formatTimeStamp } from "../../utils/dates";
import { ButtonGroup, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { LogisticaApi } from "../../utils/api";
import { useNotify } from "../../hooks";
import TableContainerCustom from "../ui/tables/TableContainerCustom";

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
    <TableContainerCustom
      rows={logisticas}
      columns={["ID", "Nombre", "Acciones"]}
      renderListItem={(logistica) => (
        <StyledTableRow
          key={logistica.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <StyledTableCell component="th" scope="row">
            {logistica.id}
          </StyledTableCell>
          <StyledTableCell>{logistica.name}</StyledTableCell>
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
                      notify("Logistica eliminada correctamente", "success");
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
      )}
    />
  );
}

export default TableLogisticas;
