import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { NewSeller } from "../FormSeller";
import { useState } from "react";
import TableTelefonos from "./TableTelefonos";

interface Telefono {
  name: string;
  phone: string;
}

const initValues = {
  name: "",
  phone: "",
};

interface Props {
  form: NewSeller;
  setForm: (form: NewSeller) => void;
}

const FormTelefonos = ({ form, setForm }: Props) => {
  const [telefono, setTelefono] = useState<Telefono>(initValues);

  return (
    <Grid container spacing={1} sx={{ mt: 2, mb: 2 }}>
      <Grid item xs={12} md={6} lg={4}>
        <Paper>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={telefono.name}
            onChange={({ target: { value } }) =>
              setTelefono({ ...telefono, name: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Paper>
          <TextField
            label="Telefono"
            variant="outlined"
            fullWidth
            value={telefono.phone}
            onChange={({ target: { value } }) =>
              setTelefono({ ...telefono, phone: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ mt: 1 }}
          disabled={!telefono.name.trim() || !telefono.phone.trim()}
          onClick={() => {
            const consecutivo = form.telefonos.length + 1;
            setForm({
              ...form,
              telefonos: [
                ...form.telefonos,
                { ...telefono, order: consecutivo, id: `new${consecutivo}` },
              ],
            });
            setTelefono(initValues);
          }}
        >
          Agregar
        </Button>
      </Grid>
      {!!form.telefonos.length && (
        <Grid item xs={12} md={12} lg={12} sx={{ mt: 4 }}>
          <TableTelefonos form={form} setForm={setForm} />
        </Grid>
      )}
    </Grid>
  );
};

export default FormTelefonos;
