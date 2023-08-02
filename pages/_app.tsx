import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "../store";
import { AuthProvider } from "../contexts/auth";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#35A29F",
    },
    secondary: {
      main: "#0B666A",
    },
  },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
}
