import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
import { CamionetaApi } from "../../utils/api";
import { Camioneta, Logistica } from "../../ts/interfaces";

interface Props {
  value: Camioneta | null;
  onChange: (value: Camioneta | null) => void;
}
export const SelectPlacas = ({ value, onChange }: Props) => {
  const [placas, setPlacas] = useState<Camioneta[]>([]);

  useEffect(() => {
    CamionetaApi.getAll().then(setPlacas);
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo-placas"
      options={placas}
      getOptionLabel={(opt) => `${opt.placa} - ${opt.logistica.name}`}
      renderInput={(params) => (
        <TextField {...params} label="Placas" fullWidth />
      )}
      value={value}
      onChange={(event: any, newValue: Camioneta | null) => onChange(newValue)}
    />
  );
};
