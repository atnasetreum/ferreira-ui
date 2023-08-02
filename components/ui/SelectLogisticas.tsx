import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
import { LogisticaApi } from "../../utils/api";
import { Logistica } from "../../ts/interfaces";

interface Props {
  value: Logistica | null;
  onChange: (value: Logistica | null) => void;
}
export const SelectLogisticas = ({ value, onChange }: Props) => {
  const [logisticas, setLogisticas] = useState<Logistica[]>([]);

  useEffect(() => {
    LogisticaApi.getAll().then(setLogisticas);
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo-logisticas"
      options={logisticas}
      getOptionLabel={(opt) => opt.name}
      renderInput={(params) => (
        <TextField {...params} label="Logisticas" fullWidth />
      )}
      value={value}
      onChange={(event: any, newValue: Logistica | null) => {
        console.log({ event });
        onChange(newValue);
      }}
    />
  );
};
