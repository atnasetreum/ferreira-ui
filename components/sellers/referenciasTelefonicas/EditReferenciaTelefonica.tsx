import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { NewSeller, Telefono } from "../FormSeller";
import { IconButton, ButtonGroup, Tooltip } from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PartyModeIcon from "@mui/icons-material/PartyMode";

interface Props {
  telefono: Telefono;
  setRefSelected: (telefono: Telefono) => void;
  setForm: (form: NewSeller) => void;
  form: NewSeller;
}

export default function EditReferenciaTelefonica({
  telefono,
  setRefSelected,
  setForm,
  form,
}: Props) {
  const handleClose = (type?: string) => {
    if (type) {
      const { telefonos } = form;
      const idx = telefonos.findIndex((ref) => ref.id === telefono.id);
      const refNew = [...telefonos];
      refNew[idx] = telefono;
      setForm({ ...form, telefonos: refNew });
      setRefSelected({} as Telefono);
    } else {
      setRefSelected({} as Telefono);
    }
  };

  return (
    <Dialog open={true} onClose={() => handleClose()}>
      <DialogTitle>Referencia Telefonica</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Nombre"
          fullWidth
          variant="standard"
          autoComplete="off"
          value={telefono.name}
          onChange={({ target: { value } }) =>
            setRefSelected({ ...telefono, name: value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          label="Telefono"
          fullWidth
          variant="standard"
          autoComplete="off"
          value={telefono.phone}
          onChange={({ target: { value } }) =>
            setRefSelected({ ...telefono, phone: value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancelar</Button>
        <Button onClick={() => handleClose("ok")} variant="contained">
          Actualizar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
