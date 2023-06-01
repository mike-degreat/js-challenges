// Challenge 1 : Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahrenheit_To_Celsius(fahrenheit){
    var celcius = (fahrenheit - 32) * 5 / 9; // formula for converting fahrenheit to celcius
    return celcius
}

console.log(fahrenheit_To_Celsius(120) + "\u00B0C"); //expected output = 48.888888888888886°C and concatenating with "\u00b0C" adds the degree celcius symbol to the answer.

//Challenge 2: Create a function that will calculate the average of numbers in an array
function average_Of_numbers(num){
    if (num.length === 0){
        return 0; //this returns 0 if the array is empty
    }

    let sum = 0;
    let average;
    for (let i = 0; i < num.length; i++){
        sum += num[i]; //adds all the numbers in the array
    }

    if (num.length > 0) {
        average = sum / num.length; //returns the average of the numbers in the array
    } else (
        average = 0
    )
    return average;
}

console.log(average_Of_numbers([9, 10, 13, 20, 89, 11, 5, 30])) //expected output = 23.375

//challenge 3: Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits
function is_Divisible_by_two_numbers(n, x, y){
    if (n % x === 0 && n % y === 0){
        return true;
    }
    else{
        return false;
    }
}

var n = 8;
var x = 4;
var y = 2;

console.log(is_Divisible_by_two_numbers(n, x, y)); // output is true because 8 is divisible by 4 and 2 

 // challenge 4: Create a function that will output the first 100 prime numbers.
function primeNumbers(){
    var prime = []; // Array to store prime numbers


    for (var i = 2; i < 100; i++){
        var isPrime = true; // Flag to track if a number is prime

        // Check for factors from 2 up to the square root of the number
        for (var j = 2; j <= Math.sqrt(i); j++){

                //If the number is divisible by any factor, it's not prime
                if (i !== j && i % j === 0){
                isPrime = false;
                break;
            }
        }
            // If the number is prime, add it to the primes array
            if (isPrime){
            prime.push(i);
        }
    }
return prime; // Return the array of prime numbers
}

var prime_Array = primeNumbers(); //call the function
console.log(prime_Array); //output: 2,  3,  5,  7, 11, 13, 17, 19,23, 29, 31, 37, 41, 43, 47, 53,59, 61, 67, 71, 73, 79, 83, 89,97

//challenge 5: Create a function that will return a boolean specifying if a number is a prime number.
function specifyPrimeNumber(num){
    if (num <= 1){
        return false; // Numbers less than or equal to 1 are not prime
    }

    for (var i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0 && num !== 0){
            return false; // If the number is divisible by any value of i, it's not prime
        } 
}
return true; // If the loop completes without finding a divisor, the number is prime
}
console.log(specifyPrimeNumber(887)); // outputs: true

//Challenge 6: Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
function positiveNumbers(arr){
   var arrayNumbers = []; // Array to store positive numbers
    var num = 0; //Initialize a variable to track the index of the array

    // Iterate through the array using a while loop
    while(num < arr.length){
        
        // Check if the current element is greater than 0 (positive number)
        if (arr[num] > 0){
            arrayNumbers.push(arr[num]); // Add the positive number to the array
        }
        num++;
    }
    return arrayNumbers; // Return the array of positive numbers
}
let positiveNumbersArray = positiveNumbers([-1, 2, 3, 4, 5, -6, -10]); // Call the function with the input array
console.log(positiveNumbersArray); //output: [2, 3, 4, 5]

//Challenge 7 :Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

//for loop, that print number from 1 to 100
for (var i = 1; i <= 100; i++){

        //using a switch statement to chack for each case
        switch (true){
        case i % 3 === 0 && i % 5 === 0:
            console.log("FizzBuzz"); // If i is divisible by both 3 and 5, print "FizzBuzz"
            break;

        case i % 3 === 0:
            console.log("Fizz"); // If i is divisible by  3, print "Fizz"
            break;

        case i % 5 === 0:
            console.log('Buzz'); // If i is divisible by 5, print "Buzz"
            break;

        default:
            console.log(i);
            break;
        }
        console.log 
}
/* output: this outputs:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
*/