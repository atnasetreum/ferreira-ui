import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormSeller from "../../components/sellers/FormSeller";
import TableSellers from "../../components/sellers/TableSellers";
import MainLayout from "../../layouts/MainLayout";
import { useEffect, useState } from "react";
import { SellerApi } from "../../utils/api";
import { Seller } from "../../ts/interfaces";
import DetailsSeller from "../../components/sellers/details/DetailsSeller";
import { Button, ButtonGroup } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useFilters } from "../../hooks";
import FiltersOptsSellers from "../../components/sellers/FiltersOptsSellers";

export interface FiltersSellers {
  id: string;
  uuid: string;
  nombre: string;
  personaQueAtiende: string;
  estado: string | null;
  municipio: string | null;
  ciudad: string | null;
  referencia: string;
  telefonoNombre: string;
  telefono: string;
}

const filtersInit = {
  id: "",
  uuid: "",
  nombre: "",
  personaQueAtiende: "",
  estado: null,
  municipio: null,
  ciudad: null,
  referencia: "",
  telefonoNombre: "",
  telefono: "",
};

function SellersPage() {
  const [action, setAction] = useState<string>("");
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [sellerSelected, setSellerSelected] = useState<Seller>({} as Seller);
  const { filters, setFilters, querystring } =
    useFilters<FiltersSellers>(filtersInit);

  const getSellers = () => {
    SellerApi.getAll(querystring).then(setSellers);
  };

  useEffect(() => {
    getSellers();
  }, [querystring]);

  return (
    <MainLayout title="Sellers">
      {action === "" && (
        <DetailsSeller
          sellerSelected={sellerSelected}
          setSellerSelected={setSellerSelected}
        />
      )}
      <Grid container spacing={1}>
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
        {["add", "edit"].includes(action) && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2 }}>
              <FormSeller
                sellerSelected={sellerSelected}
                getSellers={getSellers}
                closeForm={() => {
                  setSellerSelected({} as Seller);
                  setAction("");
                }}
              />
            </Paper>
          </Grid>
        )}
        {action === "" && (
          <>
            <Grid item xs={12} md={12} lg={12}>
              <FiltersOptsSellers
                filters={filters}
                setFilters={setFilters}
                resetFilters={() => setFilters(filtersInit)}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <TableSellers
                sellers={sellers}
                setSellerSelected={setSellerSelected}
                setAction={setAction}
                getSellers={getSellers}
              />
            </Grid>
          </>
        )}
      </Grid>
    </MainLayout>
  );
}

export default SellersPage;
