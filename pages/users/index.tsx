import { Button, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Grid";
import MainLayout from "../../layouts/MainLayout";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TableUsers from "../../components/users/TableUsers";

function UsersPage() {
  return (
    <MainLayout title="Usuarios">
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              startIcon={<PersonAddAlt1Icon />}
              //onClick={() => setAction("add")}
            >
              Agregar
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TableUsers />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default UsersPage;
