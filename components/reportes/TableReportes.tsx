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
import { Reporte } from "../../ts/interfaces";
import { formatDate } from "../../utils/dates";
import { formatter } from "../../utils/numbers";
import { useMemo } from "react";

interface PropsRow {
  row: Reporte;
  numero: number;
}

function Row(props: PropsRow) {
  const { row, numero } = props;
  const [open, setOpen] = React.useState(false);

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
          {numero}
        </StyledTableCell>
        <StyledTableCell>{formatDate(row.date)}</StyledTableCell>
        <StyledTableCell>{row.car.placa}</StyledTableCell>
        <StyledTableCell>{row.user.name}</StyledTableCell>
        <StyledTableCell>{formatter.format(Number(row.pago))}</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
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
                    <StyledTableCell>Nombre</StyledTableCell>
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
  data: Reporte[];
}

export default function TableReportes({ data }: Props) {
  const total = useMemo(() => {
    return formatter.format(
      data.reduce(function (a, b) {
        return a + Number(b.pago);
      }, 0)
    );
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell />
            <StyledTableCell>Numero</StyledTableCell>
            <StyledTableCell>Fecha Ruta</StyledTableCell>
            <StyledTableCell>Placas</StyledTableCell>
            <StyledTableCell>Operador</StyledTableCell>
            <StyledTableCell>Pago</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <Row key={row.id} row={row} numero={idx + 1} />
          ))}
          {!!data.length && (
            <StyledTableRow>
              <StyledTableCell colSpan={4}></StyledTableCell>
              <StyledTableCell>Total</StyledTableCell>
              <StyledTableCell>{total}</StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
