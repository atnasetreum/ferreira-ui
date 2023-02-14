import { api } from "./axiosWrapper";

const basePath = "/dashboard";

async function carsByLogistics() {
  const { data } = await api.get(`${basePath}/carsByLogistics`);
  return data as Array<Array<{ z: string; w: number }>>;
}

export const DashboardApi = {
  carsByLogistics,
};
