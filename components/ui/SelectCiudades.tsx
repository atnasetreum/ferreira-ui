import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CiudadApi } from "../../utils/api";

interface Props {
  ciudad: string | null;
  setCiudad: (ciudad: string | null) => void;
  entidad: string | null;
  municipio: string | null;
}

export const SelectCiudades = ({
  ciudad,
  setCiudad,
  entidad,
  municipio,
}: Props) => {
  const [ciudades, setCiudades] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (entidad && municipio && !ciudades.length) {
      CiudadApi.getAll(entidad, municipio).then(setCiudades);
    } else if (!entidad && !municipio && ciudades.length) {
      setCiudades([]);
    }
  }, [entidad, municipio, ciudades]);

  return (
    <Autocomplete
      options={ciudades}
      renderInput={(params) => (
        <TextField {...params} label="Ciudad" autoComplete="off" />
      )}
      value={ciudad}
      onChange={(event: any, newValue: string | null) => setCiudad(newValue)}
    />
  );
};
