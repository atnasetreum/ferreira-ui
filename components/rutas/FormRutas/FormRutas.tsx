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
import { useState, useEffect } from "react";
import SelectDrivers from "../../ui/SelectDrivers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import esLocale from "date-fns/locale/es";
import SaveIcon from "@mui/icons-material/Save";
import { RouteApi } from "../../../utils/api";
import { useNotify } from "../../../hooks";
import ClearIcon from "@mui/icons-material/Clear";

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
}

const initForm = {
  date: new Date(),
  driver: null,
  sellers: [],
};

interface Props {
  setAction: (action: string) => void;
}

const FormRutas = ({ setAction }: Props) => {
  const [form, setForm] = useState<IFormRutas>(initForm);
  const [seller, setSeller] = useState<SellerRaw | null>(null);
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

  const saveRoute = () => {
    if (!form.date) {
      return notify("Seleccione una fecha");
    }

    if (form.date.toString() === "Invalid Date") {
      return notify("Formato de fecha invalido");
    }

    if (!form.driver) {
      return notify("Seleccione un driver");
    }

    if (!form.sellers.length) {
      return notify("Seleccione los sellers de la ruta");
    }

    RouteApi.create({
      date: form.date,
      userId: form.driver.id,
      sellers: form.sellers.map((seller) => Number(seller.id)),
    })
      .then(() => {
        notify("Ruta creada correctamente", "success");
        setAction("");
      })
      .catch((err) => notify(err.response?.data?.message || err.message));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={3}>
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
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <SelectDrivers
            value={form.driver}
            onChange={(driver) => setForm({ ...form, driver })}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <SelectSellers
            value={seller}
            onChange={setSeller}
            idsDisabled={form.sellers.map((sell) => Number(sell.id))}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <ButtonGroup aria-label="outlined primary button group">
          <Button
            variant="outlined"
            fullWidth
            startIcon={<ClearIcon />}
            sx={{ mt: 1 }}
            onClick={() => setAction("")}
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
