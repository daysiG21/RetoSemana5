var NC =+prompt("Ingrese el número de cita");
var T=+prompt("Ingrese el tiempo de tratamiento·");
var CC=0.00;
function calculoTratamiento(NC,T){
    if(NC>0 && NC<=3){
        CC=200.00;
    }
    else if(NC>3 && NC<=5){
        CC=150.00;
    }
    else if(NC>5 && NC>=8){
        CC=100.00;
    }
    else{
        CC=50.00;
    }
    
    TOT = T*CC;
    console.log("El paciente por la cita pagará $" + CC.toFixed(2));
    console.log("El costo por el tratamiento es: $"+TOT.toFixed(2));
}

calculoTratamiento(NC,T);