/* Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

       El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

       Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:
       
       A tener en cuenta:

       Fíjate bien en los espacios en blanco que hay en el cubo.
       El cubo tiene que ser simétrico.
       Asegúrate de usar los símbolos correctos.

       Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.*/




function createCube(size) {
    let cube = []
    for (let i = size; i > 0; i--) {
        cube.unshift(`${" ".repeat(size - i)}${"/\\".repeat(i)}${"_\\".repeat(size)}`);
        cube.push(`${" ".repeat(size - i)}${"\\/".repeat(i)}${"_/".repeat(size)}`);
    }
    return cube.join("\n");
}
console.log(createCube(10)); 
