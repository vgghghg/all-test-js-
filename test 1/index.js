// 1.  create an aaray with the 1 through 10. write a function to remove all even 
// number from this aaray and return the new aaray.
// Input :[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// output : [1, 3, 5, 7, 9,]

 const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
 function removeEven(input){
    let newInput = [];
    for (var i = 0; i <= input.lenght -1; i++) {
        if(input[i] % 2 !== 0){
            newInput.push(input[i]);
        }
    }
    return newInput;
 }
 console.log(removeEven(input));

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
// 5. write a function that takes an array of numbers and returns anew array with only 
// the prime number from the original array.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ouput: [2, 3, 5, 7]

// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function isprime (num) {
//     if (num === 0 || num === 1) return false;
//   for  (var i = 2; i < num; i++) {
//      if (num % i == 0) return false;
//    }
//    return true;
//     
// for  (var i = 0 i < input.length; i++) {}
//
//
//        



 
