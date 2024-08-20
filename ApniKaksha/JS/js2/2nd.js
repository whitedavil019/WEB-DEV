/*This is a code that prints 
hello world on our console window*/
// console.log("Hello World");

// #Arithmetic Operators

// let a = 2;
// let b = 4;

// console.log(" a = ", a, "& b = ", b);
// console.log(" a + b = ", a + b);
// console.log(" a - b = ", a - b);
// console.log(" a * b = ", a * b);
// console.log(" a / b = ", a / b);
// console.log(" a % b = ", a % b);
// console.log(" a ** b = ", a ** b);


// #Unary Operators

// let a = 2;
// let b = 4;

// console.log(" a = ", a, "& b = ", b);
// a = a + 1; a+1 ko a++ bhi likh sakte hai  
// a++;
// console.log(" a = ", a);

// a = a - 1; a-1 ko a-- bhi likh sakte hai  
// a--;
// console.log(" a = ", a);


// console.log(" ++a = ", ++a); yha a ki value ek jyada ho jayegi
// console.log(" a++ = ", a++);    yha a ki value same rhegi phir uske baad ek jyada ho jayegi
// console.log(" a = ", a);

// console.log(" --a = ", --a);   yha a ki value ek direct kam ho jayegi
// console.log(" a-- = ", a--);   yha a ki value same rhegi phir uske baad ek kam ho jayegi
// console.log(" a = ", a);


// #Assingment Operators
// let a = 2;
// let b = 4;

// // a += 4;
// // a -+ 4;
// // a *= 4;
// // a %= 4;
// // a /= 4;
// // a **= 4;
// console.log(" a = ", a);

// #Comparison Operators
// let a = 2;
// let b = 4;

// // console.log(" 2 == 4", a == b);
// console.log(" 2 != 4", a != b);


// let a = 2; //number
// let b = "4";  //string  yha string ko number me convert kr diya hai

// // console.log(" 2 == 4", a == b);
// console.log(" 2 != 4", a != b);


// let a = 2; //number
// let b = "4"; //string
// // console.log(" 2 === 4", a === b); //stricter version hai comparison operators ka
// console.log(" 2 !== 4", a !== b);


// let a = 2; //number
// let b = "4"; //string
// // console.log(" 2 > 4", a > b); 
// // console.log(" 2  < 4", a < b);
// console.log(" 2  <= 4", a <= b);
// console.log(" 2  >= 4", a >= b);

// #Logical Operators

// let a = 2; 
// let b = 4; 
// let cond1 = a > b;
// let cond2 = a === 6;

// console.log("cond1 && cond2 = ", cond1 && cond2); 
// console.log("cond1 && cond2 = ", a < b && a === 6);

// console.log("cond1 || cond2 = ", a > b || a === 6);

// console.log("!(6<5) = ", !(a<b));


// #Conditional Operators

// #colors examples


// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }

// console.log(color);



// let mode = "blue";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);

// #age examples


// let age = 25;

// if (age >= 18) {
//     console.log("vote");
// } else {
//     console.log("not vote")
// }


// # odd or even

// let num = 10;

// if (num % 2 === 0) {
//     console.log(num, "is even")
// }  else {
//    console.log("odd")
// }

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }  else if (mode === "blue") {
//     color = "blue"; 
// } else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }
// console.log(color);

// if (mode === "dark") {
//     console.log(mode);
// }
        


// let age = 15;

// let result = age >= 18 ? "adult" : ("not adult");  //simple, compact if-else
// console.log(result)
// age >= 18 ? console.log("adult") : console.log("not adult"); 



// #Practice



// alert("Hello!");  //one time
// prompt("Hello!"); //one time but additional blank line 

// let name = prompt("Hello!");
// console.log(name);

// let num = prompt("enter a number:");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5")
// } else {
//     console.log(num,"is NOT a multiple of 5")
// }



// let score = 45;
// let score = prompt("enter your score(0-100):");
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 70 && score <= 89) {
//     grade = "B";
// } else if (score >= 60 && score <= 69) {
//     grade = "C";
// } else if(score >=50 && score <=59) {
//     grade = "D";
// } else if (score >= 0 && score <= 49) {
//     grade = "E"
// }
// console.log("according to your scores, your grades was : ", grade)
