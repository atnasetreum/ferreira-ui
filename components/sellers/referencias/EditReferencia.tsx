import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { NewSeller, Referencia } from "../FormSeller";
import { IconButton, ButtonGroup, Tooltip } from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PartyModeIcon from "@mui/icons-material/PartyMode";
import { Seller } from "../../../ts/interfaces";
import { createUrlImage } from "../../../utils/images";

interface Props {
  referencia: Referencia;
  setRefSelected: (referencia: Referencia) => void;
  setForm: (form: NewSeller) => void;
  form: NewSeller;
  sellerSelected: Seller;
}

export default function EditReferencia({
  referencia,
  setRefSelected,
  setForm,
  form,
  sellerSelected,
}: Props) {
  const handleClose = (type?: string) => {
    if (type) {
      const { referencias } = form;
      const idx = referencias.findIndex((ref) => ref.id === referencia.id);
      const refNew = [...referencias];
      refNew[idx] = referencia;
      setForm({ ...form, referencias: refNew });
      setRefSelected({} as Referencia);
    } else {
      setRefSelected({} as Referencia);
    }
  };

  const getCurrentImg = (image: File | null) => {
    if (image) {
      return (
        <Image
          src={URL.createObjectURL(image)}
          alt=""
          width={150}
          height={150}
        />
      );
    }

    if (Object.keys(sellerSelected).length) {
      const id = referencia.id;
      const referenciaCurrent = sellerSelected.references.find(
        (ref) => ref.id.toString() === id
      );
      if (referenciaCurrent && referenciaCurrent.image) {
        return (
          <Image
            src={createUrlImage(referenciaCurrent.image)}
            alt=""
            width={150}
            height={150}
          />
        );
      }
    }
    return null;
  };

  return (
    <Dialog open={true} onClose={() => handleClose()}>
      <DialogTitle>Referencia</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Descripcion"
          fullWidth
          variant="standard"
          autoComplete="off"
          value={referencia.description}
          onChange={({ target: { value } }) =>
            setRefSelected({ ...referencia, description: value })
          }
        />
        <TextField
          autoFocus
          margin="dense"
          label="Link de la ubicacion"
          fullWidth
          variant="standard"
          autoComplete="off"
          value={referencia.linkUbicacion}
          onChange={({ target: { value } }) =>
            setRefSelected({ ...referencia, linkUbicacion: value })
          }
        />
        <center>
          {getCurrentImg(referencia.image)}
          <br />
          <ButtonGroup aria-label="outlined primary button group">
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
                    setRefSelected({ ...referencia, image: files[0] });
                  }
                }}
              />
              {!referencia.image ? (
                <Tooltip title="Agregar imagen">
                  <AddAPhotoIcon />
                </Tooltip>
              ) : (
                <Tooltip title="Actualizar imagen">
                  <PartyModeIcon />
                </Tooltip>
              )}
            </IconButton>
            {referencia.image && (
              <Tooltip title="Eliminar imagen">
                <IconButton
                  color="error"
                  aria-label="upload picture"
                  component="label"
                  onClick={() => setRefSelected({ ...referencia, image: null })}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )}
          </ButtonGroup>
        </center>
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
