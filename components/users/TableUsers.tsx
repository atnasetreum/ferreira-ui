import * as React from "react";
import { StyledTableCell, StyledTableRow } from "../ui";
import { User } from "../../ts/interfaces";
import { formatTimeStamp } from "../../utils/dates";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserApi } from "../../utils/api";
import { useNotify } from "../../hooks";
import TableContainerCustom from "../ui/tables/TableContainerCustom";

interface Props {
  users: User[];
  getUsers: () => void;
}

function TableUsers({ users, getUsers }: Props) {
  const { notify } = useNotify();

  const deleteUser = (id: number) => {
    UserApi.remove(id)
      .then(() => {
        notify("Usuario eliminado correctamente", "success");
        getUsers();
      })
      .catch((err) => notify(err.response?.data?.message || err.message));
  };

  return (
    <TableContainerCustom
      rows={users}
      columns={[
        "ID",
        "Nombre",
        "Tipo",
        "Fecha de creacion",
        "Ultima Actualizacion",
        "Eliminar",
      ]}
      renderListItem={(user) => (
        <StyledTableRow key={user.id}>
          <StyledTableCell component="th" scope="seller">
            {user.id}
          </StyledTableCell>
          <StyledTableCell>{user.name}</StyledTableCell>
          <StyledTableCell>{user.userType.name}</StyledTableCell>
          <StyledTableCell>{formatTimeStamp(user.createdAt)}</StyledTableCell>
          <StyledTableCell>{formatTimeStamp(user.updatedAt)}</StyledTableCell>
          <StyledTableCell align="center">
            <DeleteIcon
              color="error"
              style={{ cursor: "pointer" }}
              onClick={() => deleteUser(user.id)}
            />
          </StyledTableCell>
        </StyledTableRow>
      )}
    />
  );
}

export default TableUsers;
