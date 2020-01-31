const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = e => e.pais === 'China'
const women =  e => e.genero === 'F'

const minorS = (employee, actualEmployee) => {
    return employee.salario < actualEmployee.salario ? employee : actualEmployee
}

axios.get(url).then(response =>{
    const funcionarios =  response.data
    //console.log(funcionarios)

  
    const func = funcionarios.filter(chineses).filter(women).reduce(minorS)
    console.log(func)
  
})

