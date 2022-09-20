function convertirAF (celcius){
    let fahrenheit;
    fahrenheit = (celcius *9/5) + 32;

    return fahrenheit;
}



function convertirAK (celcius){
    let kelvin;
    kelvin = celcius + 273.15;

    return kelvin;
}

var celcius = parseInt(prompt("Ingresa grados celcius"));

alert(`${celcius} grados celcius a fahrenheit es: ${convertirAF(celcius)} F°`);
alert(`${celcius} grados celcius a kelvin es: ${convertirAK(celcius)} K°`);
