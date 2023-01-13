export interface Seller {
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
  personaQueAtiende: string;
  idGroup: null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  references: Reference[];
  referencePhones: ReferencePhone[];
}

export interface ReferencePhone {
  id: number;
  name: string;
  phone: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Reference {
  id: number;
  description: string;
  link: string;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
