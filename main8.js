function revertirCadena(cadena) {
    let split = cadena.split('')
    let reverse = split.reverse()
    let resultado = reverse.join('')
    return resultado;
    
}
console.log(revertirCadena("Jazz"));
