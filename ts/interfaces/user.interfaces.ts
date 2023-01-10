export interface User {
  id: number;
  name: string;
  password: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  userType: UserType;
}

export interface UserType {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
