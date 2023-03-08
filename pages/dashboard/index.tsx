import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MainLayout from "../../layouts/MainLayout";
import CarsByLogistics from "../../components/dashboard/CarsByLogistics";
import TotalByLogistics from "../../components/dashboard/TotalByLogistics";
import RutasByLogistics from "../../components/dashboard/RutasByLogistics";
import RutasByDrivers from "../../components/dashboard/RutasByDrivers";
import { Typography } from "@mui/material";
import { nowTimeStamp } from "../../utils/dates";
import { useEffect, useState } from "react";
import { DashboardApi } from "../../utils/api";
import { LoadingBar } from "../../components/ui";

interface PropsInfoGlobal {
  title: string;
  total: string;
}

const InfoGlobal = ({ title, total }: PropsInfoGlobal) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: 138,
      }}
    >
      <>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {title}
        </Typography>
        <Typography component="p" variant="h4">
          {total}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {nowTimeStamp()}
        </Typography>
      </>
    </Paper>
  );
};

export interface StateCountDashboard {
  totales: {
    title: string;
    total: string;
  };
  promedioRuta: {
    title: string;
    total: string;
  };
  sellers: {
    title: string;
    total: string;
  };
  drivers: {
    title: string;
    total: string;
  };
}

export default function DashboardContent() {
  const [data, setData] = useState<StateCountDashboard | null>(null);

  const getData = () => {
    DashboardApi.stateCountDashboard().then(setData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainLayout title="Dashboard">
      <Grid container spacing={3}>
        {data && (
          <Grid item xs={12} md={4} lg={4}>
            <InfoGlobal title={data.totales.title} total={data.totales.total} />
            <br />
            <InfoGlobal
              title={data.promedioRuta.title}
              total={data.promedioRuta.total}
            />
          </Grid>
        )}
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            <TotalByLogistics />
          </Paper>
        </Grid>
        {data && (
          <Grid item xs={12} md={4} lg={4}>
            <InfoGlobal title={data.sellers.title} total={data.sellers.total} />
            <br />
            <InfoGlobal title={data.drivers.title} total={data.drivers.total} />
          </Grid>
        )}
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
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
              height: 300,
            }}
          >
            <RutasByLogistics />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            <RutasByDrivers />
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
