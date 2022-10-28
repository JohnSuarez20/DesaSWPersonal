export class Serie {
    
    pos: number;
    nombre: string;
    medioStreaming: string;
    temporadas: number;
    descripcion: string;
    link: string;
    img: string;

    constructor(pos: number, nombre: string, medioStreaming: string, temporadas: number,
        descripcion: string, link:string, img:string){
            this.pos = pos;
            this.nombre = nombre;
            this.medioStreaming = medioStreaming;
            this.temporadas = temporadas;
            this.descripcion = descripcion;
            this.link = link;
            this.img = img;
        }
}