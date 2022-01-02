import { IEquipoTrabajo } from "./equipo-trabajo.interface";

export interface IInfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  equipo_trabajo?: IEquipoTrabajo[];
}
