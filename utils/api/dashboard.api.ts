import { api } from "./axiosWrapper";

const basePath = "/dashboard";

async function carsByLogistics() {
  const { data } = await api.get(`${basePath}/carsByLogistics`);
  return data as Array<Array<{ z: string; w: number }>>;
}

async function totalByLogistics() {
  const { data } = await api.get(`${basePath}/totalByLogistics`);
  return data as { name: string; y: number }[];
}

async function rutasByLogistics() {
  const { data } = await api.get(`${basePath}/rutasByLogistics`);
  return data as { name: string; y: number }[];
}

async function rutasByDrivers() {
  const { data } = await api.get(`${basePath}/rutasByDrivers`);
  return data as { categories: string[]; data: number[] };
}

export const DashboardApi = {
  carsByLogistics,
  totalByLogistics,
  rutasByLogistics,
  rutasByDrivers,
};
