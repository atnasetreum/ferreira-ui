export interface Route {
  id: number;
  date: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  user: UserRoutes;
  sellers: SellerRoutes[];
}

interface SellerRoutes {
  id: number;
  uuid: string;
  nombre: string;
  calle: null | string;
  numero: null | string;
  colonia: null | string;
  ciudad: null | string;
  municipio: null | string;
  estado: null | string;
  cp: string;
  linkUbicacion: string;
  image: string;
  personaQueAtiende: null | string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  references: ReferenceRoutes[];
  referencePhones: ReferencePhoneRoutes[];
}

export interface ReferencePhoneRoutes {
  id: number;
  name: string;
  phone: string;
  order: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ReferenceRoutes {
  id: number;
  description: string;
  link: string;
  image: string;
  order: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface UserRoutes {
  id: number;
  name: string;
  password: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
