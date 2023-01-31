import { Button, ButtonGroup, Grid, Paper, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import { useNotify } from "../../hooks";
import { LogisticaApi } from "../../utils/api";
import { Logistica } from "../../ts/interfaces";

export interface IFormLogisticas {
  name: string;
}

const initForm = {
  name: "",
};

interface Props {
  setAction: (action: string) => void;
  getLogisticas: () => void;
  logisticaSelected: Logistica;
  setLogisticaSelected: (logisticaSelected: Logistica) => void;
}

const FormLogisticas = ({
  setAction,
  getLogisticas,
  logisticaSelected,
  setLogisticaSelected,
}: Props) => {
  const [form, setForm] = useState<IFormLogisticas>(initForm);
  const [id, setId] = useState<number>(0);
  const { notify } = useNotify();

  useEffect(() => {
    if (Object.keys(logisticaSelected).length && !id) {
      setId(logisticaSelected.id);
      setForm({ name: logisticaSelected.name });
    }
  }, [logisticaSelected, id]);

  const saveLogistica = () => {
    const name = form.name.trim();
    if (!name) {
      return notify("Agregue el nombre de la logistica");
    }

    if (!id) {
      // Creacion
      LogisticaApi.create(name)
        .then(() => {
          notify("Logistica creada correctamente", "success");
          setAction("");
          getLogisticas();
        })
        .catch((err) => notify(err.response?.data?.message || err.message));
    } else {
      // Edicion
      LogisticaApi.update(id, name)
        .then(() => {
          notify("Logistica actualizada correctamente", "success");
          setAction("");
          getLogisticas();
          setLogisticaSelected({} as Logistica);
          setId(0);
        })
        .catch((err) => notify(err.response?.data?.message || err.message));
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} lg={6}>
        <Paper>
          <TextField
            label="Nombre"
            fullWidth
            autoComplete="off"
            value={form.name}
            onChange={({ target: { value } }) =>
              setForm({ ...form, name: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ButtonGroup aria-label="outlined primary button group" fullWidth>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<ClearIcon />}
            sx={{ mt: 1 }}
            onClick={() => {
              setAction("");
              setLogisticaSelected({} as Logistica);
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
