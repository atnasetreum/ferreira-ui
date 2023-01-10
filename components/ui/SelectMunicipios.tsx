import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MunicipioApi } from "../../utils/api";

interface Props {
  municipio: string | null;
  setMunicipio: (municipio: string | null) => void;
  entidad: string | null;
}

export const SelectMunicipios = ({
  municipio,
  setMunicipio,
  entidad,
}: Props) => {
  const [municipios, setMunicipios] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (entidad && !municipios.length) {
      MunicipioApi.getAll(entidad).then(setMunicipios);
    } else if (!entidad && municipios.length) {
      setMunicipios([]);
    }
  }, [entidad, municipios]);

  return (
    <Autocomplete
      options={municipios}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Municipio"
          autoComplete="current-password"
        />
      )}
      value={municipio}
      onChange={(event: any, newValue: string | null) => setMunicipio(newValue)}
    />
  );
};
