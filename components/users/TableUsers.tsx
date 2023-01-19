import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "../ui";
import { User } from "../../ts/interfaces";
import { formatTimeStamp } from "../../utils/dates";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserApi } from "../../utils/api";
import { useNotify } from "../../hooks";

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Tipo</StyledTableCell>
            <StyledTableCell>Fecha de creacion</StyledTableCell>
            <StyledTableCell>Ultima Actualizacion</StyledTableCell>
            <StyledTableCell align="center">Eliminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="seller">
                {user.id}
              </StyledTableCell>
              <StyledTableCell>{user.name}</StyledTableCell>
              <StyledTableCell>{user.userType.name}</StyledTableCell>
              <StyledTableCell>
                {formatTimeStamp(user.createdAt)}
              </StyledTableCell>
              <StyledTableCell>
                {formatTimeStamp(user.updatedAt)}
              </StyledTableCell>
              <StyledTableCell align="center">
                <DeleteIcon
                  color="error"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteUser(user.id)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableUsers;
