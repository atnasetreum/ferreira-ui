import { Camioneta } from "../../ts/interfaces";
import { api } from "./axiosWrapper";

const basePath = "/cars";

async function getAll() {
  const { data } = await api.get(`${basePath}`);
  return data as Camioneta[];
}

async function create(formData: FormData) {
  const { data } = await api.post(`${basePath}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data as Camioneta;
}

async function update(id: number, formData: FormData) {
  const { data } = await api.patch(`${basePath}/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data as Camioneta;
}

async function remove(id: number) {
  const { data } = await api.delete(`${basePath}/${id}`);
  return data as Camioneta;
}

export const CamionetaApi = {
  getAll,
  create,
  update,
  remove,
};
