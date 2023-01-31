export interface Camioneta {
  placa: string;
  image: string;
  logistica: LogisticaCamioneta;
  id: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface LogisticaCamioneta {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
