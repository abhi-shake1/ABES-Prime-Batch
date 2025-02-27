// var temp = () => {
//     if (true) {
//         var username = "Raj";        //var scope is global inside a function/class
//         // but cant be accessed outside a function
//     }
//     console.log(username);
//     ;
// }
// temp();
// //console.log(username);



//---------------------- let keyword------------------------------------------

// var temp = (a, b) => {
//     if (true) {
//         let username = "Raj";        //var scope is local inside a block
//         //here only inside if{ }
//     }
//     console.log(username);
//     ;
// }
// temp(10, 20);
// console.log(username);

//--------------------

function S(a, b) {
    return (a + b) % 10;
}
console.log(S(2, 3));
    const S1 = (a, b) => {
    return (a + b) % 10;
}
console.log(S1(2, 3));
const summmm = (a, b) => (a + b) % 10;
    console.log(summmm(2, 3));

const sumMod10 = (a, b) => {
    const ans = (a + b) % 10;
    const printPretty = (txt) => {
        console.log("-------", (txt), "-------");
    };
    printPretty(ans);
    console.log("Sum done");
}
sumMod10(2, 3);
console.log("Done");