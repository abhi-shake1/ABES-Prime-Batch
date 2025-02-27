function calculate(marks){
let total=0;
for(let mark of marks){
    total+=mark;
}
return (total/(marks.length*100))*100;
}

function getuserInput(){
    let username=prompt("enter name");
    let numberofsubject=parseInt(prompt("enter number of subjects :"));
    let marks=[];

    for(let i=0; i<numberofsubject;i++){
        let mark=parseFloat(prompt("enter mark for subject"+(i+1)+":"));
        marks.push(mark);
    }

    let percentage=calculate(marks);
    console.log("username:"+username);
    console.log("marks:"+marks);
    console.log("final percentage: "+percentage+"%");




}

getuserInput();