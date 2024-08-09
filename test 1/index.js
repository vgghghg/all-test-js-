// 1.  create an aaray with the 1 through 10. write a function to remove all even 
// number from this aaray and return the new aaray.
// Input :[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// output : [1, 3, 5, 7, 9,]

//  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
//  function removeEven(input){
//     let newInput = [];
//     for (var i = 0; i <= input.lenght -1; i++) {
//         if(input[i] % 2 !== 0){
//             newInput.push(input[i]);
//         }
//     }
//     return newInput;
//  }
//  console.log(removeEven(input));

 //******************************************************************** ***************//

 // 2. write a function that takes a string as an argument and returns the number of
 // vowels in the string . ignore case sensitivity.
 // Input: "Hello world"
 // output ; 3

 // let input = "HEllo world";

//  function vowels (input){
//     let output = 0;
//     let lenght = input.lenght -1;
//     for (var i = 0 ; i <= lenght; i++ ){
//         console.log(input.charAT(i));
//         if (

//             input.charAT(i) === "a" ||
//             input.charAT(i) === "e" ||
//             input.charAT(i) === "i" ||
//             input.charAT(i) === "o" ||
//             input.charAT(i) === "u" ||
//         ) {
//             output++;

//     }
//     if (
//             input.charAT(i) === "A" ||
//             input.charAT(i) === "E" ||
//             input.charAT(i) === "I" ||
//             input.charAT(i) === "O" ||
//             input.charAT(i) === "U" ||

//     )   { 
//                   output++;
//               }     

//     }      
//    return output;


// } 
// console.log(vowels(input));   


/********************************************************************************************* */

// 3. write a for loop that prints the first 10 fibonacci number .
// output : 0, 1, 1, 2, 3, 4, 5, 8, 13, 21, 34

// let pre  = 0;
// let  next = 1;
// for (var i = 0; i < 10 ; i++) {
    //  if (i == 0) {
    //        console.log(pre);
    //        continue;   
    //  }
    //  if (i == 1) {
    //     console.log(next);
    //     continue;
    //  }
    //  let temp = next;
    //  next = pre + next;
    //  pre = temp;

    //  console.log(next);
//  }

/*************************************************************************************************** */

// 4. write a function that takes a month as an argument (e.g. , "january") and return
// the number of days in that month . consider leap years for february .use a switch
// statement 
// input: "February"
// output: 28 or 29 (depending on whether it's a leap year)

// function months (month) {
//  switch (month) {
//   case "january";
    //   return 31;
    //   break;


    //   case "feb";
    //       return 28 ||  29;
    //       break;

    //  case "March";
    //       return 31;  
    //       break;
         
    // case "April";
    //       return 30;  
    //       break;
         
    // case "May";
    //       return 31;   
    //       break;

    // case "June";
    //       return 30;   
    //       break;

    // case "July";
    //       return 31;  
    //       break;
          
    // case "August";
    //       return 31;  
    //       break;

    // case "September";
    //       return 30;   
    //       break;

    // case "November";
    //       return 30;   
    //       break;

    // case "December";
    //       return 31; 
    //       break;

    //  default:
//    break;
  //     }

//}

// console.log(months("January"));
// console.log(months("Feb"));
// console.log(months("November"));
// console.log(months("April"));

/**************************************************************************************** */
// 5. write a function that takes an array of numbers and returns a new array with only 
// the prime number from the original array.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ouput: [2, 3, 5, 7]

// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  var newar =[];
//  primenum = (arry) => {
//     for (let i = 0; i < arr.length ; i++){
//     if (arr[count] / i == 0){
//    newar.push(arr[i]);
//  
//          }
//     }

// }    
//
// console.log(newar);

/*


// 6 . write a function that takes three numbers and return the largest of the three
//     without using the math.max () method.
//     input : 3, 5, 1
//     output: 5

    */ 

    // maxnum = (n1,n2,n3) => {
    //     if (n1 > n2 && n1 > n3 ) console.log(n1);
    //     else if (n2 > n1 && n1 > n3) console.log(n2);
    //     else if (n3 > n2 && n1 > n3) console.log(n3);

    // }

    // maxnum(3,5,1);
    /*

    // 7. write A function that takes an array of number and return the product of all the 
    //    number in the array .
    //    Input : [1, 2, 3, 4]
    //    output: 24


  // let input = [1, 2, 3,  4];
  // function product(input) {
//         let p = 1;
//         for (var i = 0; i < input. length i++){
//         p = p* input[o];
//       }
//       return p;
      
// }
// // consol.log (product(input));

/********************************************************************************************* */

// 8. write a function that  takes a string and an optional character. the function should 
// return the number of times the character appeares in the string . if the character is 
// not provided cout the number of spaces in the string .
// input : ("Hello world", "o")
// Output : 2
// input : ("Hello world")
// Output : 1


// fuction char count(value , char) {
//    if (char === ""||) char === undefined) {
//     let space = 0;
//      for (var i = 0; i > value .lenght ;i++) {
//            if (value.charAt === " ") space++;
//       }
//       return space;
//   }
//   let count = 0;
//   for (var i = 0; i < value.lenght; i++) {
//          if (value. charAt(i) === " ") count++;
//     }
//    return count;
// }
// console.log(charCount("hello world". "o"));
// console.log(charCount("hello world"));

/******************************************************************** */


// 9. write a function that takes a score (0-100) and return the corresponding grade (A, B, C, D, F)
//  based on standard grading scale . use a switch statement with a default
//  case for invalid scores.
// input : 85
// output : B
//

// function score(value){
//     switch (true) {
//              case value > 85 && value <= 100;
//                        return "A";
//                case value > 70 && value <= 85;
//                       return "B";
//                  case value > 55 && value <= 70;
//                        return "C";
//                  case value > 40 && value <= 55;
//                         return "D";
//                  case value > 0 && value <= 40;
//                         return "F";
//             default:
//                     return"Invalid score";
//
//   }
// }
//
//
//  console.log(score(90));
//  console.log(score(75));
//  console.log(score(60));
//  console.log(score(45));
//  console.log(score(30));
//  console.log(score(-5));
//  console.log(score(105));

/*************************************************************************************** */

// write a function takes an array of strings and return an object where the
// keys are the string and the values are the lengths of those strings. the function
//  should exclude strings that have a length or 3 or less.
// Input : ["apple", "bat", "car", "dolphin"]
// output: {"apple", 5, "dolphin": 7}

// let Input : ["apple", "bat", "car", "dolphin"]


// method-1 (using for loop)
// function output(input) {
//      let emptyobj = {};
//      for (let input of inputs) {
//      if (input.lenght > 3) {
//        emptyobj[input] = input.length;
//     }
// 
//   }
//  return empobj;
//
// }
// console.log(output(inputs));

// method2 (through reduce (input));
// function output (input) {
//   let newArray = input.reduce((acc, start)) =>
//        if (start. lenght > 3) {
//                   acc[start] = start.lenght;
// 
//   }
//  return acc;
//   },{});
//   return newArray;
// }
// console.log(output(inputs));


/************************************************************************************************************* */