console.log("Train task ishga tushdi  <--->");


function numbers(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= '0' && a[i] <= '9') {
            count++;
        }
    }
    return count;
}

const result = numbers("w2f5j7k9v4vf3");
console.log(result);

//function training(a, alhamdulillah) {
//const letter = a;
//const text = alhamdulillah;
//return text
//  .split('').filter(a => a === letter).length;
//}
//const result = training('a', 'alhamdulillah')
//console.log('result:', result);

//console.log("==================");

//function countLetter(o, qalbozori) {
//let count = 0;
// const text = qalbozori;
// const letter = o;

//for (let i = 0; i < text.length; i++) {
// if (text[i] === letter) {
//count++;
// }
//}
//return count;
//}
//const result = countLetter('o', 'qalbozori');
//console.log('result:', result);

// CALLBACK functions
//console.log("Jack Ma's advises : ==>");

//\const list = [
//  "try to be a good student", // 0 - 20
// "choose the right boss and do a lot of mistakes", // 20 - 30
//  "work for yourself", //30 - 40
// "do what you are good at",  // 40 - 50
// "help young people to reach their bright future",//50 - 60
// "just take rest because you missed the right time already", // 60 ++
//];

// CALLBACK

//function giveAdvise(a, callback) {
// if (typeof a !== "number") callback("insert a number", null);
// else if (a <= 20) callback(null, list[0]);
// else if (a > 20 && a <= 30) callback(null, list[1]);
// else if (a > 30 && a <= 40) callback(null, list[2]);
// else if (a > 40 && a <= 50) callback(null, list[3]);
// else if (a > 50 && a <= 60) callback(null, list[4]);
// else {

// }
//setTimeout(function () {
//  callback(null, list[5]);
//}, 6000);
//}

//console.log('passed here , 1');
//giveAdvise(66, (err, data) => {
// if (err) console.log('ERROR', err);
// else {
//    console.log("answer:", data);
// }
//});

//console.log('passed here , 2');



// asychronous functions


//async function giveAdvise(a) {
// if (typeof a !== "number") throw new Error("insert a number");
// else if (a <= 20) return list[0];
//  else if (a > 20 && a <= 30) return list[1];
//  else if (a > 30 && a <= 40) return list[2];
//  else if (a > 40 && a <= 50) return list[3];
//  else if (a > 50 && a <= 60) return list[4];
//  else {
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             resolve(list[5]);
//       }, 5000);
//     })
//}

//setTimeout(function () {
// callback(null, list[5]);
//}, 6000);

//}



// call via then , chatch

//console.log('passed here , 1');

//giveAdvise(15)
//.then((data) => {
//     console.log('answer:', data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// })

//console.log('passed here , 2');


// call via ASYNC function

//async function run() {
//  let answer = await giveAdvise(17);
// console.log(answer);

// answer = await giveAdvise(67);
//  console.log(answer);

// answer = await giveAdvise(37);
//  console.log(answer);
//}
//run();

// setInterval with callback

//function giveAdvise(a, callback) {
//if (typeof a !== "number") callback("insert a number", null);
//else if (a <= 20) callback(null, list[0]);
//else if (a > 20 && a <= 30) callback(null, list[1]);
// else if (a > 30 && a <= 40) callback(null, list[2]);
// else if (a > 40 && a <= 50) callback(null, list[3]);
// else if (a > 50 && a <= 60) callback(null, list[4]);
// else {

// }
// setInterval(function () {
//     callback(null, list[5]);
// }, 1000);
//}

//console.log('passed here , 1');
//giveAdvise(66, (err, data) => {
// if (err) console.log('ERROR', err);
//  else {
//     console.log("answer:", data);
// }
//});

//console.log('passed here , 2');