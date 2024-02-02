// 1: reverse an integer in JavaScript without converting it to a string

//  function reverseInt(num){
//     let reversed = 0;
//     while(num!=0){
//         reversed = reversed*10 + num%10;
//         num = Math.floor(num/10);

//     }
//     return reversed;

//  }

//  console.log(reverseInt(6576576));


// 2: reverse an integer by converting it to a string

    // function reverseInt2(num){
    //     let reversed = num.toString().split('').reverse().join('');
    //     return parseInt(reversed);
    // }

    // console.log(reverseInt2(6576576));


// 3: given number is prime or not 

// function isPrime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }

//4:  given number is even or not 

// function isEven(num){
//     return num%2==0;
// }

// //5: given number is odd or not

// function isOdd(num){
//     return num%2!=0;
// }



// bariTeach IT company interview question 

// find the repeated  alphabates in given word 

function nonRepeatedaplha(str){
    let result = '';
    for(let i=0;i<str.length;i++){
        if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
            result+=str[i];
        }
    }
    return result;
}

console.log(nonRepeatedaplha('saalemem'));










