//-----------------------1. regular function--------------------------------
// function example(a){
//     console.log("hello",a);
// }

// example("Ramesh babu")

//CONS:
//1.can be called before declaration
//2.another function can be created using same name 


//--------------------------2. function assignment----------------------------------
// const view=function printText (m){   // no matter what is the name of function after(=)
//     console.log("hi",m);
// };

// view("Rakesh");
// printText("Rakesh")



//--------------------3. anonymous function assignment-----------

// const view=function (m){
//     console.log("hi",m);
// };

// view("Rakesh");
// printText("Rakesh")

//-------------------4. arrow function assignment----------------

// const view=(m)=>{
//     console.log("hi",m);
// };

// view("Rakesh");

//-------------------5. arrow function assignment----------------

// const view=(a,b)=>(a+b)%10;     no need to return statement
// view("Rakesh");                 for one liner functions 



//------------------5.  exampels---------------------------------
// function sumMod10(a,b){
//     return (a+b)%10;
// }
// const ans=sumMod10(10,20);
// console.log(ans)


