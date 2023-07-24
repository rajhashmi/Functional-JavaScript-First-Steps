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



//  =========================== Recurssion =========================

// Staying out of the loops with recurssion

// 1.Iteration 

// Imperative looping Statefull

// 2. Recussion

// Functional Self-Repential Stateless

// * Iteration isn't Functional use Recurssion instead


// #  Iteration: 

function sum(number){
    let total = 0;
    for(let i = 0; i<number.length;i++){
        total += number[i]
    }
    return total
}
sum([0,1,2,3,4])


//  # Recursion:

// Eg. 1: ->
function sum2(numbers){
    debugger;
    if(numbers.length === 1){
        return numbers[0]
    }else{
        return numbers[0] + sum2(numbers.slice(1));
    }
}
console.log(sum2([0,1,2,3,4]));

// Eg. 2: ->
function numbers(n){
    console.log(n);
    if(n<10){
      numbers(n+1)
    }
}
let number = 0;
console.log(numbers(number));

// Eg. 3: -> 

function factorial(item){
    if(item==0){
        return 1
    }
    return item*factorial(item - 1)
}
let findFactorial = 5
console.log(factorial(5));



// =============== Itration vs Recursion Exercise ===================


