import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
import { UserApi } from "../../utils/api";

interface Props {
  value: { id: number; name: string } | null;
  onChange: (value: { id: number; name: string } | null) => void;
}

export default function SelectDrivers({ value, onChange }: Props) {
  const [drivers, setDrivers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    UserApi.getDrivers().then(setDrivers);
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo-drivers"
      options={drivers}
      getOptionLabel={(opt) => opt.name}
      renderInput={(params) => (
        <TextField {...params} label="Drivers" fullWidth />
      )}
      value={value}
      onChange={(event: any, newValue: { id: number; name: string } | null) =>
        onChange(newValue)
      }
    />
  );
}
