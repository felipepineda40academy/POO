class Animal{
    constructor(raza_animal,cantidad_de_patas){
        this.raza_animal=raza_animal;
        this.cantidad_de_patas=cantidad_de_patas;
    }
    getRazaAnimal(){
        console.log(this.raza_animal);
    }

}

class WildAnimal extends Animal{
    constructor(raza_wild_animal,cantidad_de_patas,parque_nacional) {
        super(raza_wild_animal,cantidad_de_patas);
        this.parque_nacional=parque_nacional;
    }
    getPeligroExtincion(){
        if(raza_wild_animal=='manigordo'){
            console.log('Este animal esta en peligro de extincion')
        }
    }
}

class Farm  {
    constructor(array_animales){
        this.array_animales = array_animales;
    }    

    animalesGranja(){
        console.log('Los animales que hay en la granja son: ');
        this.array_animales.forEach(function(element){
            
            element.getRazaAnimal();
            if (element.constructor.name=='WildAnimal'){
                console.log('Este granjero tiene animales salvajes en su granja, MINAE Atencion!')
            }
        })
    }
}

var Cerdo = new Animal('cerdo','4');
var Caballo = new Animal('caballo','4');
var gallina = new Animal('gallina','2');
var Pantera = new WildAnimal ('panthera onca','4','Parque nacional chirripo');
var farm_animals = [Cerdo,Caballo,gallina,Pantera]

var granjaFelipe = new Farm (farm_animals)

granjaFelipe.animalesGranja();