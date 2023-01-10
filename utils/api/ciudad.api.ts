import { api } from "./axiosWrapper";

const basePath = "/inegi/localidades";

async function getAll(entidad: string, municipio: string) {
  const { data } = await api.get(
    `${basePath}?entidad=${entidad}&municipio=${municipio}`
  );
  return data.map(
    (localidad: { localidad: string }) => localidad.localidad
  ) as string[];
}

export const CiudadApi = {
  getAll,
};
