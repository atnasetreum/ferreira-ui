import { StateCountDashboard } from "../../pages/dashboard";
import { api } from "./axiosWrapper";

const basePath = "/dashboard";

export interface ResponseRutasByLogisticsTimeLine {
  categories: string[];
  series: Series[];
}

interface Series {
  name: string;
  data: number[];
}

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

async function rutasByLogisticsTimeLine() {
  const { data } = await api.get(`${basePath}/rutasByLogisticsTimeLine`);
  return data as ResponseRutasByLogisticsTimeLine;
}

async function rutasByDrivers() {
  const { data } = await api.get(`${basePath}/rutasByDrivers`);
  return data as { categories: string[]; data: number[] };
}

async function stateCountDashboard() {
  const { data } = await api.get(`${basePath}/stateCountDashboard`);
  return data as StateCountDashboard;
}

export const DashboardApi = {
  carsByLogistics,
  totalByLogistics,
  rutasByLogistics,
  rutasByLogisticsTimeLine,
  rutasByDrivers,
  stateCountDashboard,
};
