function ejercicio5(){
    var n1 = parseInt(prompt("Ingresa un número:"));
    var n2 = parseInt(prompt("Ingresa otro número:"));
    var n3 = parseInt(prompt("Ingresa otro número:"));
    var n4 = parseInt(prompt("Ingresa otro número:"));
    var n5 = parseInt(prompt("Ingresa otro número:"));

    var suma = n1+n2+n3+n4+n5;

    alert(`${n1} + ${n2} + ${n3} + ${n4} + ${n5} = ${suma}`);
    alert(`El promedio es = ${suma/5}`);
}