// 1
let numbers = [1, 2, 3, 4];
let newNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers.push(numbers[i] * 2);
//     }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

// const odd = numbers.filter(function(f){
//       return f % 2 !== 0;
//    });

const odd = numbers.filter(f => f % 2 !== 0);

   console.log(odd);

// newNumbers = odd.map(function(f){
//    return f*2;
// })

newNumbers = odd.map(f => f*2);

console.log(newNumbers);

// 2
let monday = [
   {
       name     : 'Write a summary HTML/CSS',
       duration : 180
   },
   {
       name     : 'Some web development',
       duration : 120
   },
   {
       name     : 'Fix homework for class10',
       duration : 20
   },
   {
       name     : 'Talk to a lot of people',
       duration : 200
   }
];

let tuesday = [
   {
       name     : 'Keep writing summary',
       duration : 240
   },
   {
       name     : 'Some more web development',
       duration : 180
   },
   {
       name     : 'Staring out the window',
       duration  : 10
   },
   {
       name     : 'Talk to a lot of people',
       duration : 200
   },
   {
       name     : 'Look at application assignments new students',
       duration : 40
   }
];

let tasks = monday.concat(tuesday);
console.log(tasks);

//*
tasks.forEach(function(task){
    task.duration = task.duration / 60;
    return tasks;
});
console.log(tasks);

//**
const twoHoursOrMore = tasks.filter(task => task.duration >= 2);
console.log(twoHoursOrMore);

//***
const myCost = 10;
const myBilling = twoHoursOrMore.map(function(task) {
    return task.duration * myCost;
});
console.log(myBilling);  

//****
const myAmount = myBilling.reduce(function(f,i) {
    return f+i;
});
console.log(`my total payment amount is ${myAmount} €`);
