// const arr1 = [1,2,3,4,5,6,7]
// const ob = {
//     name: "Long_kute",
//     age: 24,
// }

// function test(ob) {

//     // let newa = [ob];
//     // newa.push(({a}) => {
//     //     for (let i = 0; i < a.length; i++) {
//     //         if (a[i] %2 == 0) {
              
                
//     //         }
            
//     //     }
//     // } )
//     // console.log(newa)
//     return { ...ob, arr: arr1.filter(item => item % 2 === 0) };
// }

// console.log(test(ob))

// const cloneUser = [...user]
// console.log(cloneUser);
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