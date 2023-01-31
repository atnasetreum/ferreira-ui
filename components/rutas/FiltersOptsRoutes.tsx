import {
  Grid,
  Paper,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import React from "react";
import { FiltersRoute } from "../../pages/rutas";
import SouthIcon from "@mui/icons-material/South";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import esLocale from "date-fns/locale/es";
import SelectDrivers from "../ui/SelectDrivers";
import { SelectLogisticas, SelectPlacas } from "../ui";

interface Props {
  filters: FiltersRoute;
  setFilters: (filters: FiltersRoute) => void;
}

const FiltersOptsRoutes = ({ filters, setFilters }: Props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="subtitle1" gutterBottom>
          Filtros <SouthIcon />
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={1}>
        <Paper>
          <TextField
            type="number"
            label="ID"
            variant="outlined"
            fullWidth
            value={filters.id}
            onChange={({ target: { value } }) =>
              setFilters({ ...filters, id: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <SelectLogisticas
            value={filters.logistica}
            onChange={(logistica) => setFilters({ ...filters, logistica })}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <SelectPlacas
            value={filters.placa}
            onChange={(placa) => setFilters({ ...filters, placa })}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <SelectDrivers
            value={filters.driver}
            onChange={(driver) => setFilters({ ...filters, driver })}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
            <DatePicker
              label="Fecha"
              inputFormat="dd/MM/yyyy"
              value={filters.date}
              onChange={(value) => setFilters({ ...filters, date: value })}
              renderInput={(params: TextFieldProps) => (
                <TextField {...params} fullWidth />
              )}
            />
          </LocalizationProvider>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FiltersOptsRoutes;
