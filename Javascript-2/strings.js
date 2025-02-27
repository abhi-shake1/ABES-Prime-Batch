"use strict" 
//due to this statement it treats all code as newer version:: no need to specify 


const name="Abhishek"; // primitive string
                    // immutable

const repoCount=443;
console.log("hello my name is"+name+"and my repo count is "+repoCount);
console.log(name[0]);
//name[0]="d"; not possible


// String interpolation---> using ` ` ->backtick character 
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('Hiteshhc'); // string object              // mutable

//gameNameme="dfdfd";//not possible
console.log(gameName.at());


console.log("abhishek","dwivedi");//with space
console.log("abhishek"+"dwivedi"); //concatenate


let s1="amit";
console.log(s1.toUpperCase())
s1=s1.toUpperCase()
console.log(s1)


let s2="Akashvani"
//index ka aur uske aage ka sab kuch 
console.log(s2.slice(2))
// a se b-1 tak
console.log(s2.slice(a , b ))