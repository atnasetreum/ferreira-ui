import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { EntidadApi } from "../../utils/api";

interface Props {
  entidad: string | null;
  setEntidad: (entidad: string | null) => void;
}

export const SelectEstados = ({ entidad, setEntidad }: Props) => {
  const [entidades, setEntidades] = React.useState<string[]>([]);

  React.useEffect(() => {
    EntidadApi.getAll().then(setEntidades);
  }, []);

  return (
    <Autocomplete
      options={entidades}
      renderInput={(params) => (
        <TextField {...params} label="Estado" autoComplete="current-password" />
      )}
      value={entidad}
      onChange={(event: any, newValue: string | null) => setEntidad(newValue)}
    />
  );
};
