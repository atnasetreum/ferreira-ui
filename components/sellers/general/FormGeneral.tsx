import {
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {
  SelectCiudades,
  SelectEstados,
  SelectMunicipios,
  SelectSellers,
} from "../../ui";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { NewSeller } from "../FormSeller";
import { Seller } from "../../../ts/interfaces";
import Image from "next/image";
import { createUrlImage } from "../../../utils/images";
import { useEffect, useState } from "react";
import { getUrlMap } from "../../../utils/strings";

interface Props {
  form: NewSeller;
  setForm: (form: NewSeller) => void;
  initialForm: NewSeller;
  sellerSelected: Seller;
}

export const FormGeneral = ({
  form,
  setForm,
  initialForm,
  sellerSelected,
}: Props) => {
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    if (!form.image) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(form.image);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [form]);

  const getImageCurrent = () => {
    if (preview) {
      return (
        <>
          <center>Imagen Seleccionada</center>
          <center>
            <Image src={preview} alt={""} width={350} height={350} />
          </center>
        </>
      );
    } else if (Object.keys(sellerSelected).length) {
      return (
        <>
          <center>Imagen Seleccionada</center>
          <center>
            <Image
              src={createUrlImage(sellerSelected.image)}
              alt={""}
              width={350}
              height={350}
            />
          </center>
        </>
      );
    }
    return null;
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="ID"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={form.id}
            onChange={({ target: { value } }) =>
              setForm({ ...form, id: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={form.nombre}
            onChange={({ target: { value } }) =>
              setForm({ ...form, nombre: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <SelectEstados
            entidad={form.estado}
            setEntidad={(estado) => {
              if (!estado) {
                setForm({ ...form, estado, municipio: null, ciudad: null });
              } else {
                setForm({ ...form, estado });
              }
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <SelectMunicipios
            entidad={form.estado}
            municipio={form.municipio}
            setMunicipio={(municipio) => {
              if (!municipio) {
                setForm({ ...form, municipio, ciudad: null });
              } else {
                setForm({ ...form, municipio });
              }
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <SelectCiudades
            entidad={form.estado}
            municipio={form.municipio}
            ciudad={form.ciudad}
            setCiudad={(ciudad) => setForm({ ...form, ciudad })}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Colonia"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={form.colonia}
            onChange={({ target: { value } }) =>
              setForm({ ...form, colonia: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Calle"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={form.calle}
            onChange={({ target: { value } }) =>
              setForm({ ...form, calle: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Numero"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={form.numero}
            onChange={({ target: { value } }) =>
              setForm({ ...form, numero: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Codigo postal"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={form.cp}
            onChange={({ target: { value } }) =>
              setForm({ ...form, cp: value })
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
            value={form.linkUbicacion}
            onChange={({ target: { value } }) =>
              setForm({ ...form, linkUbicacion: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Persona que atiende"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={form.personaQueAtiende}
            onChange={({ target: { value } }) =>
              setForm({ ...form, personaQueAtiende: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <SelectSellers
            label="Seller padre"
            type="noParent"
            value={form.seller}
            onChange={(seller) => setForm({ ...form, seller })}
          />
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        container
        spacing={0}
        direction="column"
        justifyContent="center"
      >
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
                setForm({ ...form, image: files[0] });
              }
            }}
          />
          <AddAPhotoIcon fontSize="large" />
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 1 }}>
            {form.image && form.image.name.substring(0, 10)}...
          </Typography>
        </IconButton>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Button
          variant="contained"
          startIcon={<CleaningServicesIcon />}
          fullWidth
          onClick={() => setForm(initialForm)}
        >
          Reinciar Formulario
        </Button>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        {getImageCurrent()}
      </Grid>
    </Grid>
  );
};
