// 1- Dada una lista de funciones, se requiere minimizar la complejidad utilizando una 
// abstraccion de la mismas, en la cual al ejecutar una sola funcion se ejecutan 
// todas(x) al mismo tiempo. (Utilizar solo programacion funcional para resolver el 
// problema / Composicion de funciones)
// Ejemplo:

// >> sum(x=1, y=2) == 3
// >> mul(x=1, y=2) == 2
// >> sub(x=1, y=2) == -1
// >> result = sum(3, 2, -1) = 4

// Resultado:
// >> x(1, 2) = 4

const abstraction = (x, y) => {
  const sum = (a,b,c) => (c ? a + b + c : a + b);
  console.log(`sum(x=${x}, y=${y}) ==`,sum(x,y));
  const mul = (a, b, i=1) => {
    if(i>=b){
      return a;
    }
    return mul(a+a, b, i+1);
  };
  console.log(`mul(x=${x}, y=${y}) ==`,mul(x,y));
  const sub = (a,b) => (sum(a,-b));  
  console.log(`sub(x=${x}, y=${y}) ==`,sub(x,y));
  console.log(`x(x=${x},y=${y}) =`,sum(sum(x,y),mul(x,y),sub(x,y)));
}

abstraction(1,2);
