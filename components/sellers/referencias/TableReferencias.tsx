import React from "react";
import { Column, Row, useTable } from "react-table";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NewSeller, Referencia } from "../FormSeller";
import { useEffect, useState, useCallback } from "react";
import { ButtonGroup, IconButton } from "@mui/material";
import Image from "next/image";
import { StyledTableCell, StyledTableRow } from "../../ui";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditReferencia from "./EditReferencia";
import { Seller } from "../../../ts/interfaces";
import { createUrlImage } from "../../../utils/images";

interface PropsTable {
  columns: Column<Referencia>[];
  form: NewSeller;
  setForm: (form: NewSeller) => void;
}

const TableComponent = ({
  columns,
  form: data,
  form: { referencias: records },
  setForm: setRecords,
}: PropsTable) => {
  const getRowId = React.useCallback((row: Referencia) => {
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
      referencias: update(records, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRecord],
        ],
      }).map((row, idx) => ({ ...row, order: idx + 1 })),
    });
  };

  useEffect(() => {
    console.log({ records });
  }, [records]);

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
                      {column.render("Header")}
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
  row: Row<Referencia>;
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
            {cell.render("Cell")}
          </StyledTableCell>
        );
      })}
    </StyledTableRow>
  );
};

interface Props {
  form: NewSeller;
  setForm: (form: NewSeller) => void;
  sellerSelected: Seller;
}

const TableReferencias = ({ form, setForm, sellerSelected }: Props) => {
  const [refSelected, setRefSelected] = useState<Referencia>({} as Referencia);

  const actionByRow = useCallback(
    (type: string, id: string) => {
      switch (type) {
        case "editRow":
          const referencia = form.referencias.find((ref) => ref.id === id);
          if (referencia) {
            setRefSelected(referencia);
          }
          break;
        case "deleteRow":
          const refNew = form.referencias
            .filter((ref) => ref.id !== id)
            .map((ref, idx) => ({ ...ref, order: idx + 1 }));
          setForm({ ...form, referencias: refNew });
          break;
      }
    },
    [form.referencias]
  );

  const columns = React.useMemo<Column<Referencia>[]>(
    () => [
      {
        Header: "Orden",
        accessor: "order",
      },
      {
        Header: "Descripcion",
        accessor: "description",
      },
      {
        Header: "Ubicacion",
        accessor: "linkUbicacion",
      },
      {
        Header: "Imagen",
        accessor: "image",
        Cell: (props) => {
          if (props.value) {
            return (
              <Image
                src={URL.createObjectURL(props.value)}
                alt=""
                width={150}
                height={150}
              />
            );
          }

          if (Object.keys(sellerSelected).length) {
            const id = props.row.id;
            const referenciaCurrent = sellerSelected.references.find(
              (ref) => ref.id.toString() === id
            );
            if (referenciaCurrent && referenciaCurrent.image) {
              return (
                <Image
                  src={createUrlImage(referenciaCurrent.image)}
                  alt=""
                  width={150}
                  height={150}
                />
              );
            }
          }
          return null;
        },
      },
      {
        Header: "Acciones",
        accessor: "id",
        Cell: ({ value }) => {
          return (
            <ButtonGroup aria-label="outlined primary button group">
              <IconButton
                color="warning"
                aria-label="update row"
                component="label"
                onClick={() => actionByRow("editRow", value)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                aria-label="delete row"
                component="label"
                onClick={() => actionByRow("deleteRow", value)}
              >
                <DeleteIcon />
              </IconButton>
            </ButtonGroup>
          );
        },
      },
    ],
    [actionByRow, sellerSelected]
  );

  return (
    <>
      {!!Object.keys(refSelected).length && (
        <EditReferencia
          referencia={refSelected}
          setRefSelected={setRefSelected}
          form={form}
          setForm={setForm}
          sellerSelected={sellerSelected}
        />
      )}
      <TableContainer>
        <TableComponent columns={columns} form={form} setForm={setForm} />
      </TableContainer>
    </>
  );
};

export default TableReferencias;
