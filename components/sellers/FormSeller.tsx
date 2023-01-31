import { Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import TabsSeller from "./TabsSeller";
import SaveIcon from "@mui/icons-material/Save";
import { useNotify } from "../../hooks/useNotify";
import { SellerApi } from "../../utils/api";
import CloseIcon from "@mui/icons-material/Close";
import { Seller } from "../../ts/interfaces";

export interface Referencia {
  id: string;
  description: string;
  linkUbicacion: string;
  image: File | null;
  order: number;
}

export interface Telefono {
  id: string;
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
  sellerSelected: Seller;
}

const FormSeller = ({ closeForm, getSellers, sellerSelected }: Props) => {
  const [form, setForm] = useState<NewSeller>(initialForm);
  const [idSeller, setIdSeller] = useState<number>(0);
  const { notify } = useNotify();

  useEffect(() => {
    if (Object.keys(sellerSelected).length && !idSeller) {
      setIdSeller(sellerSelected.id);
      setForm({
        id: sellerSelected.uuid,
        nombre: sellerSelected.nombre,
        estado: sellerSelected.estado ?? "",
        municipio: sellerSelected.municipio ?? "",
        ciudad: sellerSelected.ciudad ?? "",
        colonia: sellerSelected.colonia ?? "",
        calle: sellerSelected.calle ?? "",
        numero: sellerSelected.numero ?? "",
        cp: sellerSelected.cp ?? "",
        linkUbicacion: sellerSelected.linkUbicacion,
        personaQueAtiende: sellerSelected.personaQueAtiende ?? "",
        seller: sellerSelected.parent
          ? {
              id: sellerSelected.parent.id,
              uuid: sellerSelected.parent.uuid,
              nombre: sellerSelected.parent.nombre,
            }
          : null,
        image: null,
        referencias: sellerSelected.references.map((reference) => ({
          id: `${reference.id}`,
          description: reference.description,
          linkUbicacion: reference.link,
          image: null,
          order: reference.order,
        })),
        telefonos: sellerSelected.referencePhones.map((telefono) => ({
          id: `${telefono.id}`,
          name: telefono.name,
          phone: telefono.phone,
          order: telefono.order,
        })),
      });
    }
  }, [sellerSelected, idSeller]);

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
    // if (!estado) {
    //   return notify("Seleccione un estado");
    // }

    const municipio = form.municipio;
    // if (!municipio) {
    //   return notify("Seleccione un municipio");
    // }

    const ciudad = form.ciudad;
    // if (!ciudad) {
    //   return notify("Seleccione una ciudad");
    // }

    const colonia = form.colonia.trim();
    // if (!colonia) {
    //   return notify("Agregue una colonia");
    // }

    const calle = form.calle.trim();
    // if (!calle) {
    //   return notify("Agregue la calle");
    // }

    const numero = form.numero.trim();
    // if (!numero) {
    //   return notify("Agregue el numero");
    // }

    const cp = form.cp.trim();
    // if (!cp) {
    //   return notify("Agregue el codigo postal");
    // }

    const linkUbicacion = form.linkUbicacion.trim();
    if (!linkUbicacion) {
      return notify("Agregue el link de la ubicacion");
    }

    const image = form.image;
    if (!image && !idSeller) {
      return notify("Agregue una imagen del seller");
    }

    const personaQueAtiende = form.personaQueAtiende.trim();
    const idSellerGroup = form.seller?.id;

    const referencias = form.referencias;
    const telefonos = form.telefonos;

    const formData = new FormData();

    formData.append("uuid", id);
    formData.append("nombre", nombre);
    if (estado) {
      formData.append("estado", estado);
    }
    if (municipio) {
      formData.append("municipio", municipio);
    }
    if (ciudad) {
      formData.append("ciudad", ciudad);
    }
    if (colonia) {
      formData.append("colonia", colonia);
    }
    if (calle) {
      formData.append("calle", calle);
    }
    if (numero) {
      formData.append("numero", numero);
    }
    if (cp) {
      formData.append("cp", cp);
    }

    formData.append("linkUbicacion", linkUbicacion);

    if (image) {
      formData.append("image", image);
    }

    if (personaQueAtiende) {
      formData.append("personaQueAtiende", personaQueAtiende);
    }

    if (idSellerGroup) {
      formData.append("idGroup", idSellerGroup.toString());
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

    const resetAll = () => {
      notify(
        `Seller ${idSeller ? "actualizado" : "creado"} correctamente`,
        "success"
      );
      setForm(initialForm);
      getSellers();
      closeForm();
      setIdSeller(0);
    };

    if (!idSeller) {
      // nuevo
      SellerApi.create(formData)
        .then(() => resetAll())
        .catch((err) => notify(err.response?.data?.message || err.message));
    } else {
      //Edicion
      SellerApi.update(idSeller, formData)
        .then(() => resetAll())
        .catch((err) => notify(err.response?.data?.message || err.message));
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12}>
        <TabsSeller
          sellerSelected={sellerSelected}
          form={form}
          setForm={setForm}
          initialForm={initialForm}
        />
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
        <Button
          fullWidth
          startIcon={<CloseIcon />}
          variant="outlined"
          onClick={() => {
            closeForm();
            setIdSeller(0);
          }}
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
