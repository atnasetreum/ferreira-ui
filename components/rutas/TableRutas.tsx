import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { StyledTableCell, StyledTableRow } from "../ui";
import { useEffect, useState } from "react";
import { RouteApi } from "../../utils/api";
import { Route } from "../../ts/interfaces";
import { formatDate, formatTimeStamp } from "../../utils/dates";
import Link from "next/link";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PdfRoute from "./pdf/PdfRoute";
import { ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNotify } from "../../hooks";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

function Row(props: { row: Route; removeRoute: (id: number) => void }) {
  const { row, removeRoute } = props;
  const [open, setOpen] = React.useState(false);

  const createPdf = async (fileName: string) => {
    const blob = await pdf(<PdfRoute route={row} />).toBlob();
    saveAs(blob, fileName);
  };

  return (
    <React.Fragment>
      <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.id}
        </StyledTableCell>
        <StyledTableCell>{formatDate(row.date)}</StyledTableCell>
        <StyledTableCell>{row.user.name}</StyledTableCell>
        <StyledTableCell>{formatTimeStamp(row.createdAt)}</StyledTableCell>
        <StyledTableCell>{formatTimeStamp(row.updatedAt)}</StyledTableCell>
        <StyledTableCell align="center">
          <ButtonGroup aria-label="outlined primary button group">
            <IconButton
              color="error"
              aria-label="delete row"
              component="label"
              onClick={() =>
                createPdf(`${formatDate(row.date)} - ${row.user.name}.pdf`)
              }
            >
              <PictureAsPdfIcon color="error" />
            </IconButton>
            <IconButton
              color="error"
              aria-label="delete row"
              component="label"
              onClick={() => removeRoute(row.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ButtonGroup>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={7}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Puntos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Punto</StyledTableCell>
                    <StyledTableCell>UUID</StyledTableCell>
                    <StyledTableCell>NOMBRE</StyledTableCell>
                    <StyledTableCell>UBICACION</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {row.sellers.map((seller, idx) => (
                    <StyledTableRow key={seller.id}>
                      <StyledTableCell component="th" scope="row">
                        {idx + 1}
                      </StyledTableCell>
                      <StyledTableCell>{seller.uuid}</StyledTableCell>
                      <StyledTableCell>{seller.nombre}</StyledTableCell>
                      <StyledTableCell>
                        <Link href={seller.linkUbicacion} target="_blank">
                          {seller.linkUbicacion}
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

function TableRutas() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const { notify } = useNotify();

  const getAllRoutes = () => RouteApi.getAll().then(setRoutes);

  const removeRoute = (id: number) => {
    RouteApi.remove(id)
      .then(() => {
        getAllRoutes();
        notify("Ruta eliminada correctamente", "success");
      })
      .catch((err) => notify(err.response?.data?.message || err.message));
  };

  useEffect(() => {
    getAllRoutes();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell />
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Fecha de ruta</StyledTableCell>
            <StyledTableCell>Driver</StyledTableCell>
            <StyledTableCell>Fecha Creacion</StyledTableCell>
            <StyledTableCell>Ultima actualizacion</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {routes.map((row) => (
            <Row key={row.id} row={row} removeRoute={removeRoute} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableRutas;
