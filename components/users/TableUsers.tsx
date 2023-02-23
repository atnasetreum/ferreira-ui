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
<<<<<<< HEAD
      columns={["ID", "Nombre", "Tipo", "Eliminar"]}
=======
      columns={[
        "ID",
        "Nombre",
        "Tipo",
        "Fecha de creacion",
        "Ultima Actualizacion",
        "Eliminar",
      ]}
>>>>>>> 63e89b2a9d4c34cc42a7614dfd722c2f90d550c6
      renderListItem={(user) => (
        <StyledTableRow key={user.id}>
          <StyledTableCell component="th" scope="seller">
            {user.id}
          </StyledTableCell>
          <StyledTableCell>{user.name}</StyledTableCell>
          <StyledTableCell>{user.userType.name}</StyledTableCell>
<<<<<<< HEAD
          <StyledTableCell>
=======
          <StyledTableCell>{formatTimeStamp(user.createdAt)}</StyledTableCell>
          <StyledTableCell>{formatTimeStamp(user.updatedAt)}</StyledTableCell>
          <StyledTableCell align="center">
>>>>>>> 63e89b2a9d4c34cc42a7614dfd722c2f90d550c6
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
