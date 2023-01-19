import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import { Seller } from "../../../ts/interfaces";
import { formatTimeStamp } from "../../../utils/dates";
import {
  Card,
  CardActionArea,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { createUrlImage } from "../../../utils/images";

const style = {
  width: "100%",
  bgcolor: "background.paper",
};

interface Details {
  label: string;
  value: React.ReactNode | string | number;
}

function ListDetails({ details }: { details: Details[] }) {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {details.map((detail) => (
        <div key={detail.label}>
          <ListItem>
            <ListItemText primary={detail.value} secondary={detail.label} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
}

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

interface Props {
  sellerSelected: Seller;
}

export default function GeneralInfo({ sellerSelected }: Props) {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <center>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={createUrlImage(sellerSelected.image)}
                alt={sellerSelected.nombre}
              />
            </CardActionArea>
          </Card>
        </center>
      </Grid>
      <Grid item xs>
        <ListDetails
          details={[
            {
              label: "ID",
              value: sellerSelected.id,
            },
            {
              label: "UUID",
              value: sellerSelected.uuid,
            },
            {
              label: "Nombre",
              value: sellerSelected.nombre,
            },
            {
              label: "Link de la ubicacion",
              value: (
                <Typography
                  sx={{ display: "inline" }}
                  component={Link}
                  color="text.primary"
                >
                  <Link
                    href={sellerSelected.linkUbicacion}
                    underline="none"
                    target="_blank"
                  >
                    {sellerSelected.linkUbicacion}
                  </Link>
                </Typography>
              ),
            },
            {
              label: "Persona que atiende",
              value: sellerSelected.personaQueAtiende,
            },
            {
              label: "Fecha de creacion",
              value: formatTimeStamp(sellerSelected.createdAt),
            },
            {
              label: "Ultima Actualizacion",
              value: formatTimeStamp(sellerSelected.updatedAt),
            },
          ]}
        />
      </Grid>
      <Divider orientation="vertical" flexItem>
        Direccion
      </Divider>
      <Grid item xs>
        <ListDetails
          details={[
            {
              label: "Estado",
              value: sellerSelected.estado,
            },
            {
              label: "Municipio",
              value: sellerSelected.municipio,
            },
            {
              label: "Ciudad",
              value: sellerSelected.ciudad,
            },
            {
              label: "Colonia",
              value: sellerSelected.colonia,
            },
            {
              label: "Calle",
              value: sellerSelected.calle,
            },
            {
              label: "Numero",
              value: sellerSelected.numero,
            },
            {
              label: "C.P.",
              value: sellerSelected.cp,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
