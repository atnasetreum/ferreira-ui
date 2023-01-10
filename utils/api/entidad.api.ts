import { api } from "./axiosWrapper";

const basePath = "/inegi/entidades";

async function getAll() {
  const { data } = await api.get(`${basePath}`);
  return data.map(
    (entidad: { entidad: string }) => entidad.entidad
  ) as string[];
}

export const EntidadApi = {
  getAll,
};
