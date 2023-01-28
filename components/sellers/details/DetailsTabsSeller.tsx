import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Seller } from "../../../ts/interfaces";
import GeneralInfo from "./GeneralInfo";
import ReferenciasInfo from "./ReferenciasInfo";
import TelefonosInfo from "./TelefonosInfo";
import ListSucursales from "./ListSucursales";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

interface Props {
  sellerSelected: Seller;
}

export default function DetailsTabsSeller({ sellerSelected }: Props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="General" {...a11yProps(0)} />

          <Tab
            label={`Referencias ${sellerSelected.references.length}`}
            {...a11yProps(1)}
          />
          <Tab
            label={`Telefonos ${sellerSelected.referencePhones.length}`}
            {...a11yProps(2)}
          />
          <Tab
            label={`Sucursales ${sellerSelected.sellers.length}`}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <GeneralInfo sellerSelected={sellerSelected} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ReferenciasInfo sellerSelected={sellerSelected} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TelefonosInfo sellerSelected={sellerSelected} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <ListSucursales sellerSelected={sellerSelected} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
