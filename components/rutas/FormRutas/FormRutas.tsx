import {
  Button,
  ButtonGroup,
  Grid,
  Paper,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { SelectSellers, SellerRaw } from "../../ui";
import TablePuntos from "./TablePuntos";
import { useState, useEffect, useMemo } from "react";
import SelectDrivers from "../../ui/SelectDrivers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import esLocale from "date-fns/locale/es";
import SaveIcon from "@mui/icons-material/Save";
import { RouteApi } from "../../../utils/api";
import { useNotify } from "../../../hooks";
import ClearIcon from "@mui/icons-material/Clear";
import { Camioneta, Route } from "../../../ts/interfaces";
import { formatDateDynamic, stringToDate } from "../../../utils/dates";
import { SelectPlacas } from "../../ui/SelectPlacas";

export interface SellerWithOrder {
  id: string;
  uuid: string;
  nombre: string;
  order: number;
}

export interface IFormRutas {
  date: Date | null;
  driver: { id: number; name: string } | null;
  sellers: SellerWithOrder[];
  notes: string;
  placa: Camioneta | null;
  pago: string;
}

const initForm = {
  date: new Date(),
  driver: null,
  sellers: [],
  notes: "",
  placa: null,
  pago: "",
};

interface Props {
  setAction: (action: string) => void;
  routeSelected: Route;
  setRouteSelected: (routeSelected: Route) => void;
  getAllRoutes: () => void;
}

const FormRutas = ({
  setAction,
  routeSelected,
  setRouteSelected,
  getAllRoutes,
}: Props) => {
  const [form, setForm] = useState<IFormRutas>(initForm);
  const [seller, setSeller] = useState<SellerRaw | null>(null);
  const [id, setId] = useState<number>(0);
  const { notify } = useNotify();

  useEffect(() => {
    if (
      seller &&
      !form.sellers.find((sell) => Number(sell.id) === Number(seller.id))
    ) {
      setForm({
        ...form,
        sellers: [
          ...form.sellers,
          { ...seller, id: `${seller.id}`, order: form.sellers.length + 1 },
        ],
      });
      setSeller(null);
    }
  }, [seller, form]);

  useEffect(() => {
    if (Object.keys(routeSelected).length && !id) {
      setForm({
        date: stringToDate(routeSelected.date),
        driver: {
          id: routeSelected.user.id,
          name: routeSelected.user.name,
        },
        sellers: routeSelected.sellers.map((seller, idx) => ({
          id: seller.seller.id.toString(),
          uuid: seller.seller.uuid,
          nombre: seller.seller.nombre,
          order: idx + 1,
        })),
        notes: routeSelected.notes,
        placa: routeSelected.car,
        pago: routeSelected.pago,
      });
      setId(routeSelected.id);
    }
  }, [routeSelected, id]);

  const saveRoute = () => {
    if (!form.placa) {
      return notify("Seleccione una placa");
    }

    if (!form.date) {
      return notify("Seleccione una fecha");
    }

    if (form.date.toString() === "Invalid Date") {
      return notify("Formato de fecha invalido");
    }

    if (!form.driver) {
      return notify("Seleccione un driver");
    }

    const pago = form.pago.trim();

    if (!pago && !id) {
      return notify("Agregue un pago");
    }

    if (!form.sellers.length) {
      return notify("Seleccione los sellers de la ruta");
    }

    if (!id) {
      // Creacion
      RouteApi.create({
        carId: form.placa.id,
        date: formatDateDynamic(form.date, "YYYY-MM-DD"),
        userId: form.driver.id,
        sellers: form.sellers.map((seller) => Number(seller.id)),
        notes: form.notes.trim(),
        pago,
      })
        .then(() => {
          notify("Ruta creada correctamente", "success");
          setAction("");
          getAllRoutes();
        })
        .catch((err) => notify(err.response?.data?.message || err.message));
    } else {
      // Edicion
      RouteApi.update(id, {
        carId: form.placa.id,
        date: form.date,
        userId: form.driver.id,
        sellers: form.sellers.map((seller) => Number(seller.id)),
        notes: form.notes?.trim(),
        pago,
      })
        .then(() => {
          notify("Ruta actualizada correctamente", "success");
          setAction("");
          setRouteSelected({} as Route);
          getAllRoutes();
        })
        .catch((err) => notify(err.response?.data?.message || err.message));
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <SelectPlacas
            value={form.placa}
            onChange={(placa) => setForm({ ...form, placa })}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
            <DatePicker
              label="Fecha"
              inputFormat="dd/MM/yyyy"
              value={form.date}
              onChange={(value) => setForm({ ...form, date: value })}
              renderInput={(params: TextFieldProps) => (
                <TextField {...params} fullWidth />
              )}
            />
          </LocalizationProvider>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <SelectDrivers
            value={form.driver}
            onChange={(driver) => setForm({ ...form, driver })}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <SelectSellers
            value={seller}
            onChange={setSeller}
            idsDisabled={form.sellers.map((sell) => Number(sell.id))}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <TextField
            label="Pago"
            variant="outlined"
            fullWidth
            type="number"
            autoComplete="off"
            value={form.pago}
            onChange={({ target: { value } }) =>
              setForm({ ...form, pago: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper>
          <TextField
            label="Notas adicionales"
            multiline
            rows={2}
            maxRows={4}
            fullWidth
            value={form.notes}
            onChange={({ target: { value } }) =>
              setForm({ ...form, notes: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <ButtonGroup aria-label="outlined primary button group" fullWidth>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<ClearIcon />}
            sx={{ mt: 1 }}
            onClick={() => {
              setAction("");
              setRouteSelected({} as Route);
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            fullWidth
            startIcon={<SaveIcon />}
            sx={{ mt: 1 }}
            onClick={saveRoute}
          >
            Guardar
          </Button>
        </ButtonGroup>
      </Grid>
      {!!form.sellers.length && (
        <Grid item xs={12} md={12} lg={12}>
          <Paper>
            <TablePuntos sellers={form.sellers} form={form} setForm={setForm} />
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default FormRutas;
