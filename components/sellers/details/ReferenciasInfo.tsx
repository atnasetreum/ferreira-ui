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

function ReferenciasInfo({ sellerSelected }: Props) {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {sellerSelected.references.map((referencia) => (
          <Grid item xs={2} sm={4} md={4} key={referencia.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {referencia.image && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${process.env.NEXT_PUBLIC_API_ROUTE}/static/images/sellers/${referencia.image}`}
                    alt={referencia.description}
                  />
                )}
                <CardContent>
                  <Typography
                    sx={{ display: "inline" }}
                    component={Link}
                    color="text.primary"
                  >
                    <Link
                      href={referencia.link}
                      underline="none"
                      target="_blank"
                    >
                      {referencia.link}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {referencia.description}
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

export default ReferenciasInfo;
