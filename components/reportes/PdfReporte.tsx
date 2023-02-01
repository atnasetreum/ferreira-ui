import React, { useMemo } from "react";
import {
  Document,
  Font,
  Page,
  Text,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import { Reporte } from "../../ts/interfaces";
import { formatDate } from "../../utils/dates";
import { formatter } from "../../utils/numbers/index";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    margin: 2,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginHorizontal: 150,
    width: 250,
    height: 150,
  },
  imageRef: {
    marginHorizontal: 50,
    width: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  link: {
    fontFamily: "Lato",
    fontSize: 10,
    color: "black",
    textDecoration: "none",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
});

const stylesTable = StyleSheet.create({
  table: {
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableRowHead: {
    margin: "auto",
    flexDirection: "row",
    backgroundColor: "#1976D2",
    color: "white",
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const Subtitle = (props: any) => {
  const { children, ...others } = props;
  return (
    <Text style={styles.subtitle} {...others}>
      {children}
    </Text>
  );
};

interface Props {
  data: Reporte[];
  startDate: string;
  endDate: string;
  logistica: string;
}

function TableHeader() {
  return (
    <View style={stylesTable.tableRowHead}>
      <View style={stylesTable.tableCol}>
        <Text style={stylesTable.tableCell}>Numero</Text>
      </View>
      <View style={stylesTable.tableCol}>
        <Text style={stylesTable.tableCell}>Fecha</Text>
      </View>
      <View style={stylesTable.tableCol}>
        <Text style={stylesTable.tableCell}>Placas</Text>
      </View>
      <View style={stylesTable.tableCol}>
        <Text style={stylesTable.tableCell}>Operador</Text>
      </View>
      <View style={stylesTable.tableCol}>
        <Text style={stylesTable.tableCell}>Pago</Text>
      </View>
    </View>
  );
}

const PdfReporte = ({ data, startDate, endDate, logistica }: Props) => {
  const total = useMemo(() => {
    return formatter.format(
      data.reduce(function (a, b) {
        return a + Number(b.pago);
      }, 0)
    );
  }, [data]);

  return (
    <Document>
      <Page size="A4" style={styles.body} wrap>
        <Text style={styles.header} fixed>
          {`~ Transportes Ferreira  ~`}
        </Text>
        <Subtitle>{logistica}</Subtitle>
        <Text style={styles.text}>del {`${startDate} al ${endDate}`}</Text>
        <Subtitle>Total a pagar</Subtitle>
        <Text style={styles.text}>{total}</Text>
        <View style={stylesTable.table}>
          <TableHeader />
          {data.map((row, idx) => (
            <View style={stylesTable.tableRow} key={row.id}>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCell}>{idx + 1}</Text>
              </View>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCell}>
                  {formatDate(row.date)}
                </Text>
              </View>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCell}>{row.car.placa}</Text>
              </View>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCell}>{row.user.name}</Text>
              </View>
              <View style={stylesTable.tableCol}>
                <Text style={stylesTable.tableCell}>
                  {formatter.format(Number(row.pago))}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PdfReporte;
