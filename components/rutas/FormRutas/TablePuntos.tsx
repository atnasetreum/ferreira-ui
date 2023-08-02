import React from "react";
import { Column, Row, useTable } from "react-table";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonGroup, IconButton } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../../ui";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { IFormRutas, SellerWithOrder } from "./FormRutas";

interface PropsTable {
  columns: Column<SellerWithOrder>[];
  form: IFormRutas;
  setForm: (formr: IFormRutas) => void;
}

const TableComponent = ({
  columns,
  form: data,
  form: { sellers: records },
  setForm: setRecords,
}: PropsTable) => {
  const getRowId = React.useCallback((row: SellerWithOrder) => {
    return row.id;
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      data: records,
      columns,
      getRowId,
    });

  const moveRow = (dragIndex: number, hoverIndex: number) => {
    const dragRecord = records[dragIndex];
    setRecords({
      ...data,
      sellers: update(records, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRecord],
        ],
      }).map((row, idx) => ({ ...row, order: idx + 1 })),
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <StyledTableRow key={key} {...restHeaderGroupProps}>
                <StyledTableCell></StyledTableCell>
                {headerGroup.headers.map((column) => {
                  const { key, ...restCellProps } = column.getHeaderProps();
                  return (
                    <StyledTableCell
                      key={key}
                      align="center"
                      {...restCellProps}
                    >
                      {column.render("Header") as React.ReactNode}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            return (
              (prepareRow(row) !== null && prepareRow(row)) || (
                <Row
                  index={index}
                  row={row}
                  moveRow={moveRow}
                  {...row.getRowProps()}
                />
              )
            );
          })}
        </TableBody>
      </Table>
    </DndProvider>
  );
};

const DND_ITEM_TYPE = "row";

interface PropsRow {
  row: Row<SellerWithOrder>;
  index: number;
  moveRow: (dragIndex: number, hoverIndex: number) => void;
}

const Row = ({ row, index, moveRow }: PropsRow) => {
  const dropRef = React.useRef<HTMLTableRowElement>(null);
  const dragRef = React.useRef<HTMLTableRowElement>(null);
  const [, drop] = useDrop({
    accept: DND_ITEM_TYPE,
    hover(item: any, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveRow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: DND_ITEM_TYPE,
    item: { type: DND_ITEM_TYPE, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  preview(drop(dropRef));
  drag(dragRef);

  return (
    <StyledTableRow ref={dropRef} style={{ opacity }}>
      <StyledTableCell align="center" ref={dragRef}>
        <DragIndicatorIcon />
      </StyledTableCell>
      {row.cells.map((cell) => {
        const { key, ...restCellProps } = cell.getCellProps();
        return (
          <StyledTableCell key={key} align="center" {...restCellProps}>
            {cell.render("Cell") as React.ReactNode}
          </StyledTableCell>
        );
      })}
    </StyledTableRow>
  );
};

interface Props {
  sellers: SellerWithOrder[];
  form: IFormRutas;
  setForm: (formr: IFormRutas) => void;
}

const TablePuntos = ({ form, setForm }: Props) => {
  const columns = React.useMemo<Column<SellerWithOrder>[]>(
    () => [
      {
        Header: "Orden",
        accessor: "order",
      },
      {
        Header: "UUID",
        accessor: "uuid",
      },
      {
        Header: "Seller",
        accessor: "nombre",
      },
      {
        Header: "Acciones",
        accessor: "id",
        Cell: (props) => {
          return (
            <ButtonGroup aria-label="outlined primary button group">
              <IconButton
                color="error"
                aria-label="delete row"
                component="label"
                onClick={() => {
                  setForm({
                    ...form,
                    sellers: form.sellers
                      .filter(
                        (sellFilter) => sellFilter.id !== props.row.original.id
                      )
                      .map((sell, idx) => ({ ...sell, order: idx + 1 })),
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ButtonGroup>
          );
        },
      },
    ],
    [form, setForm]
  );

  return (
    <TableContainer>
      <TableComponent columns={columns} form={form} setForm={setForm} />
    </TableContainer>
  );
};

export default TablePuntos;
