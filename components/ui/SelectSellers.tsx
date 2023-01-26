import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { SellerApi } from "../../utils/api";
export interface SellerRaw {
  id: number;
  uuid: string;
  nombre: string;
}
interface Props {
  label?: string;
  value: SellerRaw | null;
  onChange: (value: SellerRaw | null) => void;
  type?: string;
  idsDisabled?: number[];
}

export const SelectSellers = ({
  label,
  value,
  onChange,
  type,
  idsDisabled,
}: Props) => {
  const [options, setOptions] = useState<SellerRaw[]>([]);

  useEffect(() => {
    if (type === "noParent") {
      SellerApi.getAllNoParent().then(setOptions);
    } else {
      SellerApi.getAllBasicSeller().then(setOptions);
    }
  }, [type]);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => `${option.uuid} - ${option.nombre}`}
      getOptionDisabled={(option) => !!idsDisabled?.includes(option.id)}
      renderInput={(params) => (
        <TextField {...params} label={label ?? "Sellers"} autoComplete="off" />
      )}
      value={value}
      onChange={(event: any, newValue: SellerRaw | null) => onChange(newValue)}
    />
  );
};
