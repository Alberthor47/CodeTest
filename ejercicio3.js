// 3- Dada una lista de restricciones, se debe validar que una orden pueda ser validada 
// cada vez que ocurre un cambio en la misma. Si la orden pasa las validaciones entonces 
// puede ser asignada a un rappitendero, de lo contrario queda excluida para la iteracion en curso.
// Crear una estructura tomando en cuenta que pueden haber X restricciones que se puedan 
// aplicar y debe seguir los principios SOLID.

// Documentacion:
// 1- Una order con el atributo shopper=true y el atributo cooking_time=0 no puede asignarse
// 2- Una order con el atributo partner=true y el atributo cooking_time=0 no puede asignarse
// 3- Una order con el atributo lat=null y/o el atributo lng=null no puede asignarse

// Ejemplo:
// Order:
// shopper=true
// cooking_time=0
// partner=true
// lat=null
// lng=null


// is_valid = Validate(Order)
// if is_valid:
// print('puede asignarse')
// else:
// print('no puede asignarse en esta iteracion')

const rules = [
  { shopper: true, cooking_time: 0},
  { partner: true, cooking_time: 0},
  { lat: null },
  { lng: null},
]

const order = {
  shopper: true,
  cooking_time: 0,
  partner: true,
  lat: null,
  lng: null,
}

const validate = (odd) => {
  status = true;
  const orderProps = Object.entries(odd);
  rules.forEach((ruleObj) => {
    const verify = Object.entries(ruleObj);
    if(verify.length > 1){
      const invalid = [];
      verify.forEach((ruleArr) => {
        orderProps.forEach((property) => {
          if(property[0] === ruleArr[0]){
            if(property[1] === ruleArr[1]) {
              invalid.push('')
            }
          }
        })
      })
      if(invalid.length === verify.length) {
        status = false;
        return 0;
      }   
    }
    else {
      orderProps.forEach((property) => {
        if(property[0] === verify[0][0]) {
          if(property[1] === verify[0][1]) {
            status = false;
            return 0;
          }
        }
      })
    }
  })
  status ? console.log('puede asignarse') : console.log('no puede asignarse en esta iteracion');
}

validate(order)
