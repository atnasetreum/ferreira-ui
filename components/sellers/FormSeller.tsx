import { Button, Grid } from "@mui/material";
import { useState } from "react";
import TabsSeller from "./TabsSeller";
import SaveIcon from "@mui/icons-material/Save";
import { useNotify } from "../../hooks/useNotify";
import { SellerApi } from "../../utils/api";
import CloseIcon from "@mui/icons-material/Close";

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
  seller: { id: number; uuid: string; nombre: string } | null;
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
  seller: null,
  image: null,
  referencias: [],
  telefonos: [],
};

interface Props {
  getSellers: () => void;
  closeForm: () => void;
}

const FormSeller = ({ closeForm, getSellers }: Props) => {
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
    if (!calle) {
      return notify("Agregue la calle");
    }

    const numero = form.numero.trim();
    if (!numero) {
      return notify("Agregue el numero");
    }

    const cp = form.cp.trim();
    if (!cp) {
      return notify("Agregue el codigo postal");
    }

    const linkUbicacion = form.linkUbicacion.trim();
    if (!linkUbicacion) {
      return notify("Agregue el link de la ubicacion");
    }

    const image = form.image;
    if (!image) {
      return notify("Agregue una imagen del seller");
    }

    const personaQueAtiende = form.personaQueAtiende.trim();
    const idSeller = form.seller?.id;

    const referencias = form.referencias;
    const telefonos = form.telefonos;

    const formData = new FormData();

    formData.append("uuid", id);
    formData.append("nombre", nombre);
    formData.append("estado", estado);
    formData.append("municipio", municipio);
    formData.append("ciudad", ciudad);
    formData.append("colonia", colonia);
    formData.append("calle", calle);
    formData.append("numero", numero);
    formData.append("cp", cp);
    formData.append("linkUbicacion", linkUbicacion);
    formData.append("image", image);

    if (personaQueAtiende) {
      formData.append("personaQueAtiende", personaQueAtiende);
    }

    if (idSeller) {
      formData.append("idGroup", idSeller.toString());
    }

    if (referencias.length) {
      formData.append(
        "referencias",
        JSON.stringify(
          referencias.map((ref) => ({ ...ref, image: ref.image?.name || "" }))
        )
      );

      for (let i = 0, t = referencias.length; i < t; i++) {
        const referencia = referencias[i];
        if (referencia.image) {
          formData.append("refImage", referencia.image, referencia.image.name);
        }
      }
    }

    if (telefonos.length) {
      formData.append("telefonos", JSON.stringify(telefonos));
    }

    SellerApi.create(formData)
      .then(() => {
        notify("Seller creado correctamente", "success");
        setForm(initialForm);
        getSellers();
        closeForm();
      })
      .catch((err) => notify(err.message));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12}>
        <TabsSeller form={form} setForm={setForm} initialForm={initialForm} />
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
        <Button
          fullWidth
          startIcon={<CloseIcon />}
          variant="outlined"
          onClick={() => closeForm()}
        >
          Cancelar
        </Button>
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
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
