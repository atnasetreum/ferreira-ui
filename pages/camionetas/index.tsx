import { Button, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Grid";
import MainLayout from "../../layouts/MainLayout";
import { useState, useEffect } from "react";
import { Camioneta } from "../../ts/interfaces";
import { CamionetaApi } from "../../utils/api";
import FormCamionetas from "../../components/camionetas/FormCamionetas";
import TableCamionetas from "../../components/camionetas/TableCamionetas";
import AddIcon from "@mui/icons-material/Add";

function CamionetasPage() {
  const [action, setAction] = useState<string>("");
  const [camionetas, setCamionetas] = useState<Camioneta[]>([]);
  const [camionetaSelected, setCamionetaSelected] = useState<Camioneta>(
    {} as Camioneta
  );

  const getCamionetas = () => {
    CamionetaApi.getAll().then(setCamionetas);
  };

  useEffect(() => {
    getCamionetas();
  }, []);
  return (
    <MainLayout title="Camionetas">
      <Grid container spacing={1}>
        {["add", "edit"].includes(action) && (
          <Grid item xs={12} md={12} lg={12}>
            <FormCamionetas
              setAction={setAction}
              getCamionetas={getCamionetas}
              camionetaSelected={camionetaSelected}
              setCamionetaSelected={setCamionetaSelected}
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
              <TableCamionetas
                camionetas={camionetas}
                getCamionetas={getCamionetas}
                setCamionetaSelected={setCamionetaSelected}
                setAction={setAction}
              />
            </Grid>
          </>
        )}
      </Grid>
    </MainLayout>
  );
}

export default CamionetasPage;
