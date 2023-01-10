import { api } from "./axiosWrapper";

const basePath = "/inegi/municipios";

async function getAll(entidad: string) {
  const { data } = await api.get(`${basePath}?entidad=${entidad}`);
  return data.map(
    (municipio: { municipio: string }) => municipio.municipio
  ) as string[];
}

export const MunicipioApi = {
  getAll,
};
