import { Button, ButtonGroup, Grid, Paper, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import SelectTypeUsers from "../ui/SelectTypeUsers";
import { useState } from "react";
import { UserApi } from "../../utils/api";
import { useNotify } from "../../hooks";

interface Form {
  name: string;
  type: string | null;
  password: string;
}

const initForm = {
  name: "",
  type: null,
  password: "",
};

interface Props {
  cancelCreate: () => void;
  getUsers: () => void;
}

const FormUsers = ({ cancelCreate, getUsers }: Props) => {
  const [form, setForm] = useState<Form>(initForm);
  const { notify } = useNotify();

  const saveUser = () => {
    const name = form.name.trim();
    const password = form.password.trim();

    if (!name) {
      return notify("Agregue un nombre");
    }

    if (!password) {
      return notify("Agregue una contraseña");
    }

    if (!form.type) {
      return notify("Seleccione un tipo");
    }

    UserApi.save({
      name,
      idUserType: Number(form.type),
      password,
    })
      .then(() => {
        notify("Usuario creado correctamente", "success");
        getUsers();
        cancelCreate();
      })
      .catch((err) => notify(err.response?.data?.message || err.message));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <TextField
            label="Nombre completo"
            variant="outlined"
            fullWidth
            value={form.name}
            onChange={({ target: { value } }) =>
              setForm({ ...form, name: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            value={form.password}
            onChange={({ target: { value } }) =>
              setForm({ ...form, password: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper>
          <SelectTypeUsers
            type={form.type}
            setType={(type) => setForm({ ...form, type })}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <ButtonGroup aria-label="outlined primary button group" sx={{ mt: 1 }}>
          <Button variant="contained" endIcon={<SaveIcon />} onClick={saveUser}>
            Guardar
          </Button>
          <Button
            variant="outlined"
            endIcon={<SaveIcon />}
            onClick={cancelCreate}
          >
            Cancelar
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default FormUsers;
