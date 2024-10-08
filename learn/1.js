
const user = {
  name: 'duoc',
  age: 24,
  ability: ['coding']
}



function test() {
    let newa =[{...user}] 
    return newa;
}

console.log(test());