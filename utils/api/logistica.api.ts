import { Logistica } from "../../ts/interfaces";
import { api } from "./axiosWrapper";

const basePath = "/logistics";

async function getAll() {
  const { data } = await api.get(`${basePath}`);
  return data as Logistica[];
}

async function create(name: string) {
  const { data } = await api.post(`${basePath}`, { name });
  return data as Logistica;
}

async function update(id: number, name: string) {
  const { data } = await api.patch(`${basePath}/${id}`, { name });
  return data as Logistica;
}

async function remove(id: number) {
  const { data } = await api.delete(`${basePath}/${id}`);
  return data as Logistica;
}

export const LogisticaApi = {
  getAll,
  create,
  update,
  remove,
};
