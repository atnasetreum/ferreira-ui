import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { SellerApi } from "../../utils/api";
interface SellerRaw {
  id: number;
  uuid: string;
  nombre: string;
}
interface Props {
  label?: string;
  value: SellerRaw | null;
  onChange: (value: SellerRaw | null) => void;
}

export const SelectSellers = ({ label, value, onChange }: Props) => {
  const [options, setOptions] = useState<SellerRaw[]>([]);

  useEffect(() => {
    SellerApi.getAllNoParent().then(setOptions);
  }, []);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => `${option.uuid} - ${option.nombre}`}
      renderInput={(params) => (
        <TextField {...params} label={label ?? "Sellers"} />
      )}
      value={value}
      onChange={(event: any, newValue: SellerRaw | null) => onChange(newValue)}
    />
  );
};
