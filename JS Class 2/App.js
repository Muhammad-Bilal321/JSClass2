// Chapter 21 (Changing Case)

// Question 1
// var allLower = userInput.toLowerCase;
// var allLower = userInput.toLowerCase();

// Question 2
// var x = "BILAL";

// x = x.toLowerCase();
// console.log(x)

// Question 3

// var x = "bilal";

// x = x.toUpperCase();
// console.log(x)

// Question 4

// var x = "BILAL";

// var x2 = x.toLowerCase();
// console.log(x2)

// Question 5

// var a =["BILAL","UBAID","TAHA","UMAR",];

// for (var i = 0; i < a.length; i++) {

// var x = a[i].toLowerCase();
// console.log(x)
// }

// Question 6

// var a = "bilal";

// a = a.toUpperCase();

// alert(a);

// Question 7

// var cityName = "kaRachi";

// var firstLetter = cityName.slice(0,1);
// firstLetter = firstLetter.toUpperCase()

// var otherLetters = cityName.slice(1);
// otherLetters = otherLetters.toLowerCase();

// var cityName = firstLetter + otherLetters;

// alert(cityName);

// Chapter 22 - 25 (Strings)

// Question 1

// var someWord = "captain";

// var someWord1 = someWord.slice(1,3)

// alert(someWord1)

// Question 2

// var a = "number of characters";

// Question 3

// var animal = "Elephant";

// var seg = animal.slice(2,6);

// alert(seg)

// Question 4

// var a = "Bilal";

// var b = a.length;

// alert(b);

// Question 5

// var a = "Pakistan";
// alert(a.length)

// var b = a.slice(1, a.length-3);
// alert(b)

// Question 6

// var text = "To be or not to be.";
// var indx = text.indexOf("be");

// alert(indx) // 3

// Question 7

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");

// alert(indx)//16

// Question 8

// var a = "You have to go";

// var b = a.lastIndexOf("go")

// alert(b)

// Question 9

// if(indexNum !== -1){}

// Question 10

// var string = "abcde";

// alert(string.charAt(2))// c

// Question 11

// var text = "There is some text";

// var cha = text.charAt(9)

// alert(cha)//s

// Question 12

// var a = "There is some text";

// var b = a.charAt(a.length -1);

// alert(b)//t

// Question 13

// var input = "There is some text";

// var cha = input.charAt(4)

// alert(cha)//e

// Question 14

// if (var2.indexOf(var1.slice(0, 3)) !== -1)

// Question 15

// var a = "Some text here";

// var arr = [];

// for (var i = 0; i < a.length; i++) {
//     arr[i] = a.charAt(i);
//     console.log(arr[i]); 
// }

// Chapter 26 (Rounding Numbers)

// Question 1

// var a = 1.5;
// a = Math.round(a);
// alert(a)

// Question 2

// var origNum = 1.2;
// var roundNum = Math.ceil(origNum);
// alert(roundNum)

// Question 3

// var origNum = 1.8;
// var roundNum = Math.floor(origNum);
// alert(roundNum)

// Question 4
// var a = 1.5;
// var b = Math.round(a);
// alert(b)


// Question 5
// var a = 0.5;



// var b = Math.floor(a);

// alert(b)

// Chapter 27 (Random Numbers)

// Question 1

// var a = Math.random()

// a = Math.floor(a * 50) + 1;

// alert(a)

// Question 2


// var a = Math.random()

// var b = Math.floor(a * 50) + 1;

// alert(b)

// Question 3

// var dice = Math.random()

// var rollDice = Math.floor(dice * 6) + 1;

// alert("Dice Number is " + rollDice)

// Question 4

// var toss = Math.random()

// var tossDecision = Math.floor(toss * 2) + 1;

// if(tossDecision == 1){
//     alert("Heads");
// }

// else{
//     alert("Tails")
// }

// Chapter 28, 29 (Converting Strings)

// Question 1

// var a = "45";

// var b =  +(a);
// or
// var b =  parseInt(a);
// var b =  Number(a);



// Question 2

// var a = "45";

// var b =  +(a);

// console.log(b)

// Question 3

// var a = "45.45";

// var b =  parseFloat(a);
// or
// var b =  Number(a);

// Question 4

// var a = "45";

// var b =  +(a);

// console.log(typeof(b))

// Question 5

// var a = 45;

// var b =  toString(a);

// console.log(typeof(b))

// Question 6

// var a = 42;

// var b =  toString(a);

// console.log(b)

// Question 7

// var a = "3.14";

// var b = parseFloat(a);

// alert(b)

// Chapter 30 (Controlling the length of decimals)

// Question 1

// var a = 3.55456;

// var b = a.toFixed(4)

// console.log(typeof(b))

// alert(b)

// Question 2

// var a = 3.55456;

// var b = +a.toFixed(2)

// console.log(typeof(b))

// alert(b)

// Question 3

// var a = +prompt("");

// if (a.toFixed(2).length > 4)
// {
// alert(a)
// }
// else{
//     alert("Type At least 10")
// }

// Question 4

// var a = 3.55456;

// var b = +a.toFixed(2)

// alert(b)
  
// Chapter 31 - 34 (Date & Time)

// Question 1

// var dObj = new Date();

// Question 2

// var dObj = new Date();

// var dStr = toString(dObj);

// alert(typeof(dStr))

// Question 3

// var d = new Date();

// var day = d.getDay()
// console.log(day)

// Question 4

// var d = new Date();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var day = d.getDay()
// console.log(dayNames[day])

// Question 5
// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth() + 1; 
// var day = d.getDate();
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();

// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Day: " + day);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);

// Question 6

// var d = new Date("10, 5, 2021");
// console.log(d)

// Question 7

// var d = new Date("1, 1, 1992");
// console.log(d)

// Question 14

// var dob = new Date("1997, 10, 10");

// var d = new Date()

// var ageCalculate = d - dob;

// alert(ageCalculate)


// Chapter 35 - 37 (Functions)

// Question 1

// function displayAlert()
// {
//     alert("This is a function")
// }
// displayAlert()

// Question 2

// function askName()
// {
//     var name = prompt("Enter name")
//    var userName = name
//    console.log(userName)
// }
// askName()

// Question 3

// function functionsCaller() {
   
//     function1();
  
   
//     function2();
//   }
  
//   function function1() {
//     console.log("This is function 1.");
//   }
  
//   function function2() {
//     console.log("This is function 2.");
//   }
  
//   functionsCaller();

// Question 4

// function askName()
// {
//     var name = prompt("Enter name")
//    var userName = name
//    alert(userName)
// }
// askName()

// Question 5
// function askName(name , name2)
// {
  
//    return alert(name + name2)
// }
// askName(prompt("Enter name") , prompt("Enter name"))

// Chapter 38 (Local vs. Global Variables)
  
// Question 1

// function calculateNum() {
//     var a = 5; 
//     var b = 10; 
//     var sum = a + b; 
//     console.log(sum);
//   }
  
//   calculateSum();

// Question 2

// var a = "Bilal";

// function globalVariable() {
//   console.log(a); 
// }
// globalVariable();

// Chapter 39, 40 (Switch Statements)

// Question 1

// var fruit = prompt("Enter Fruit Name");

// switch (fruit) {
//   case "apple":
//     alert("It's an apple.");
//     break;

//   case "banana":
//     alert("It's a banana.");
//     break;

//   case "orange":
//     alert("It's an orange.");
//     break;

//   default:
//     alert("It's an unknown fruit.");
//     break;
// }


// Question 2

// var cityName = prompt("Enter a city name:");

// switch (cityName) {
//   case "Karachi":
//     alert("You entered London!");
//     break;

//   case "Lahore":
//     alert("You entered Paris!");
//     break;

//   case "Islamabad":
//     alert("You entered New York!");
//     break;

//   default:
//     alert("The city name you entered is not recognized.");
//     break;
// }


  



















