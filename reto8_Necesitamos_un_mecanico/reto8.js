
/* Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.

Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla: */

function checkPart(part) {
    if (part === part.split("").reverse().join("")) return true
    return [...part].some((_, i) => {
        const word = [...part]
        word.splice(i, 1)
        return word.join("") === word.reverse().join("")
    })
}


console.log(checkPart("uwu"));
console.log(checkPart("miidim"));
console.log(checkPart("midu"));