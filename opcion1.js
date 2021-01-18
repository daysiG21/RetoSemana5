
var TG=0.00;

function calcular(){
    var L=+prompt("Ingrese la producción diaria en litros");
    var PG =+prompt("Ingrese el precio por galón");
    TG=L/3.785;
    var GA = PG*TG;   
    console.log("El precio por la producción diaria es:" + GA.toFixed(2));

}
calcular();