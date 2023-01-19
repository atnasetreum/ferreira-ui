import { Grid, Paper, TextField, TextFieldProps } from "@mui/material";
import { SelectSellers, SellerRaw } from "../../ui";
import TablePuntos from "./TablePuntos";
import { useState } from "react";
import SelectDrivers from "../../ui/SelectDrivers";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import esLocale from "date-fns/locale/es";

interface Form {
  seller: SellerRaw | null;
}

const initForm = {
  seller: null,
};

const FormRutas = () => {
  const [form, setForm] = useState<Form>(initForm);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <SelectDrivers />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <SelectSellers
            value={form.seller}
            onChange={(value) => setForm({ ...form, seller: value })}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5} md={4}>
        <Paper>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
            <DatePicker
              label="Date sku cost monthly"
              inputFormat="yyyy-MM-dd"
              value={new Date()}
              //onChange={(value) => setFilters({ ...filters, date: value })}
              renderInput={(params: TextFieldProps) => (
                <TextField {...params} fullWidth />
              )}
            />
          </LocalizationProvider>
        </Paper>
      </Grid>
      {/* <Grid item xs={12} md={12} lg={12}>
        <TablePuntos />
      </Grid> */}
    </Grid>
  );
};

export default FormRutas;
