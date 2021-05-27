

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


