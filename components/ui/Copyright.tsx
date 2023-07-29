import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        target="_blank"
        href="https://transportesferreira.com"
      >
        Transportes Ferreira
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
