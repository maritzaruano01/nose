

var a = 5;
var b = 8;


function suma(a,b){
    return a + b;
}

console.log(suma(a,b));
console.log(suma(7,23));

function hipotenusa(c1,c2){
    exponente1 = c1*c1;
    exponente2 = c2*c2;
    raiz = Math.sqrt(exponente1 + exponente2);
    return raiz; 
}

console.log(hipotenusa(5,3));

function area(c1,c2){
    return (c1*c2)/2;
}

console.log(area(5,3));

function perimetro(c1,c2){
    h = hipotenusa(c1,c2);
    return c1+c2+h;
}

console.log(perimetro(5,10));


function perimetroc(l1){
    return l1*4;
}
console.log(perimetroc(5));

function areac(l1){
    return l1*l1;
}
console.log(areac(25));

function cuadratica (a,b,c){
    parte1 = b*b;
    parte2 = 4*a*c;
    parte3 = parte1 - parte2;
    parte4 = Math.sqrt(parte3);
    ladoa = -1*b;

    partesuma = (ladoa + parte4)/(2*a);
    parteresta = (ladoa - parte4)/(2*a);
    let resultados = [partesuma,parteresta] ;
    return resultados;
}

console.log(cuadratica(1,-1,-12));

function pendiente(y1,y2,x1,x2){
   partea = y2-y1;
   parteb = x2-x1
   partefinal = partea/parteb
   
   return partefinal
}
console.log(pendiente (10,5,20,10));

function mayor(n){
    let f = ""
    if (n>10){
        f = "Numero "+n+" es mayor a 10";       
    } else if (n==10){
        f = "Numero "+n+" es igual a 10";
    } else {
        f = "Numero "+n+" es menor a 10";
    }  
    return f;
}

console.log(mayor(11));

function mayorswitch (n){
    let f ="";
    switch (n) {
        case 11:
            f = "Numero "+n+" es1"; 
            break;
        case 10:
            f = "Numero "+n+" es igual a 10"; 
            break;
        case 5:
            f = "Numero "+n+" es 5"; 
            break;
        default: f = "Numero "+n+" es menor a 10"; 
            break;
    }
    return f;
}
console.log(mayorswitch(0));

function multiplicar (n){
    
    for (i = 1; i<=10; i++){
        var multiplicacion = i*n;
        console.log(multiplicacion);
    }
}
multiplicar(5);
multiplicar(8);

function numeros(){

    for(i =100 ; i<=200; i++){
    var numeros = i;
    console.log(numeros);
    }
}
numeros();

function numeros2(){

    for(i =100 ; i<=1000; i= i+100){
    var numeros = i;
    console.log(numeros);
    }
}
numeros2();

function numero3(){
    let i = 0;
    while (i<=10) {
        console.log(i);
        i = i+1;            
    }
}
numero3();

function numero4(){
    let i = 0;

    do {i = i+1
        console.log(i);     
   } while (i<10); 
}
numero4();