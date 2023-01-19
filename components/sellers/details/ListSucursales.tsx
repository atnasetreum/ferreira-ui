import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Link } from "@mui/material";
import { Seller } from "../../../ts/interfaces";

interface Props {
  sellerSelected: Seller;
}

function ListSucursales({ sellerSelected }: Props) {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {sellerSelected.sellers.map((seller) => (
          <Grid item xs={2} sm={4} md={4} key={seller.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {seller.image && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${process.env.NEXT_PUBLIC_API_ROUTE}/static/images/sellers/${seller.image}`}
                    alt={seller.nombre}
                  />
                )}
                <CardContent>
                  <Typography
                    sx={{ display: "inline" }}
                    component={Link}
                    color="text.primary"
                  >
                    <Link
                      href={seller.linkUbicacion}
                      underline="none"
                      target="_blank"
                    >
                      {seller.linkUbicacion}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {seller.nombre}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ListSucursales;
