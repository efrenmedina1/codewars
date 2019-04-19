
// for (i = 0; i < 100; i++) {
//     if (i % 15 == 0) {
//         console.log("fuzzbuzz", i)
        
//     } else if (i % 5 == 0 ) {
//         console.log("buzz", i)
//     } else if (i % 3 == 0){
//         console.log("fuzz", i)
//     }
//   }

  // for (i = 0; i < 100; i++) {
  //   if (i % 5 == 0 && i % 3 == 0) {
  //       console.log("fuzzbuzz", i)
        
  //   } else if (i % 5 == 0 ) {
  //       console.log("buzz", i)
  //   } else if (i % 3 == 0){
  //       console.log("fuzz", i)
  //   }
  // }



//   function multiply(a, b){
//   let c = a * b
//     return console.log(c)
//  }


// function squareDigits(num){
//   let digits = num.toString().split('');
//   let arrayDigits = digits.map(Number)
//   console.log(arrayDigits);

//   let squaredDigits = arrayDigits.map(x => x * x);
//   console.log(squaredDigits)

//   let final = squaredDigits.join("")

//   let intergerFinal = parseInt(final)

//   console.log(intergerFinal)

//   return intergerFinal
   
//  }



//  squareDigits(9119)

//  function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
// }



// function duplicateCount(text){
//   let lowcase = text.toLowerCase()
//   // console.log(lowcase)
//   let split = lowcase.toString().split('');
//   // console.log(split);


//   let count = 0
//  split.map(x =>{ 
// for (i = 0; i < split.length; i++) {
//     if (x == split[i]) {
         
//         for( let y = 0; y < split.length; y++){ 
//          if( split[y] == x) {
//             split.splice(y, 1); 
//             console.log(y);
//           } 
//          }
         
        
//     } else{
        
//     } 
//   console.log(split)
//    count = split.length
//   }
// });
// console.log(count)
// return count
// }


// duplicateCount("abc")

// function isTriangle(a,b,c)
// {
//   if(a+b>c && a+c > b && b+c > a){
//     return true, console.log(true)
//   } else {
//      return false, console.log('false');
//     }
// }



// isTriangle(1,2,2);
// isTriangle(7,2,2);

// function binaryConvert(x) {
//   var sum = x;

//     let final = sum.toString(2)
//     console.log(final);
//     return final
    
// }
//   binaryConvert(2);


// function squareDigits(num){
//   let digits = num.toString().split('');
//   let arrayDigits = digits.map(Number)
//   console.log(arrayDigits);

//   let squaredDigits = arrayDigits.sort();
//   console.log(squaredDigits)

//   let reversed = squaredDigits.reverse()

//   let final = reversed.join("")


//   let intergerFinal = parseInt(final)

//   console.log(intergerFinal)

//   return intergerFinal
   
//  }

//  squareDigits(1265544)


////////////////////////garage door

// function door(events) {
//   let count = 0
//   let pressed = 2
//   let digits = events.split('')
//   let arrayDigits = digits
//   let output = []
//   let final = ""
//   let paused = 0
//   console.log(arrayDigits);

  
//     for(i = 0; i < arrayDigits.length; i++){
//       if(count == 0 && pressed == 0){
//         pressed = 2
//         console.log(count)
//         output.push(count)
//       } else if( count == 5 && pressed == 1 ){
//         pressed = 2
//         console.log(count)
//         output.push(count)
//       }else if(arrayDigits[i] == "P" && paused == 1){
//         pressed = 1
//         paused = 0
//         console.log(count)
//         output.push(count)
//       }else if(arrayDigits[i] == "P" && pressed == 1){
//         paused = 1
//         pressed = 2
//         console.log(count)
//         output.push(count)
//       } else if(arrayDigits[i] == "P" && count == 5 && pressed == 2){
//         pressed = 0
//         count = count - 1
//         console.log("P")
//         output.push(count)
//       } else if(arrayDigits[i] == "." && count == 5 && pressed == 2){
//         console.log(count)
//         output.push(count)
//       }
//       else if(arrayDigits[i] == "." && count == 0 && pressed == 2){
//         console.log(count)
//         output.push(count)
//       } else if(arrayDigits[i] == "." && pressed == 1){
//         count = count + 1
//        console.log( count)
//        output.push(count)
//       }else if(arrayDigits[i] == "."&& pressed == 0){
//         count = count -1
//        console.log(count)
//        output.push(count)
//       } else if(arrayDigits[i] == "P"){
//          pressed = 1
//          count = count + 1
//         console.log("P")
//         output.push(count)
//       } else if(arrayDigits[i] == "O"){
//         pressed = 0
//         count = count - 1
//         console.log("O")
//         output.push(count)
//       }else if(paused == 1){
//         console.log(count)
//         output.push(count)
//       }
//       console.log(output)
//       final = output.join("")
      
//       console.log(final)
//     }
// }

// door('...P..P.......')



// function findRoutes(routes){
  
//   console.log(routes.length)

//  routes.map(x =>{ 
// for(i = 0; i < routes.length; i++){
//   console.log(x[0])
//   console.log(routes[0, i][1])
//   if(x[0] == routes[0, i][1]){
//     console.log(x[0])
//   }
// }
// });
// }


// findRoutes([["USA","BRA"],["JPN","PHL"],["BRA","UAE"],["UAE","JPN"]])


// function friend(friends){
//   let realFriends = []

//   friends.map(x =>{
//     // console.log(x)
//     if(x.length == 4){
//       realFriends.push(x)
      
//       return realFriends
//     }
//    })
//    console.log(realFriends)
//    return realFriends
// }

// friend(["Ryan", "Kieran", "Mark"])






// var countBits = function(n) {
//   let bits = n.toString(2)
//   let digits = bits.toString().split('');
//   let count = 0

//   console.log(digits)

//   for( i = 0; i < digits.length; i++ ){
//     if(digits[i] == 1 ){
//       count = count + 1
     
//     }
//   }
//   console.log(count)
//   return count
// };

// countBits(10)

// function SeriesSum(n) {
//   let sum = 1
//   let num = 0
//   for(i = 1; i < n; i++ ){
//     console.log(i)
//    p = 1/(1+i * 3)
//    console.log(p)
//    sum = sum + p
   
//   }
//   num = sum.toFixed(2)
//   console.log(num)
//   return num
// }

// SeriesSum(4)

// function removeSmallest(numbers) {
//   let orginal = [...numbers]
//   let min = Math.min(...numbers);
//   let sort = []
//   for(i = 0; i <= numbers.length; i++){
//     if (min == numbers[i-1]){
//       let index = i-1
//       console.log(min, numbers[index])
//       sort = numbers.splice(index, 1)
//       console.log(numbers, orginal)
//       return numbers
      
//     }
//   }
// }

// removeSmallest([5, 2, 3, 1, 5])

// function uniqueInOrder(string){
//   let array = string.split('')
//   for(i = 0; i <= array.length; i++){
//     index = i-1
//      if(array[index] == array[i]) {
//        let removed = array.splice(i,1)
//        i = i-1
       
//   }
  
// }
// console.log(array)
// return(array)
// }

// uniqueInOrder("AABBBCCCDDDEEEEFFFF")


// function order(words){

//   let answer = words.split(' ').sort(function(a, b){
//     return a.match(/\d/) - b.match(/\d/);
//  });
//  console.log(answer)
//   return words.split(' ').sort(function(a, b){
//     return a.match(/\d/) - b.match(/\d/);
//  }).join(' ');
// }


// order("is2 Thi1s T4est 3a weee5")

// function fuzzBuzzArray(input){
//   let orginal = [...input];
//   let fuzzed = input;
//   let three = [];
//   let five = [];
//   let fifteen = [];
//   let countOrginal = 0
//   let count15 = 0
//   let count5 = 0
//   let count3 = 0

//   for(i = 0; i <= fuzzed.length; i++)
//   if(fuzzed[i] % 15 == 0){  
//    fifteen.push(fuzzed[i])
    
//   }else if(fuzzed[i] % 5 == 0){
//     five.push(fuzzed[i])
    
//   }else if(fuzzed[i] % 3 == 0){
//     three.push(fuzzed[i])
    
//   }
//   console.log(orginal)
//   console.log(fifteen)
//   console.log(five)
//   console.log(three)

//   countOrginal = orginal.length
//   count15 = fifteen.length
//   count5 = five.length
//   count3 = three.length

//   console.log(countOrginal)
//   console.log(count15)
//   console.log(count5)
//   console.log(count3)
//   let sum15 = 0;
//   let sum5 = 0;
//   let sum3 = 0

//   for(i = 0; i <= fifteen.length; i++)
//     if(i=i){
//       // console.log(fifteen[i-1])
//       sum15 = sum15 + fifteen[i-1]
//     }

//     for(i = 0; i <= five.length; i++)
//     if(i=i){
//       // console.log(five[i-1])
//       sum5 = sum5 + five[i-1]
//     }

//     for(i = 0; i <= three.length; i++)
//     if(i=i){
//       // console.log(three[i-1])
//       sum3 = sum3 + three[i-1]
//     }
  
//  console.log(sum15)
//  console.log(sum5)
//  console.log(sum3)
// }




// fuzzBuzzArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])


function list(names){
  
let nameString = []
 names.map( x => {
 nameString.push(x.name)

 
 })

if(nameString.length == 1 || nameString.length == 0){
  nameString = nameString.join(' ')
console.log(nameString)
return nameString
} else if(nameString.length == 2){
  nameString.splice(nameString.length-1, 0, '&')
  nameString = nameString.join(' ')
  console.log(nameString)
  return nameString

} else {
  for(i = 0; i <= nameString.length-3; i++){
    nameString[i] = nameString[i] + ","
  }
  nameString.splice(nameString.length-1, 0, '&')
  nameString = nameString.join(' ')
  console.log(nameString)
  return nameString
  
}

}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])

list([{name: 'Bart'},{name: 'Lisa'}])

list([{name: 'Bart'}])

list([])
