// Implementar solución aquí
const button = document.querySelector('#btn');
const textoColor = document.querySelector('#hex-value');

//Función evento click en el botón
button.addEventListener("click", function(){
    const colorHex =  randomColorHexadecimal();
    document.querySelector("body").style.background = colorHex;
    textoColor.textContent = colorHex;
});

// Función para generar un color hexadecimal aleatorio
function randomColorHexadecimal(){
    const hexadecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let randomColor = "#";

    // Generar seis valores aleatorios del array hexadecimal y concatenarlos
    for(let i = 0; i < 6; i++){
        randomColor += hexadecimal[Math.floor(Math.random() * hexadecimal.length)];
    }
    return randomColor;
}