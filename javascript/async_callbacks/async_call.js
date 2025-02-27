console.log("start")
const handleInnerCall=()=>{
    console.log("Step Y")
};
const handleCall=()=>{
    console.log("step M")

    handleInnerCall();
    console.log("step N")
};


// document.querySelector("body").addEventListener("click",handleCall);
setTimeout(handleCall,10000)//time millisecond
// handleCall();
console.log("end")
const getData=()=>{
    
}

