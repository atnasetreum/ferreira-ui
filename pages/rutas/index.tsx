import { Button, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import FormRutas from "../../components/rutas/FormRutas/FormRutas";
import TableRutas from "../../components/rutas/TableRutas";
import MainLayout from "../../layouts/MainLayout";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import { Camioneta, Logistica, Route } from "../../ts/interfaces";
import FiltersOptsRoutes from "../../components/rutas/FiltersOptsRoutes";
import { Driver } from "../../components/ui";
import { RouteApi } from "../../utils/api";
import { formatDateDynamic } from "../../utils/dates";

export interface FiltersRoute {
  id: string;
  date: Date | null;
  logistica: Logistica | null;
  placa: Camioneta | null;
  driver: Driver | null;
}

function RutasPage() {
  const [action, setAction] = useState<string>("");
  const [routeSelected, setRouteSelected] = useState<Route>({} as Route);
  const [filters, setFilters] = useState<FiltersRoute>({
    id: "",
    date: new Date(),
    driver: null,
    logistica: null,
    placa: null,
  });
  const [routes, setRoutes] = useState<Route[]>([]);

  const getAllRoutes = () =>
    RouteApi.getAll({
      ...(filters.id && { id: filters.id }),
      ...(filters.date && {
        date: formatDateDynamic(filters.date, "YYYY-MM-DD"),
      }),
      ...(filters.driver && { driverId: filters.driver.id }),
      ...(filters.placa && { carId: filters.placa.id }),
      ...(filters.logistica && { logisticaId: filters.logistica.id }),
    }).then(setRoutes);

  useEffect(() => {
    getAllRoutes();
  }, [filters]);

  return (
    <MainLayout title="Rutas">
      <Grid container spacing={1}>
        {action === "" && (
          <Grid item xs={12} md={12} lg={12}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                startIcon={<ForkRightIcon />}
                onClick={() => setAction("add")}
              >
                Agregar
              </Button>
            </ButtonGroup>
          </Grid>
        )}
        {["add", "edit"].includes(action) && (
          <Grid item xs={12} md={12} lg={12}>
            <FormRutas
              setAction={setAction}
              routeSelected={routeSelected}
              setRouteSelected={setRouteSelected}
              getAllRoutes={getAllRoutes}
            />
          </Grid>
        )}
        {action === "" && (
          <>
            <Grid item xs={12} md={12} lg={12}>
              <FiltersOptsRoutes filters={filters} setFilters={setFilters} />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <TableRutas
                setAction={setAction}
                setRouteSelected={setRouteSelected}
                routes={routes}
                getAllRoutes={getAllRoutes}
              />
            </Grid>
          </>
        )}
      </Grid>
    </MainLayout>
  );
}

export default RutasPage;
