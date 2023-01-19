import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormSeller from "../../components/sellers/FormSeller";
import TableSellers from "../../components/sellers/TableSellers";
import MainLayout from "../../layouts/MainLayout";
import { useEffect, useState } from "react";
import { SellerApi } from "../../utils/api";
import { Seller } from "../../ts/interfaces";
import DetailsSeller from "../../components/sellers/details/DetailsSeller";
import { Button, ButtonGroup, Typography } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

function SellersPage() {
  const [action, setAction] = useState<string>("");
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [sellerSelected, setSellerSelected] = useState<Seller>({} as Seller);

  const getSellers = () => {
    SellerApi.getAll().then(setSellers);
  };

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <MainLayout>
      <DetailsSeller
        sellerSelected={sellerSelected}
        setSellerSelected={setSellerSelected}
      />
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h4" gutterBottom>
            Sellers
          </Typography>
        </Grid>
        {action === "" && (
          <Grid item xs={12} md={12} lg={12}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                startIcon={<PersonAddAlt1Icon />}
                onClick={() => setAction("add")}
              >
                Agregar
              </Button>
            </ButtonGroup>
          </Grid>
        )}
        {action === "add" && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2 }}>
              <FormSeller
                getSellers={getSellers}
                closeForm={() => setAction("")}
              />
            </Paper>
          </Grid>
        )}
        {action === "" && (
          <Grid item xs={12} md={12} lg={12}>
            <TableSellers
              sellers={sellers}
              setSellerSelected={setSellerSelected}
            />
          </Grid>
        )}
      </Grid>
    </MainLayout>
  );
}

export default SellersPage;
