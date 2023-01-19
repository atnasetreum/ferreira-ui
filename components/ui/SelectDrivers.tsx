import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
import { UserApi } from "../../utils/api";

export default function SelectDrivers() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    UserApi.getDrivers().then(setUsers);
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo-drivers"
      options={users}
      getOptionLabel={(opt) => opt.name}
      renderInput={(params) => (
        <TextField {...params} label="Drivers" fullWidth />
      )}
    />
  );
}
