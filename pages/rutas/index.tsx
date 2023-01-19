import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormRutas from "../../components/rutas/FormRutas/FormRutas";
import TableRutas from "../../components/rutas/TableRutas";
import MainLayout from "../../layouts/MainLayout";

function RutasPage() {
  return (
    <MainLayout title="Rutas">
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <FormRutas />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper>
            <TableRutas />
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default RutasPage;
