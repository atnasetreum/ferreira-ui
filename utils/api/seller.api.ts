import { SellerRaw } from "../../components/ui";
import { Seller } from "../../ts/interfaces";
import { api } from "./axiosWrapper";

const basePath = "/sellers";

async function getAll(params: string) {
  const { data } = await api.get(`${basePath}${params}`);
  return data as Seller[];
}

async function getOneByName(name: string) {
  const { data } = await api.get(`${basePath}/findOneByName`, {
    params: { name },
  });
  return data as Seller;
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

async function update(idSeller: number, formData: FormData) {
  const { data } = await api.patch(`${basePath}/${idSeller}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data as Seller;
}

async function remove(id: number) {
  const { data } = await api.delete(`${basePath}/${id}`);
  return data as Seller;
}

export const SellerApi = {
  getAll,
  getOneByName,
  create,
  update,
  getAllNoParent,
  getAllBasicSeller,
  remove,
};
