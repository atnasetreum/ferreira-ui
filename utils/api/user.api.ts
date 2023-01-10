import { User } from "../../ts/interfaces";
import { api } from "./axiosWrapper";

const basePath = "/users";

async function getAll() {
  const { data } = await api.get(`${basePath}`);
  return data as User[];
}

export const UserApi = {
  getAll,
};
