import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AuthContext } from "../../contexts/auth";
import { userTypes } from "../../constants";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface elmMenu {
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  path: string;
  role?: string;
}

const menu: elmMenu[] = [
  {
    name: "Inicio",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    name: "Sellers",
    icon: ContactPhoneIcon,
    path: "/sellers",
    role: userTypes.ADMIN,
  },
  {
    name: "Rutas",
    icon: LocationOnIcon,
    path: "/rutas",
    role: userTypes.ADMIN,
  },
  {
    name: "Camionetas",
    icon: DirectionsCarIcon,
    path: "/camionetas",
    role: userTypes.ADMIN,
  },
  {
    name: "Logisticas",
    icon: LocationCityIcon,
    path: "/logisticas",
    role: userTypes.ADMIN,
  },
  {
    name: "Reportes",
    icon: AssessmentIcon,
    path: "/reportes",
    role: userTypes.ADMIN,
  },
  {
    name: "Usuarios",
    icon: PeopleAltIcon,
    path: "/users",
    role: userTypes.ADMIN,
  },
];

const style = {
  backgroundColor: "rgb(204, 204, 204) !important",
  borderLeft: "8px solid #35A29F",
  width: "calc(100% - 8px) !important",
};

const ComponentMenu = ({ name, icon: Icon, path, role }: elmMenu) => {
  const router = useRouter();
  const { user } = React.useContext(AuthContext);
  const userType = React.useMemo(() => {
    return user?.userType;
  }, [user]);

  if (role && role !== userType) {
    return null;
  }

  return (
    <ListItemButton
      onClick={() => router.push(path)}
      selected={router.pathname === path}
      style={router.pathname === path ? style : {}}
    >
      <ListItemIcon>
        <Icon color={router.pathname === path ? "primary" : "inherit"} />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  );
};

export const MainListItems = () => {
  return (
    <React.Fragment>
      {menu.map((elm) => (
        <ComponentMenu key={elm.name} {...elm} />
      ))}
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  const { logoutUser } = React.useContext(AuthContext);
  return (
    <React.Fragment>
      <ListItemButton onClick={() => logoutUser()}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Salir" />
      </ListItemButton>
    </React.Fragment>
  );
};
