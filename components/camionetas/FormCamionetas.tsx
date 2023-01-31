import {
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import { useNotify } from "../../hooks";
import { CamionetaApi } from "../../utils/api";
import { Camioneta, Logistica } from "../../ts/interfaces";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { SelectLogisticas } from "../ui";
import Image from "next/image";
import { createUrlImage } from "../../utils/images";

export interface IFormCamionetas {
  logistica: Logistica | null;
  placa: string;
  image: File | null;
}

const initForm = {
  logistica: null,
  placa: "",
  image: null,
};

interface Props {
  setAction: (action: string) => void;
  getCamionetas: () => void;
  camionetaSelected: Camioneta;
  setCamionetaSelected: (camionetaSelected: Camioneta) => void;
}

const FormLogisticas = ({
  setAction,
  getCamionetas,
  camionetaSelected,
  setCamionetaSelected,
}: Props) => {
  const [form, setForm] = useState<IFormCamionetas>(initForm);
  const [id, setId] = useState<number>(0);
  const [preview, setPreview] = useState<string>("");
  const { notify } = useNotify();

  useEffect(() => {
    if (!form.image) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(form.image);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [form]);

  useEffect(() => {
    if (Object.keys(camionetaSelected).length && !id) {
      setId(camionetaSelected.id);
      setForm({
        placa: camionetaSelected.placa,
        image: null,
        logistica: camionetaSelected.logistica,
      });
    }
  }, [camionetaSelected, id]);

  const saveLogistica = () => {
    const placa = form.placa.trim();
    const logistica = form.logistica;
    if (!logistica) {
      return notify("Seleccione una logistica");
    }

    if (!placa) {
      return notify("Agregue la placa de la camioneta");
    }

    if (!form.image && !Object.keys(camionetaSelected).length) {
      return notify("Seleccione una imagen");
    }

    const formData = new FormData();
    formData.append("placa", placa);
    formData.append("logisticaId", logistica.id.toString());

    if (form.image) {
      formData.append("image", form.image);
    }

    if (!id) {
      // Creacion
      CamionetaApi.create(formData)
        .then(() => {
          notify("Placa creada correctamente", "success");
          setAction("");
          getCamionetas();
        })
        .catch((err) => notify(err.response?.data?.message || err.message));
    } else {
      // Edicion
      CamionetaApi.update(id, formData)
        .then(() => {
          notify("Placa actualizada correctamente", "success");
          setAction("");
          getCamionetas();
          setCamionetaSelected({} as Camioneta);
          setId(0);
        })
        .catch((err) => notify(err.response?.data?.message || err.message));
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <SelectLogisticas
            value={form.logistica}
            onChange={(value) => setForm({ ...form, logistica: value })}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <TextField
            label="Placa"
            fullWidth
            autoComplete="off"
            value={form.placa}
            onChange={({ target: { value } }) =>
              setForm({ ...form, placa: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
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
          <PhotoCamera />
        </IconButton>
        {preview ? (
          <Image src={preview} alt={""} width={300} height={150} />
        ) : camionetaSelected?.image ? (
          <Image
            src={createUrlImage(camionetaSelected.image, "cars")}
            alt={""}
            width={300}
            height={150}
          />
        ) : null}
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <ButtonGroup aria-label="outlined primary button group" fullWidth>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<ClearIcon />}
            sx={{ mt: 1 }}
            onClick={() => {
              setAction("");
              setCamionetaSelected({} as Camioneta);
              setId(0);
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            fullWidth
            startIcon={<SaveIcon />}
            sx={{ mt: 1 }}
            onClick={saveLogistica}
          >
            Guardar
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default FormLogisticas;
