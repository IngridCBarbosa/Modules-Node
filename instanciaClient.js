
const contadorA = require('./instaciaUnica')
const contadorB = require('./instaciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.increment()
contadorA.increment()
console.log(contadorA.value,contadorB.value)

contadorC.increment()
contadorC.increment()

console.log(contadorC.value,contadorD.value)