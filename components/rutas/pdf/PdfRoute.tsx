import React from "react";
import {
  Document,
  Font,
  Page,
  Text,
  Image,
  StyleSheet,
  Link,
  View,
} from "@react-pdf/renderer";
import { Route } from "../../../ts/interfaces";
import { formatDate, formatTimeStamp } from "../../../utils/dates";
import { createUrlImage } from "../../../utils/images";

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
  subtitleLarge: {
    fontSize: 20,
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
    marginHorizontal: 120,
    width: 280,
    height: 200,
  },
  imageQr: {
    marginHorizontal: 150,
    width: 250,
    height: 150,
  },
  imageRef: {
    marginHorizontal: 50,
    width: 250,
    height: 150,
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

const PdfRoute = ({ route }: { route: Route }) => {
  return (
    <Document>
      <Page size="A4" style={styles.body} wrap>
        <Text style={styles.header} fixed>
          {`~ Ruta  ~`}
        </Text>
        <Text style={styles.header} fixed>
          {route.user.name} - {formatDate(route.date)}
        </Text>
        <Subtitle>Driver</Subtitle>
        <Text style={styles.text}>{route.user.name}</Text>
        <Subtitle>No. de puntos en la ruta</Subtitle>
        <Text style={styles.text}>{route.sellers.length}</Text>
        <Subtitle>Ciclo</Subtitle>
        <Text style={styles.text}>{route.ciclo}</Text>
        <Subtitle>Fecha de la ruta</Subtitle>
        <Text style={styles.text}>{formatDate(route.date)}</Text>
        <Subtitle>Nota:</Subtitle>
        <Text style={styles.text}>{route.notes}</Text>
        <Subtitle>Logistica:</Subtitle>
        <Text style={styles.text}>{route.car.logistica.name}</Text>
        <Subtitle>Placa:</Subtitle>
        <Text style={styles.text}>{route.car.placa}</Text>
        <Image
          style={styles.imageQr}
          src={createUrlImage(route.car.image, "cars")}
        />
        {route.sellers.map(({ seller }, idx) => {
          return (
            <View key={seller.id} break wrap={false}>
              <Text style={styles.subtitleLarge}>
                <Link src={seller.linkUbicacion}>{`Punto ${idx + 1}`}</Link>
              </Text>
              <Subtitle>
                {seller.nombre} - {seller.uuid}
              </Subtitle>
              <Image style={styles.image} src={createUrlImage(seller.image)} />
              <Subtitle>Telefonos</Subtitle>
              {!!seller.referencePhones.length ? (
                <View style={{ flexDirection: "column" }}>
                  {seller.referencePhones.map((telefono) => (
                    <View
                      style={{ flexDirection: "row", marginBottom: 4 }}
                      key={telefono.id}
                    >
                      <Text style={{ marginHorizontal: 8 }}>•</Text>
                      <Text style={{ fontSize: 12 }}>
                        {telefono.name} - {telefono.phone}
                      </Text>
                    </View>
                  ))}
                </View>
              ) : (
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row", marginBottom: 4 }}>
                    <Text style={{ marginHorizontal: 8 }}>•</Text>
                    <Text style={{ fontSize: 12 }}>Sin telefonos</Text>
                  </View>
                </View>
              )}
              <Subtitle>Referencias</Subtitle>
              {!!seller.references.length ? (
                <View style={{ flexDirection: "column" }}>
                  {seller.references.map((referencia) => (
                    <View key={referencia.id}>
                      <View style={{ flexDirection: "row", marginBottom: 4 }}>
                        <Text style={{ marginHorizontal: 8 }}>•</Text>
                        <Text style={{ fontSize: 12 }}>
                          {referencia.description} {referencia.link && ` - `}{" "}
                          {referencia.link && (
                            <Link src={referencia.link}>{"Ubicacion"}</Link>
                          )}
                        </Text>
                      </View>
                      {referencia.image && (
                        <Image
                          style={styles.imageRef}
                          src={createUrlImage(referencia.image)}
                        />
                      )}
                    </View>
                  ))}
                </View>
              ) : (
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row", marginBottom: 4 }}>
                    <Text style={{ marginHorizontal: 8 }}>•</Text>
                    <Text style={{ fontSize: 12 }}>Sin referencias</Text>
                  </View>
                </View>
              )}
              {seller.personaQueAtiende && (
                <>
                  <Subtitle>Persona que atiende</Subtitle>
                  <Text style={styles.text}>{seller.personaQueAtiende}</Text>
                </>
              )}
              <Subtitle>Direccion</Subtitle>
              <Text style={styles.text}>
                {seller.calle} {seller.numero} {seller.colonia}, {seller.ciudad}
                , {seller.cp} {seller.municipio}, {seller.estado}
              </Text>
            </View>
          );
        })}
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

export default PdfRoute;
