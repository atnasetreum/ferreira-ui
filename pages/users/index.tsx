import { Button, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Grid";
import MainLayout from "../../layouts/MainLayout";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TableUsers from "../../components/users/TableUsers";
import { useState, useEffect } from "react";
import { User } from "../../ts/interfaces";
import { UserApi } from "../../utils/api";
import FormUsers from "../../components/users/FormUsers";

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [action, setAction] = useState<string>("");

  const getUsers = () => {
    UserApi.getAll().then(setUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <MainLayout title="Usuarios">
      <Grid container spacing={1}>
        {action === "add" && (
          <Grid item xs={12} md={12} lg={12}>
            <FormUsers cancelCreate={() => setAction("")} getUsers={getUsers} />
          </Grid>
        )}
        {action === "" && (
          <>
            <Grid item xs={12} md={12} lg={12}>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  startIcon={<PersonAddAlt1Icon />}
                  onClick={() => setAction("add")}
                >
                  Agregar
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <TableUsers users={users} getUsers={getUsers} />
            </Grid>
          </>
        )}
      </Grid>
    </MainLayout>
  );
}

export default UsersPage;
