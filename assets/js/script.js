function menu() {
 
    var promptcito = prompt("Ingrese el numero de  la opcion.");
    promptcito = parseInt(promptcito);


    switch(promptcito)
    {
        case 1:
            window.location.href="desafiojs.drawio.pdf";
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
        default:
            alert("Opcion invalida.");
    }


}