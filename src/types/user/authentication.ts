export interface Register {
  id: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  name: string;
  birthday: string;
  docType: number;
  roles: Set<number>;
}

export enum UserRole {
  ADMIN = "ROLE_ADMIN",
  VENTAS = "ROLE_VENTAS",
  LOGISTICA = "ROLE_LOGISTICA",
}
