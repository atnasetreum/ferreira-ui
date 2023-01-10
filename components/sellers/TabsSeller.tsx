import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormReferencias from "./FormReferencias";
import FormTelefonos from "./FormTelefonos";
import { NewSeller } from "./FormSeller";
import { FormGeneral } from "./FormGeneral";

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
  form: NewSeller;
  setForm: (form: NewSeller) => void;
  initialForm: NewSeller;
}

export default function TabsSeller({ form, setForm, initialForm }: Props) {
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
          <Tab label="Referencias" {...a11yProps(1)} />
          <Tab label="Telefonos" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <FormGeneral
            form={form}
            setForm={setForm}
            initialForm={initialForm}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FormReferencias form={form} setForm={setForm} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <FormTelefonos form={form} setForm={setForm} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
