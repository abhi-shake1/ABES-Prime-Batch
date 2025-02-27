//callback function is calling a function inside a function

function sum(a,b){
    return(a+b)
}

function printi(text){
    console.log(text)
}

printi(sum(9,4))

function callb(calci,a,b){ // a function is used as a parameter & used inside another fn
    let m=calci(a,b) 
    console.log(m)
}

callb(sum,8,9) 
// ----------------------------SetTimeout--------------------------------
// it is a buit in fn which is used to execute the passed argument(function) after a given time which can also be passed
// it waits for the given time after the run button
// unit is milliseconds ->1s=1000ms

// syntax->
    // setTimeout(function (){
    //     console.log("Hello");    it will print the hello after 2 second after run button
    // },2*1000);

    // setTimeout(<fn_name or fn declaration>,<time>);


    // to print counting from 1 to 10 with a gap of 2 seconds between each number

    //1... this will print all the elements at the same time after a gap of 2 sec from the time of pressing run button ... no gap b/w each number printing
    // for(let i=0; i<10;i++){
    //     setTimeout(function(){
    //         console.log(i+1)
    //     },2*1000)
    // }

    // -------------------used in timer-------------------
    //2.... now a gap will be there b/w each number
    for(let i=0; i<10;i++){
        setTimeout(function(){
            console.log(i+1)
        },i*1000)
    }




