// It reduces all the elements of the array to a single value by repeatedly applying a function. It is an alternative of using a loop and updating the result for every scanned element. 

let arr=[1,2,3,4,5,6,7,89,3]
let mynew=arr.reduce(function(accu,currval){
        return accu+currval;
},0)
//^ ye value start me accu me store hogi phir operation repeat hoga aur accu me sum store ho jayega

console.log(mynew)

let mynew1=arr.reduce((accu,currval)=>accu+currval,0)
console.log(mynew1)                              //^ it is the initial value

// this is used to perform the problems like sum of elements




