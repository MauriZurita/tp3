'use strict'

// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

class Rectagulo{
    
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    calcularPerimetro(alto, ancho){
        console.log("El alto es : " + alto);
        console.log("El ancho es : " + ancho);

        const perimetro = 2*(alto + ancho);
        return "El perimetro del Rectangulo es : " + perimetro;
        
    }


}

const  rec = new Rectagulo();
let alto = parseInt(prompt("Ingrese el alto"));
let ancho = parseInt(prompt("Ingrese el ancho"));
console.log(rec.calcularPerimetro(alto,ancho));