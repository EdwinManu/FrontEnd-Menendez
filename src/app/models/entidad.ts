import { TipoContribuyente } from "./tipo-contribuyente";
import { TipoDocumento } from "./tipo-documento";

export class Entidad {
    constructor(
        public idEntidad: number | null = null,
        public tipoDocumento: TipoDocumento| null = new TipoDocumento(),
        public nroDocumento: string | null = null,
        public razonSocial: string | null = null,
        public nombreComercial: string | null = null,
        public tipoContribuyente: TipoContribuyente| null = new TipoContribuyente(),
        public direccion: string | null = null,
        public telefono: string | null = null,
        public estado: boolean | null = null,
    ) { }
}