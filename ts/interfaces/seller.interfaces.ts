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
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  references: Reference[];
  referencePhones: ReferencePhone[];
  sellers: Seller[] | [];
  parent: Seller | null;
}

export interface ReferencePhone {
  id: string;
  name: string;
  phone: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  order: number;
}

export interface Reference {
  id: string;
  description: string;
  link: string;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  order: number;
}
