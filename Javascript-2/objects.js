// all the keys are stored as strings in the memory whether they are number or any data-type  
// So [name] method for aaccessing data works with strings 
// e.g. a[name]->error
//      a["name"]->amit
let a={
    name:"Amit",
    15:39,
    gender:"M"
}
console.log(a)
//console.log(a.15)->error
console.log(a[15])
console.log(a["name"])
console.log(a.name)
// isme for in loop chalta hai
for (const key in a) {
        console.log(key,a[key])
}
