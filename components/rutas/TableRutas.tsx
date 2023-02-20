import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { StyledTableCell, StyledTableRow } from "../ui";
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
import EditIcon from "@mui/icons-material/Edit";
import { FiltersRoute } from "../../pages/rutas";
import { formatter } from "../../utils/numbers";
import TableContainerCustom from "../ui/tables/TableContainerCustom";

interface PropsRow {
  setAction: (action: string) => void;
  row: Route;
  removeRoute: (id: number) => void;
  setRouteSelected: (route: Route) => void;
}

function Row(props: PropsRow) {
  const { row, removeRoute, setAction, setRouteSelected } = props;
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
        <StyledTableCell>{row.car.logistica.name}</StyledTableCell>
        <StyledTableCell>{row.car.placa}</StyledTableCell>
        <StyledTableCell>{formatDate(row.date)}</StyledTableCell>
        <StyledTableCell>{row.user.name}</StyledTableCell>
        <StyledTableCell>{row.sellers.length}</StyledTableCell>
        <StyledTableCell>{row.ciclo}</StyledTableCell>
        <StyledTableCell>{formatter.format(Number(row.pago))}</StyledTableCell>
        <StyledTableCell>{formatTimeStamp(row.createdAt)}</StyledTableCell>
        <StyledTableCell>{formatTimeStamp(row.updatedAt)}</StyledTableCell>
        <StyledTableCell align="center">
          <ButtonGroup aria-label="outlined primary button group">
            <IconButton
              color="error"
              aria-label="delete row"
              component="label"
              onClick={() =>
                createPdf(
                  `${formatDate(row.date)} - ${row.user.name} - Ciclo ${
                    row.ciclo
                  }.pdf`
                )
              }
            >
              <PictureAsPdfIcon color="error" />
            </IconButton>
            <IconButton
              color="warning"
              aria-label="delete row"
              component="label"
              onClick={() => {
                setRouteSelected(row);
                setAction("edit");
              }}
            >
              <EditIcon />
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
          colSpan={12}
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
                      <StyledTableCell>{seller.seller.uuid}</StyledTableCell>
                      <StyledTableCell>{seller.seller.nombre}</StyledTableCell>
                      <StyledTableCell>
                        <Link
                          href={seller.seller.linkUbicacion}
                          target="_blank"
                        >
                          {seller.seller.linkUbicacion}
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

interface Props {
  setAction: (action: string) => void;
  setRouteSelected: (route: Route) => void;
  filters: FiltersRoute;
  routes: Route[];
  getAllRoutes: () => void;
}

function TableRutas({
  setAction,
  setRouteSelected,
  filters,
  routes,
  getAllRoutes,
}: Props) {
  const { notify } = useNotify();

  const removeRoute = (id: number) => {
    RouteApi.remove(id)
      .then(() => {
        getAllRoutes();
        notify("Ruta eliminada correctamente", "success");
      })
      .catch((err) => notify(err.response?.data?.message || err.message));
  };

  return (
    <TableContainerCustom
      rows={routes}
      columns={[
        "",
        "ID",
        "Logistica",
        "Placa",
        "Fecha de ruta",
        "Driver",
        "No. de puntos",
        "Ciclo",
        "Pago",
        "Fecha Creacion",
        "Ultima actualizacion",
        "Acciones",
      ]}
      renderListItem={(route) => (
        <Row
          key={route.id}
          row={route}
          removeRoute={removeRoute}
          setAction={setAction}
          setRouteSelected={setRouteSelected}
        />
      )}
    />
  );
}

export default TableRutas;
