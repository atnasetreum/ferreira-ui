import { Button, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import FormRutas from "../../components/rutas/FormRutas/FormRutas";
import TableRutas from "../../components/rutas/TableRutas";
import MainLayout from "../../layouts/MainLayout";
import ForkRightIcon from "@mui/icons-material/ForkRight";

function RutasPage() {
  const [action, setAction] = useState<string>("");
  return (
    <MainLayout title="Rutas">
      <Grid container spacing={1}>
        {action === "" && (
          <Grid item xs={12} md={12} lg={12}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                startIcon={<ForkRightIcon />}
                onClick={() => setAction("add")}
              >
                Agregar
              </Button>
            </ButtonGroup>
          </Grid>
        )}
        {["add", "edit"].includes(action) && (
          <Grid item xs={12} md={12} lg={12}>
            <FormRutas setAction={setAction} />
          </Grid>
        )}
        {action === "" && (
          <Grid item xs={12} md={12} lg={12}>
            <TableRutas />
          </Grid>
        )}
      </Grid>
    </MainLayout>
  );
}

export default RutasPage;
