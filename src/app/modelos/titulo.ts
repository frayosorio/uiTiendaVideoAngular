import { Empresa } from "./empresa";

export class Titulo {

    public id: number;
    public nombre: string;
    public año: number;
    public protagonistas: string;
    public productor: string;
    public director: string;
    public empresa: Empresa;
    public precio: number;

    constructor(id: number,
        nombre: string,
        año: number,
        protagonistas: string,
        productor: string,
        director: string,
        empresa: Empresa,
        precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.año = año;
        this.protagonistas = protagonistas;
        this.productor = productor;
        this.director = director;
        this.empresa = empresa;
        this.precio = precio;
    }

}
