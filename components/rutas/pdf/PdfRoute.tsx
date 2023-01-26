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
import { formatDate } from "../../../utils/dates";
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
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginHorizontal: 150,
    width: 250,
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
  console.log({ route });
  return (
    <Document>
      <Page style={styles.body} wrap>
        <Text style={styles.header} fixed>
          ~ Ruta ~
        </Text>
        <Text style={styles.header} fixed>
          {route.user.name} - {formatDate(route.date)}
        </Text>
        {route.sellers.map((seller, idx) => {
          return (
            <div key={seller.id}>
              <Subtitle break>
                Punto {idx + 1}: {seller.nombre} -{" "}
                <Link src={seller.linkUbicacion}>{"Ubicacion"}</Link>
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
                    <>
                      <View
                        style={{ flexDirection: "row", marginBottom: 4 }}
                        key={referencia.id}
                      >
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
                    </>
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
            </div>
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
