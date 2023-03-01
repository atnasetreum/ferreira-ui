import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { FiltersSellers } from "../../pages/sellers";
import SouthIcon from "@mui/icons-material/South";
//import { SelectCiudades, SelectEstados, SelectMunicipios } from "../ui";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

interface Props {
  filters: FiltersSellers;
  setFilters: (filters: FiltersSellers) => void;
  resetFilters: () => void;
}

const FiltersOptsSellers = ({ filters, setFilters, resetFilters }: Props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="subtitle1" gutterBottom>
          Filtros <SouthIcon />
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={1}>
        <Paper>
          <TextField
            type="number"
            label="ID"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={filters.id}
            onChange={({ target: { value } }) =>
              setFilters({ ...filters, id: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={1}>
        <Paper>
          <TextField
            label="UUID"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={filters.uuid}
            onChange={({ target: { value } }) =>
              setFilters({ ...filters, uuid: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={filters.nombre}
            onChange={({ target: { value } }) =>
              setFilters({ ...filters, nombre: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Referencia"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={filters.referencia}
            onChange={({ target: { value } }) =>
              setFilters({ ...filters, referencia: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Telefono nombre"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={filters.telefonoNombre}
            onChange={({ target: { value } }) =>
              setFilters({ ...filters, telefonoNombre: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <TextField
            label="Telefono numero"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={filters.telefono}
            onChange={({ target: { value } }) =>
              setFilters({ ...filters, telefono: value })
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Button
          sx={{ mt: 1 }}
          startIcon={<CleaningServicesIcon />}
          fullWidth
          variant="contained"
          onClick={resetFilters}
        >
          Reiniciar Filtros
        </Button>
      </Grid>
      {/* <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <SelectEstados
            entidad={filters.estado}
            setEntidad={(estado) => {
              if (!estado) {
                setFilters({
                  ...filters,
                  estado,
                  municipio: null,
                  ciudad: null,
                });
              } else {
                setFilters({ ...filters, estado });
              }
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <SelectMunicipios
            entidad={filters.estado}
            municipio={filters.municipio}
            setMunicipio={(municipio) => {
              if (!municipio) {
                setFilters({ ...filters, municipio, ciudad: null });
              } else {
                setFilters({ ...filters, municipio });
              }
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <Paper>
          <SelectCiudades
            entidad={filters.estado}
            municipio={filters.municipio}
            ciudad={filters.ciudad}
            setCiudad={(ciudad) => setFilters({ ...filters, ciudad })}
          />
        </Paper>
      </Grid> */}
    </Grid>
  );
};

export default FiltersOptsSellers;
