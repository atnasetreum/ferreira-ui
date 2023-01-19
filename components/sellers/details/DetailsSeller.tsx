import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Seller } from "../../../ts/interfaces";
import DetailsTabsSeller from "./DetailsTabsSeller";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface Props {
  sellerSelected: Seller;
  setSellerSelected: (seller: Seller) => void;
}

export default function DetailsSeller({
  sellerSelected,
  setSellerSelected,
}: Props) {
  const handleClose = () => {
    setSellerSelected({} as Seller);
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-seller"
      open={!!Object.keys(sellerSelected).length}
      fullWidth={true}
      maxWidth="lg"
    >
      <BootstrapDialogTitle id="customized-dialog-seller" onClose={handleClose}>
        Detalles del seller: {sellerSelected?.nombre}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        {Object.keys(sellerSelected).length && (
          <DetailsTabsSeller sellerSelected={sellerSelected} />
        )}
      </DialogContent>
      <DialogActions></DialogActions>
    </BootstrapDialog>
  );
}
