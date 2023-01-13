import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormSeller from "../../components/sellers/FormSeller";
import TableSellers from "../../components/sellers/TableSellers";
import MainLayout from "../../layouts/MainLayout";
import { useEffect, useState } from "react";
import { SellerApi } from "../../utils/api";
import { Seller } from "../../ts/interfaces";

function SellersPage() {
  const [sellers, setSellers] = useState<Seller[]>([]);

  const getSellers = () => {
    SellerApi.getAll().then(setSellers);
  };

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <MainLayout>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper sx={{ p: 2 }}>
            <FormSeller getSellers={getSellers} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TableSellers sellers={sellers} />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default SellersPage;
