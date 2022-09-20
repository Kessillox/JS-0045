function convertirAF(celcius) {
    let fahrenheit;
    fahrenheit = (celcius * 9 / 5) + 32;

    return fahrenheit;
}

console.log(convertirAF(30))

function convertirAK(celcius) {
    let kelvin;
    kelvin = celcius + 273.15;

    return kelvin;
}

console.log(convertirAK(30))