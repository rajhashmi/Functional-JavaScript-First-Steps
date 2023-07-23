// pure function and not pure function

// Not pure:

let notPure = "shahid";

function notPureGreet(){
    console.log(`Hello, ${notPure}`);
}
notPureGreet(); // Hello, shahid

notPure = "Hashmi";
notPureGreet() // Hello, Hashmi


// pure 

function pureGreet(names){
    return `Hello, ${names}`
}
(pureGreet("Shahid")) // Hello, shahid
pureGreet("Hashmi"); // Hello, Hashmi



//  side effect --

let thesis = {name:"church's",date: 1936};

function renameThesis(newName){
    thesis.name = newName;       // reading data from outside the function
    console.log("Renamed!");   // consoling value
}
renameThesis("church-Turing") // Renamed!
thesis; // {name:"church-Turing's",date: 1936}


// no Side Effect --

function renameThesisNoSideEffect(oldThesis,newName){
    return {
        name:newName, date: oldThesis.date
    }
}
const thesis2 = renameThesisNoSideEffect(thesis,"church-Turing")



