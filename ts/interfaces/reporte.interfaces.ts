export interface Reporte {
  id: number;
  date: string;
  notes: string;
  ciclo: string;
  pago: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  car: CarReporte;
  user: UserReporte;
  sellers: SellerReporte[];
}

interface CarReporte {
  id: number;
  placa: string;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface SellerReporte {
  id: number;
  uuid: string;
  nombre: string;
  calle: string;
  numero: string;
  colonia: string;
  ciudad: string;
  municipio: string;
  estado: string;
  cp: string;
  linkUbicacion: string;
  image: string;
  personaQueAtiende: null | string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
interface UserReporte {
  id: number;
  name: string;
  password: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
