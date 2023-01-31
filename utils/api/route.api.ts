import { FiltersRoute } from "../../pages/rutas";
import { Route } from "../../ts/interfaces";
import { api } from "./axiosWrapper";

const basePath = "/routes";

async function getAll(filters: object) {
  const { data } = await api.get(`${basePath}`, { params: filters });
  return data as Route[];
}

async function create(payload: object) {
  const { data } = await api.post(`${basePath}`, payload);
  return data as Route;
}

async function update(id: number, payload: object) {
  const { data } = await api.patch(`${basePath}/${id}`, payload);
  return data as Route;
}

async function remove(id: number) {
  const { data } = await api.delete(`${basePath}/${id}`);
  return data as Route;
}

export const RouteApi = {
  getAll,
  create,
  update,
  remove,
};
