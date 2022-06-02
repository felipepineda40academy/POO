
class Casa {
    constructor(cantidad_de_automoviles,cantidad_de_personas,color_casa) {
        this.cantidad_de_automoviles = cantidad_de_automoviles;
        this.cantidad_de_personas = cantidad_de_personas;
        this.color_casa = color_casa;
    }
    getIntegrantesCasa() {
        console.log("La cantidad de personas que hay en casa son: "+this.cantidad_de_personas)
    }
}


class Residencial extends Casa {
    constructor(provincia,canton,cantidad_de_automoviles,cantidad_de_personas,color_de_casa){
        super(cantidad_de_automoviles,cantidad_de_personas,color_de_casa)
        this.provincia= provincia;
        this.canton=canton;
    }

    cantidad_de_casas_en_provincia(){
        console.log('Las casas en la provincia '+this.provincia+' y el canton '+this.canton+' tendran esta cantidad de personas ');
        this.getIntegrantesCasa()
    }
}


var Residencial_especifico = new Residencial ('Alajuela','Poas','5','20','verde');
Residencial_especifico.cantidad_de_casas_en_provincia();
















/*
//Construimos la casa
var Casa_Felipe = new Casa ('0','2','blanca');
Casa_Felipe.getIntegrantesCasa();

var Casa_Isaac = new Casa ('2','11','agua');
Casa_Isaac.getIntegrantesCasa();

*/





















/*

class Farm {

    constructor(animal1,animal2,animal3){
        this.dog = animal1;
        this.cat = animal2;
        this.cow = animal3;
    }

    getAnimal1(){
        console.log(this.dog);
    }
}

var Farm_Object = new Farm('Lolo el perro','Catsy el gato','La vaca lula');

Farm_Object.getAnimal1();*/