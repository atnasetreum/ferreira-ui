import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { UserType } from "../../ts/interfaces";
import { UserTypeApi } from "../../utils/api";

interface Props {
  type: string | null;
  setType: (type: string | null) => void;
}

const SelectTypeUsers = ({ type, setType }: Props) => {
  const [types, setTypes] = useState<UserType[]>([]);

  useEffect(() => {
    UserTypeApi.getAll().then(setTypes);
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label-type-users">Tipo</InputLabel>
      <Select
        labelId="demo-simple-select-label-type-users"
        id="demo-simple-select-type-users"
        label="Tipo"
        value={type}
        onChange={({ target: { value } }) => setType(value)}
      >
        {types.map((type) => (
          <MenuItem key={type.id} value={type.id}>
            {type.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTypeUsers;
