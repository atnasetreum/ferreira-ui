import { Seller } from "../../ts/interfaces";
import { api } from "./axiosWrapper";

const basePath = "/sellers";

async function getAll() {
  const { data } = await api.get(`${basePath}`);
  return data as Seller[];
}

async function getAllNoParent() {
  const { data } = await api.get(`${basePath}/no-parent`);
  return data as { id: number; uuid: string; nombre: string }[];
}

async function create(formData: FormData) {
  const { data } = await api.post(`${basePath}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data as Seller;
}

export const SellerApi = {
  getAll,
  create,
  getAllNoParent,
};
