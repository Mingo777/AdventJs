/* En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.

Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes. 

Crea una función getGiftsToRefill que reciba tres Array como parámetros.
La función debe devolver un Array con los regalos que hay que reponer.
Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacenes.
Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
Si hay más de un regalo que reponer, la función debe devolver un Array con todos los regalos que hay que reponer.*/


const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']

function getGiftsToRefill(a1, a2, a3) {

    let reponGifts = [...(new Set(a1.concat(a2, a3)))]
    let filtrado = (gifts) => a1.includes(gifts) + a2.includes(gifts) + a3.includes(gifts) < 2

    return reponGifts.filter(filtrado);
}

console.log(gifts);