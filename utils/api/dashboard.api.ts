import moment from "moment";

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

async function totalByLogistics({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) {
  const { data } = await api.get(`${basePath}/totalByLogistics`, {
    params: {
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
    },
  });
  return data as { name: string; y: number }[];
}

async function rutasByLogistics({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) {
  const { data } = await api.get(`${basePath}/rutasByLogistics`, {
    params: {
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
    },
  });
  return data as { name: string; y: number }[];
}

async function rutasByLogisticsTimeLine() {
  const { data } = await api.get(`${basePath}/rutasByLogisticsTimeLine`);
  return data as ResponseRutasByLogisticsTimeLine;
}

async function rutasByDrivers({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) {
  const { data } = await api.get(`${basePath}/rutasByDrivers`, {
    params: {
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
    },
  });
  return data as { categories: string[]; data: number[] };
}

async function stateCountDashboard({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) {
  const { data } = await api.get(`${basePath}/stateCountDashboard`, {
    params: {
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
    },
  });
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
