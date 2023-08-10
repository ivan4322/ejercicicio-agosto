//Escribir un programa que calcule el porcentaje de un valor de un producto
//que ingresamos.
class Calcular{


    constructor(precio, producto,porcentaje){
        this.precio = precio;
        this.producto = producto;
        this.porcentaje = porcentaje;

    }
    set setPorcentaje(vale){
        this.porcentaje= vale;
    }
    get getPrecio(){
        return this.precio;
    }

    obtenerPorcentaje(){
        let total = this.precio * porcentaje / 100;
        return total;
    }

}

const producto1 = new Calcular(100000, "blusa");

let porce = parseInt(prompt("digite el porcentaje a obtener"));

producto1.setPrecio = porce;

producto1.obtenerPorcentaje();

alert(producto1.getPrecio);





