import { SellerRaw } from "../../components/ui";
import { Seller } from "../../ts/interfaces";
import { api } from "./axiosWrapper";

const basePath = "/sellers";

async function getAll(params: string) {
  const { data } = await api.get(`${basePath}${params}`);
  return data as Seller[];
}

async function getAllNoParent() {
  const { data } = await api.get(`${basePath}/no-parent`);
  return data as SellerRaw[];
}

async function getAllBasicSeller() {
  const { data } = await api.get(`${basePath}/basic`);
  return data as SellerRaw[];
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
  getAllBasicSeller,
};
