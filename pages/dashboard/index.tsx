import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MainLayout from "../../layouts/MainLayout";
import CarsByLogistics from "../../components/dashboard/CarsByLogistics";
import TotalByLogistics from "../../components/dashboard/TotalByLogistics";

export default function DashboardContent() {
  return (
    <MainLayout title="Inicio">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 400,
            }}
          >
            <CarsByLogistics />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 400,
            }}
          >
            <TotalByLogistics />
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
