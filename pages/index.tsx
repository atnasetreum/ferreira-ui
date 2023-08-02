import { useRouter } from "next/router";
import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { Copyright } from "../components/ui";
import { UserLogin } from "../ts/interfaces";
import { SelectUsers } from "../components/login";
import { AuthContext } from "../contexts/auth";
import { useNotify } from "../hooks";

// import img1 from "../public/static/images/login/1.png";
// const images = [img1.src];

export default function SignInSide() {
  const [user, setUser] = React.useState<UserLogin | null>(null);
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { loginUser, isLoggedIn } = React.useContext(AuthContext);
  const { notify } = useNotify();
  const router = useRouter();

  const btnDisabled = React.useMemo(
    () => !user || !password.trim() || isLoading,
    [user, password, isLoading]
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!btnDisabled && user && password.trim()) {
      setIsLoading(true);
      const { isLoggedIn } = await loginUser(user.id, password.trim());
      setIsLoading(false);
      if (!isLoggedIn) {
        return notify("Credenciales no validas");
      }
    }
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [notify, isLoggedIn, router]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${
            //images[Math.floor(Math.random() * images.length)]
            "https://source.unsplash.com/random?wallpapers"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Transportes Ferreira
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: "80%" }}
          >
            <SelectUsers user={user} setUser={setUser} />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={btnDisabled}
            >
              Iniciar Sesión
            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
