import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled, lighten, darken } from "@mui/system";
import { User } from "../../ts/interfaces";
import { UserApi } from "../../utils/api";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

interface Props {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const SelectUsers = ({ user, setUser }: Props) => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    UserApi.getAll().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <Autocomplete
      id="grouped-demo"
      options={users}
      groupBy={(option) => option.userType.name}
      getOptionLabel={(option) => `${option.name} - ${option.userType.name}`}
      renderInput={(params) => <TextField {...params} label="Usuarios" />}
      renderGroup={(params) => (
        <li key={params.group}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
      value={user}
      onChange={(_, newValue) => setUser(newValue)}
    />
  );
};
