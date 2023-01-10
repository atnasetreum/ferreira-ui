import { api } from "./axiosWrapper";

const basePath = "/seller";

async function getAll() {
  const { data } = await api.get(`${basePath}`);
  return data as string[];
}

export const SellerApi = {
  getAll,
};
