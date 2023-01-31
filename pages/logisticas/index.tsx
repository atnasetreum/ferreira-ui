import { Button, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Grid";
import MainLayout from "../../layouts/MainLayout";
import { useState, useEffect } from "react";
import { Logistica } from "../../ts/interfaces";
import { LogisticaApi } from "../../utils/api";
import FormLogisticas from "../../components/logisticas/FormLogisticas";
import TableLogisticas from "../../components/logisticas/TableLogisticas";
import AddIcon from "@mui/icons-material/Add";

function LogisticasPage() {
  const [action, setAction] = useState<string>("");
  const [logisticas, setLogisticas] = useState<Logistica[]>([]);
  const [logisticaSelected, setLogisticaSelected] = useState<Logistica>(
    {} as Logistica
  );

  const getLogisticas = () => {
    LogisticaApi.getAll().then(setLogisticas);
  };

  useEffect(() => {
    getLogisticas();
  }, []);
  return (
    <MainLayout title="Logisticas">
      <Grid container spacing={1}>
        {["add", "edit"].includes(action) && (
          <Grid item xs={12} md={12} lg={12}>
            <FormLogisticas
              setAction={setAction}
              getLogisticas={getLogisticas}
              logisticaSelected={logisticaSelected}
              setLogisticaSelected={setLogisticaSelected}
            />
          </Grid>
        )}
        {action === "" && (
          <>
            <Grid item xs={12} md={12} lg={12}>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => setAction("add")}
                >
                  Agregar
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <TableLogisticas
                logisticas={logisticas}
                getLogisticas={getLogisticas}
                setLogisticaSelected={setLogisticaSelected}
                setAction={setAction}
              />
            </Grid>
          </>
        )}
      </Grid>
    </MainLayout>
  );
}

export default LogisticasPage;
