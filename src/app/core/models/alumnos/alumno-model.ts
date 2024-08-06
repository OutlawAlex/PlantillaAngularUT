import { ApiResponse } from "@Models/Response";

export interface InsertAlumnosRequest {
  Nombre: string | null;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  Matricula: number;
  Direccion: string;
}

export type GetAlumnosResponse = ApiResponse<GetAlumnosResponseData>;

interface GetAlumnosResponseData {
  data: AlumnosModel[];
}

export interface AlumnosModel {
  Id: number;
  Nombre: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  Matricula: string;
  Direccion: string;
}
