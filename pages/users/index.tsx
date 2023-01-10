import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MainLayout from "../../layouts/MainLayout";

function UsersPage() {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid container xs={12} md={6} lg={4} spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6} lg={12}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <Paper></Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default UsersPage;
