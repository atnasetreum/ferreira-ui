import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormSeller from "../../components/sellers/FormSeller";
import TableSellers from "../../components/sellers/TableSellers";
import MainLayout from "../../layouts/MainLayout";

function SellersPage() {
  return (
    <MainLayout>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper sx={{ p: 2 }}>
            <FormSeller />
          </Paper>
        </Grid>
        {/* <Grid item xs={12} md={12} lg={12}>
          <TableSellers />
        </Grid> */}
      </Grid>
    </MainLayout>
  );
}

export default SellersPage;
