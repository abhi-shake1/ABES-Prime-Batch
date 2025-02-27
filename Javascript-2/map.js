//It applies a given function on all the elements of the array and returns the updated array. It is the simpler and shorter code instead of a loop.

// map is used to get elements by performing operations on them
const arr=[1,2,3,4,5,6,7,8]
const newarr=arr.map((num) =>num*10)
console.log(newarr)


//also same as passing a fn
const into10=(num)=>num*10;

const new2=arr.map(into10)
console.log(new2)


//chaining
const new3=arr.map((num)=>num*3)
              .map((num)=>num*10)
              .filter((num)=>num>9)
console.log(new3)