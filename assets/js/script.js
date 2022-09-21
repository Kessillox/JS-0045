function menu() {
    document.write("<h1>Operadores y uso de variables.</h1>");

    document.write("<h2>1) Diagrama de flujo.</h2>");
    
    document.write("<h2>2) Operaciones.</h2>");

    document.write("<h2>3) Conversor de temperatura a Kelvin y Farenheit.</h2>");

    document.write("<h2>4) Calculador de tiempo.</h2>");

    document.write("<h2>5) Sumatoria y promedio.</h2>");

    var promptcito = prompt("Ingrese el numero de  la opcion.");
    promptcito = parseInt(promptcito);


    switch(promptcito)
    {
        case 1:
            window.location.href="desafio.drawio.pdf";
            break;
        case 2:
            operaciones();
            break;
        case 3:
            ejercicio3();
            break;
        case 4:
            tiempo();
            break;
        case 5:    
            ejercicio5();
            break;
    }


}