import { User, UserLogin } from "../../ts/interfaces";
import { api } from "./axiosWrapper";

const basePath = "/users";

async function getAll() {
  const { data } = await api.get(`${basePath}`);
  return data as User[];
}

async function getUsersLogin() {
  const { data } = await api.get(`${basePath}/users-login`);
  return data as UserLogin[];
}

export const UserApi = {
  getAll,
  getUsersLogin,
};
