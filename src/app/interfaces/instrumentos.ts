export class Instrumentos {

    constructor(
        public id: number,
        public fabricante: string,
        public modelo: string,
        public precio: number,
        public descripcion: Array<string>,
        public stock: number,
        public likes: number,
        public urlImage: string
    ){}

    
}
