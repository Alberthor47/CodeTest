// 2- Considere una orden y un rappitendero, cada uno con un tag de complejidad asociado.
// Por cada ciclo en el tiempo, el tag de las órdenes puede ser menos riguroso para 
// que otros rappitenderos puedan realizarla, abriendo las posibilidades de busqueda.
// Ejemplo:
// Orden:
// tag: 4
// iteration: 0

// tag: 4, 3 (nivel 3 abierto)
// iteration: 5

// tag: 4, 3, 2 (nivel 3 y 2 abiertos)
// iteration: 10

// tag: 4, 3, 2, 1 (nivel 3, 2 y 1 abiertos)
// iteration: 15

// Basandose en esta configuracion:
// config = {
//    "1": 15,
//    "2": 10,
//    "3": 5,
//    "4": 0
// }

// Resultado:
// >> x(od_tag=4, od_ite=0)  = [4]
// >> x(od_tag=4, od_ite=5)  = [4, 3]
// >> x(od_tag=4, od_ite=10) = [4, 3, 2]
// >> x(od_tag=4, od_ite=15) = [4, 3, 2, 1]

const config = {
  "1": 15,
  "2": 10,
  "3": 5,
  "4": 0
}

const assignRappiTendero = (orderTag, orderIteration) => {
  const tags = [];
  const makeArray = Object.entries(config);
  const l = makeArray.length - orderTag;
  for(i=0; i < l; i++){
    makeArray.pop();
  }
  const values = makeArray.reverse();
  values.forEach((iteration) => {
    if(iteration[1] <= orderIteration){
      tags.push(iteration[0]);
    }
  })
  console.log( `x(odd_tag=${orderTag}, odd_ite=${orderIteration})` ,tags)
}

assignRappiTendero(4,0);
assignRappiTendero(4,5);
assignRappiTendero(4,10);
assignRappiTendero(4,15);
