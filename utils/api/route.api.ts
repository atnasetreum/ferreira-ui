import { FiltersRoute } from "../../pages/rutas";
import { Reporte, Route } from "../../ts/interfaces";
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

async function getDataReport(params: object) {
  const { data } = await api.get(`${basePath}/reportes`, { params });
  return data as Reporte[];
}

export const RouteApi = {
  getAll,
  create,
  update,
  remove,
  getDataReport,
};
