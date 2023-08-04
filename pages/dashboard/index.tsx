import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MainLayout from "../../layouts/MainLayout";
import CarsByLogistics from "../../components/dashboard/CarsByLogistics";
import TotalByLogistics from "../../components/dashboard/TotalByLogistics";
import RutasByLogistics from "../../components/dashboard/RutasByLogistics";
import RutasByDrivers from "../../components/dashboard/RutasByDrivers";
import { Typography } from "@mui/material";
import { getMonday } from "../../utils/dates";
import { useEffect, useMemo, useState } from "react";
import { DashboardApi } from "../../utils/api";
import RutasByLogisticsTimeLine from "../../components/dashboard/RutasByLogisticsTimeLine";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";

interface PropsInfoGlobal {
  title: string;
  total: string;
  range: string;
}

const InfoGlobal = ({ title, total, range }: PropsInfoGlobal) => {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "column",
          height: 130,
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
            {range}
          </Typography>
        </>
      </Paper>
    </Grid>
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
  const [startDate, setStartDate] = useState<Date>(getMonday());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const isValidRange = useMemo(() => {
    if (!moment(startDate).isValid() || !moment(endDate).isValid())
      return false;

    return moment(startDate).isBefore(endDate);
  }, [startDate, endDate]);

  const range = useMemo(() => {
    if (!isValidRange) return "";

    return `del ${moment(startDate).format("DD/MM/YYYY")} hasta ${moment(
      endDate
    ).format("DD/MM/YYYY")}`;
  }, [startDate, endDate, isValidRange]);

  useEffect(() => {
    if (!isValidRange) return;

    DashboardApi.stateCountDashboard({
      startDate,
      endDate,
    }).then(setData);
  }, [startDate, endDate, isValidRange]);

  return (
    <MainLayout title="Dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Paper>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Fecha de inicio"
                    value={startDate}
                    onChange={(newDate) => newDate && setStartDate(newDate)}
                    maxDate={endDate}
                    slotProps={{
                      textField: { fullWidth: true },
                    }}
                    format="dd/MM/yyyy"
                  />
                </LocalizationProvider>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Fecha de fin"
                    value={endDate}
                    onChange={(newDate) => newDate && setEndDate(newDate)}
                    minDate={startDate}
                    slotProps={{
                      textField: { fullWidth: true },
                    }}
                    format="dd/MM/yyyy"
                  />
                </LocalizationProvider>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {data && (
          <Grid item xs={12} md={4} lg={4}>
            <Grid container spacing={2}>
              <InfoGlobal
                title={data.totales.title}
                total={data.totales.total}
                range={range}
              />
              <InfoGlobal
                title={data.promedioRuta.title}
                total={data.promedioRuta.total}
                range={range}
              />
              <InfoGlobal
                title={data.sellers.title}
                total={data.sellers.total}
                range={range}
              />
              <InfoGlobal
                title={data.drivers.title}
                total={data.drivers.total}
                range={range}
              />
            </Grid>
          </Grid>
        )}
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 570,
            }}
          >
            <CarsByLogistics />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 272,
                }}
              >
                <TotalByLogistics
                  startDate={startDate}
                  endDate={endDate}
                  isValidRange={isValidRange}
                  range={range}
                />
              </Paper>
            </Grid>
          </Grid>
          <br />
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 272,
              }}
            >
              <RutasByLogistics
                startDate={startDate}
                endDate={endDate}
                isValidRange={isValidRange}
                range={range}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 500,
            }}
          >
            <RutasByLogisticsTimeLine />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 500,
            }}
          >
            <RutasByDrivers
              startDate={startDate}
              endDate={endDate}
              isValidRange={isValidRange}
              range={range}
            />
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
