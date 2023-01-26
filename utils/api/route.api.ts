import { Route } from "../../ts/interfaces";
import { api } from "./axiosWrapper";

const basePath = "/routes";

async function getAll() {
  const { data } = await api.get(`${basePath}`);
  return data as Route[];
}

async function create(payload: object) {
  const { data } = await api.post(`${basePath}`, payload);
  return data as Route;
}

async function remove(id: number) {
  const { data } = await api.delete(`${basePath}/${id}`);
  return data as Route;
}

export const RouteApi = {
  getAll,
  create,
  remove,
};
