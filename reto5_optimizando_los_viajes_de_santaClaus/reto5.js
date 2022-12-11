/* Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.

Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. [12, 3, 11, 5, 7]. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.

Como no quiere dejar una ciudad a medias, si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.

Crea un programa que le diga la suma más alta de regalos que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar:   */


const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3
/* Tenemos 5 números, de los cuales no podemos sumar al tiempo más de 3 y el máximo de la suma debe ser 20.

La suma más alta es 20 = (12 + 3 + 5), la suma más alta seria 12 + 11 + 7 = 30, pero debemos recordar que nuestro máximo es maxGifts = 20 */


function getMaxGifts(giftsCities, maxGifts, maxCities) {
    //Ahora crearemos una variable para nuestra lista de combinaciones y pushearemos una lista vacía y una lista que contenga al index = 0, es decir, lista[0]
    let combinaciones = [];
    combinaciones.push([giftsCities[0]]);
    //Ahora eliminaremos el primer elemento de la lista usando el método shift()
    // giftsCities.shift()
    //[ [], [1] ] // Nuestra lista actual
    giftsCities.map(x => {//// Recordemos que eliminamos el primer index, es decir que el primer objeto que iterara el map sera el número 2
        const newList = combinaciones.map(combinacion => {
            let _combinacion = [...combinacion] //// Esto para que no nos edite la lista original
            if (_combinacion.length < maxCities) {
                _combinacion.push(x)
                /*  
                 combinacion es un elemento de nuestra lista, es decir:
                 [] es nuestro primer elemento y
                 [1] es nuestro segundo elemento
                 a los dos les vamos a pushear el elemento x de la lista inicial, el cual, en caso de la primer iteración sera el numero 2.
                 Nuestra nueva lista quedaria:
 
                  [
                      [2],
                      [1, 2]
                          ]
                             */
            }
            return _combinacion //En este punto, la variable newList sería igual a [ [2], [1, 2], debemos unir nuestra lista combinaciones y esta nueva lista
        })
        combinaciones = combinaciones.concat(newList)//// concatenaremos la nueva lista.
    })

    /* [
     [],
     [1],
     [2],
     [1, 2],
    [3],
    [1, 3],
     [2, 3],
     [1, 2, 3]
        ] */

    combinaciones.shift()//Para eliminar ese primer elemento vacío de la lista, volvemos a usar el método .shift()

    return Math.max(
        ...combinaciones.map(x => {
            //Ahora tenemos la lista de sumas, pero debemos enviar como solución solo el número más alto encontrado, usaremos Math.max() para esto.Debemos usar ... antes de combinaciones, ya que Math.max() no recibe array como propiedad, sino que cada número debe ser una propiedad.
            let sum = x.reduce((total, num) => total + num) //Ya que tenemos la lista completa de combinaciones, solo nos queda sumar                                            contenido y encontrar la más grande, para esto usaremos el método reduce()
            return sum > maxGifts ? 0 : sum //Pero sum puede ser mayor a 20, entonces reemplazaremos ese return por una ternaria
        })
    )

}

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)); // resultado = 20