import { Button, Grid } from "@mui/material";
import { useState } from "react";
import TabsSeller from "./TabsSeller";
import SaveIcon from "@mui/icons-material/Save";
import { useNotify } from "../../hooks/useNotify";

export interface Referencia {
  description: string;
  linkUbicacion: string;
  image: File | null;
  order: number;
}

export interface Telefono {
  name: string;
  phone: string;
  order: number;
}

export interface NewSeller {
  id: string;
  nombre: string;
  calle: string;
  numero: string;
  colonia: string;
  ciudad: string | null;
  municipio: string | null;
  estado: string | null;
  cp: string;
  linkUbicacion: string;
  personaQueAtiende: string;
  idSeller: string;
  image: File | null;
  referencias: Referencia[];
  telefonos: Telefono[];
}

const initialForm = {
  id: "",
  nombre: "",
  estado: null,
  municipio: null,
  ciudad: null,
  colonia: "",
  calle: "",
  numero: "",
  cp: "",
  linkUbicacion: "",
  personaQueAtiende: "",
  idSeller: "",
  image: null,
  referencias: [],
  telefonos: [],
};

const FormSeller = () => {
  const [form, setForm] = useState<NewSeller>(initialForm);
  const { notify } = useNotify();

  const handleSave = () => {
    const id = form.id.trim();
    if (!id) {
      return notify("Agregue un ID");
    }

    const nombre = form.nombre.trim();
    if (!nombre) {
      return notify("Agregue un nombre");
    }

    const estado = form.estado;
    if (!estado) {
      return notify("Seleccione un estado");
    }

    const municipio = form.municipio;
    if (!municipio) {
      return notify("Seleccione un municipio");
    }

    const ciudad = form.ciudad;
    if (!ciudad) {
      return notify("Seleccione una ciudad");
    }

    const colonia = form.colonia.trim();
    if (!colonia) {
      return notify("Agregue una colonia");
    }

    const calle = form.calle.trim();
    const numero = form.numero.trim();
    const cp = form.cp.trim();
    const linkUbicacion = form.linkUbicacion.trim();
    const personaQueAtiende = form.personaQueAtiende.trim();
    const idSeller = form.idSeller.trim();
    const image = form.image;
    const referencias = form.referencias;
    const telefonos = form.telefonos;
    if (!calle) {
      return notify("Agregue la calle");
    }

    if (!numero) {
      return notify("Agregue el numero");
    }

    if (!cp) {
      return notify("Agregue el codigo postal");
    }

    if (!linkUbicacion) {
      return notify("Agregue el link de la ubicacion");
    }

    console.log({ form });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12}>
        <TabsSeller form={form} setForm={setForm} initialForm={initialForm} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Button
          fullWidth
          startIcon={<SaveIcon />}
          variant="contained"
          onClick={handleSave}
        >
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormSeller;
