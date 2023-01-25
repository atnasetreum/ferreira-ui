import {
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddIcon from "@mui/icons-material/Add";
import { NewSeller } from "../FormSeller";
import TableReferencias from "./TableReferencias";
import { useState } from "react";
import { Seller } from "../../../ts/interfaces";

interface Referencia {
  description: string;
  linkUbicacion: string;
  image: File | null;
}

interface Props {
  form: NewSeller;
  setForm: (form: NewSeller) => void;
  sellerSelected: Seller;
}

const initValues = {
  description: "",
  linkUbicacion: "",
  image: null,
};

const FormReferencias = ({ form, setForm, sellerSelected }: Props) => {
  const [referencia, setReferencia] = useState<Referencia>(initValues);
  return (
    <Grid container spacing={1} sx={{ mt: 1, mb: 1 }}>
      <Grid item xs={12} md={6} lg={4}>
        <Paper>
          <TextField
            label="Descripcion"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={referencia.description}
            onChange={({ target: { value } }) =>
              setReferencia({ ...referencia, description: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Link de la ubicacion"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={referencia.linkUbicacion}
            onChange={({ target: { value } }) =>
              setReferencia({ ...referencia, linkUbicacion: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2} container>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(event: React.FormEvent) => {
              const files = (event.target as HTMLInputElement).files;
              if (files && files.length > 0) {
                setReferencia({ ...referencia, image: files[0] });
              }
            }}
          />
          <AddAPhotoIcon fontSize="large" />
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 1 }}>
            {referencia.image && referencia.image.name.substring(0, 10)}...
          </Typography>
        </IconButton>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button
          sx={{ mt: 1 }}
          fullWidth
          variant="contained"
          startIcon={<AddIcon />}
          disabled={!referencia.description.trim()}
          onClick={() => {
            const consecutivo = form.referencias.length + 1;
            setForm({
              ...form,
              referencias: [
                ...form.referencias,
                { ...referencia, order: consecutivo, id: `new${consecutivo}` },
              ],
            });
            setReferencia(initValues);
          }}
        >
          Agregar
        </Button>
      </Grid>
      {!!form.referencias.length && (
        <Grid item xs={12} md={12} lg={12} sx={{ mt: 4 }}>
          <TableReferencias
            form={form}
            setForm={setForm}
            sellerSelected={sellerSelected}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default FormReferencias;
