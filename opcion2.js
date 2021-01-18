var TI=+prompt("Ingrese el tipo de hamburguesa: 1- Sencillas 2-Dobles 3-Triples");
var PA=0.00;
var N=+prompt("Ingrese el número de hamburguesas");
var TP=+prompt("Ingrese el tipo de pago:1-Efectivo  2-Tarjeta");
var CA=0.05;
function calculo(TI,N,TP){
    switch(TI){
        case 1:
            PA=20;
            break;
        case 2:
            PA=25;
            break;
        case 3:
            PA=28;
            break;
        default:
            console.log("Ingrese una opción válida.");
            return;
            break;
    }
    
    if(TP==2){
        var TOT=(PA*N)+CA*(PA*N);
        console.log("Por "+N+" hamburguesas debe pagar " + TOT);
    }
    else{
        var TO = PA*N;
        console.log("Por "+N+" hamburguesas debe pagar " + TO);
    }
}

calculo(TI,N,TP);
