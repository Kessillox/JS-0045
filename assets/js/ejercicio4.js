function tiempo () {
    var modulo;
    var dias = prompt("Ingrese cantidad de dias: ");
    dias = parseInt(dias);
    var anio = Math.floor(dias/365);
    modulo = dias%365;
    var semana = Math.floor(modulo/7);
    var dias1 = modulo%7;
    document.write(`${dias} dias equivalen a ${anio} años, ${semana} semanas, ${dias1} dias.`);

}
    
    
