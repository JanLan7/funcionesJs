

function contarVocales(palabra) {
    let contador = 0;
    let vocales = ["a","e","i","o","u"]
    for(let char of palabra.toLowerCase()){
        if (vocales.includes(char)){
            contador++;
        }
    }
    
    return contador;
}

console.log(contarVocales("Jajhajhahagahgaaga"));
