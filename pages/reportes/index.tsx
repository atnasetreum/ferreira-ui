import Grid from "@mui/material/Grid";
import MainLayout from "../../layouts/MainLayout";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Button, ButtonGroup, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import TableReportes from "../../components/reportes/TableReportes";
import { RouteApi } from "../../utils/api";
import { Logistica, Reporte } from "../../ts/interfaces";
import { SelectLogisticas } from "../../components/ui";
import { pdf } from "@react-pdf/renderer";
import PdfReporte from "../../components/reportes/PdfReporte";
import { saveAs } from "file-saver";
import { formatDateDynamic } from "../../utils/dates";

interface Form {
  startDate: Date | null;
  endDate: Date | null;
  logistica: Logistica | null;
}

function LogisticasPage() {
  const [form, setForm] = useState<Form>({
    startDate: null,
    endDate: null,
    logistica: null,
  });

  const [data, setData] = useState<Reporte[]>([]);

  useEffect(() => {
    if (
      form.startDate &&
      form.endDate &&
      form.startDate.toString() !== "Invalid Date" &&
      form.endDate.toString() !== "Invalid Date" &&
      form.logistica
    ) {
      RouteApi.getDataReport({
        startDate: formatDateDynamic(form.startDate, "YYYY-MM-DD"),
        endDate: formatDateDynamic(form.endDate, "YYYY-MM-DD"),
        logisticaId: form.logistica.id,
      }).then(setData);
    }
  }, [form]);

  const createPdf = async (fileName: string) => {
    if (form.startDate && form.endDate && form.logistica) {
      const blob = await pdf(
        <PdfReporte
          data={data}
          startDate={formatDateDynamic(form.startDate, "LL")}
          endDate={formatDateDynamic(form.endDate, "LL")}
          logistica={form.logistica.name}
        />
      ).toBlob();
      saveAs(blob, fileName);
    }
  };

  return (
    <MainLayout title="Reportes">
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper>
            <SelectLogisticas
              value={form.logistica}
              onChange={(value) => setForm({ ...form, logistica: value })}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Fecha Inicial"
                slotProps={{
                  textField: { fullWidth: true },
                }}
                format="dd/MM/yyyy"
                value={form.startDate}
                onChange={(value) => setForm({ ...form, startDate: value })}
                maxDate={form.endDate}
              />
            </LocalizationProvider>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Fecha Final"
                slotProps={{
                  textField: { fullWidth: true },
                }}
                format="dd/MM/yyyy"
                value={form.endDate}
                onChange={(value) => setForm({ ...form, endDate: value })}
                minDate={form.startDate}
              />
            </LocalizationProvider>
          </Paper>
        </Grid>
        {!!data.length && (
          <Grid item xs={12} md={6} lg={3}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{ mt: 1 }}
              fullWidth
            >
              <Button
                startIcon={<SimCardDownloadIcon />}
                onClick={() => {
                  if (
                    form.startDate &&
                    form.endDate &&
                    form.startDate.toString() !== "Invalid Date" &&
                    form.endDate.toString() !== "Invalid Date" &&
                    form.logistica
                  ) {
                    createPdf(
                      `${form.logistica.name} del ${formatDateDynamic(
                        form.startDate,
                        "l"
                      )} al ${formatDateDynamic(form.endDate, "l")}.pdf`
                    );
                  }
                }}
              >
                Descargar Reporte
              </Button>
            </ButtonGroup>
          </Grid>
        )}
        <Grid item xs={12} md={12} lg={12}>
          <TableReportes data={data} />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default LogisticasPage;
