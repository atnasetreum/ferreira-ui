// export interface Route {
//   id: number;
//   date: string;
//   notes: string;
//   ciclo: string;
//   pago: string;
//   isActive: boolean;
//   createdAt: string;
//   updatedAt: string;
//   user: UserRoutes;
//   car: CarRoutes;
//   sellers: SellerRoutes[];
// }

// interface CarRoutes {
//   id: number;
//   placa: string;
//   image: string;
//   isActive: boolean;
//   createdAt: string;
//   updatedAt: string;
//   logistica: UserRoutes;
// }

// interface UserRoutes {
//   id: number;
//   name: string;
//   isActive: boolean;
//   createdAt: string;
//   updatedAt: string;
//   password?: string;
// }

// interface SellerRoutes {
//   id: number;
//   uuid: string;
//   nombre: string;
//   calle: string;
//   numero: string;
//   colonia: string;
//   ciudad: string;
//   municipio: string;
//   estado: string;
//   cp: string;
//   linkUbicacion: string;
//   image: string;
//   personaQueAtiende: null;
//   isActive: boolean;
//   createdAt: string;
//   updatedAt: string;
//   references: ReferenceRoutes[];
//   referencePhones: ReferencePhoneRoutes[];
// }

// export interface ReferencePhoneRoutes {
//   id: number;
//   name: string;
//   phone: string;
//   order: string;
//   isActive: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface ReferenceRoutes {
//   id: number;
//   description: string;
//   link: string;
//   image: string;
//   order: string;
//   isActive: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

export interface Route {
  id: number;
  date: string;
  notes: string;
  ciclo: string;
  pago: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  user: UserRoutes;
  car: Car;
  sellers: SellerElementRoutes[];
}

interface Car {
  id: number;
  placa: string;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  logistica: UserRoutes;
}

interface UserRoutes {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  password?: string;
}

interface SellerElementRoutes {
  id: number;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  seller: SellerSellerRoutes;
}

interface SellerSellerRoutes {
  id: number;
  uuid: string;
  nombre: string;
  calle: null | string;
  numero: null | string;
  colonia: null | string;
  ciudad: null | string;
  municipio: string;
  estado: string;
  cp: null | string;
  linkUbicacion: string;
  image: string;
  personaQueAtiende: string;
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
  link: null;
  image: null;
  order: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
