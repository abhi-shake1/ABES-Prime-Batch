// filter
//It filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition. It is a simpler and shorter code instead of the code using a loop:

//  filter is used to get elements based on condition
const myNums=[1,2,3,4,5,6,3,4334,3]
// to give numbers greter than 4 

//callback inside filter method

const gre=myNums.filter((num)=>num>4)
console.log(gre) // gives an array->type=object

// const gre1=myNums.filter((num)=>{
//     return num > 4; // explicit return required because of curly braces which created a   new scope
// })
// console.log(gre1)

// //the above is same as
// let gre2=[]
// myNums.forEach(element => {
//     if(element>4)gre2.push(element)
// });

// console.log(gre2)


// let cars=[
//     {name:"verna","engine":1000,"color":"red"},
//     {name:"alto","engine":800,"color":"blue"},
//     {name:"city","engine":1000,"color":"red"},
//     {name:"wagonr","engine":9000,"color":"white"}
// ]

// let fastcars=cars.filter(ele=>ele.engine>=1000 && ele.color==="red")
// console.log(fastcars)

// console.log(cars)


