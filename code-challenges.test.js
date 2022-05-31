// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

    // const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    // const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    // Use 'describe ()', 'it ()' and 'expect ()' to test the syntax with jest.

    describe ("function", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
})
})

        // after running yarn jest received
        // --> ReferenceError: fib is not defined


// b) Create the function that makes the test pass.

    // The Fibonacci sequence is a set of integers (the Fibonacci numbers) that starts with a zero, followed by a one, then by another one, and then by a series of steadily increasing numbers. The sequence follows the rule that each number is equal to the sum of the preceding two numbers.
    // Create a function that if an 


    const fib = function(n) {
    if (n === 2) {
    return [1, 1];
    } else {
    const fibLength1 = fib(n - 1);
    fibLength1.push(fibLength1[fibLength1.length - 1] + fibLength1[fibLength1.length - 2]);
    return fibLength1;
    }
};

        // **It took a long time but i finally figured it out. At the very bottom is the passing test. 
    // function did not pass. The actual output did not equal the expected output. The output includes 7 elements instead of 6 and 11 elements instead of 10. Both arrays include a 0 and I could not figure out how to remove it. Tried .splice(), .pop() but no luck.
    // console.log(fib(fibLength1)); output --> [ 0, 1, 1, 2, 3, 5, 8 ]
            // Error received after running yarn jest
    // expect(received).toEqual(expected) // deep equality
    // - Expected  - 0
    // + Received  + 1
    // @@ -1,6 +1,7 @@
    // Array [
    // +   0,

    // after beating myself up for a VERY long time i found the problem. It's supposed to be a number greater than 2 however, i had 1. Also my return was [0,1] instead of [1,1]. Now output is correct --> [1,1,2,3,5,8]

    // after running yarn jest received
    // PASS  ./code-challenges.test.js
    // function
    // ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (3 ms)


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

    // const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    // const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]
    
    // Use 'describe ()', 'it ()' and 'expect ()' to test the syntax with jest.

    describe ("function", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]

    it ("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(final1).toEqual([-9, 7, 9, 199])
        expect(final2).toEqual([-823, 7, 23])
    })
    })
    
        // after running yarn jest received
        // --> ReferenceError: numsOnly is not defined


        // b) Create the function that makes the test pass.

    // Create a function (odds) that will filter out any even numbers and return only odd. If (n) is an even number it will produce a remainder 0 unlike odd numbers. However, it will also return all primitive value data types including strings and boolean which we do not want. We need only numbers type.
    // The function (numbsOnly) will filter through the output of (odds) and only return the number data types. However, they will not be in the correct order of least to greatest.
    // create a function (final) using .sort() and include a compare function (function(a, b){return a-b}) to receive the output in the correct order. The sort() method invoked without arguments sorts the elements alphabetically.
    // ** Without compare function (function(a, b){return a-b}), output --> [ 9, 7, 199, -9 ].
    // ** When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value. If the result is negative a is sorted before b. If the result is positive b is sorted before a. If the result is 0 no changes are done with the sort order of the two values.


    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

    const odds = fullArr1.filter(n => n % 2 !== 0)  
    const numsOnly1 = odds.filter(element => typeof element === "number")
    const final1 = numsOnly1.sort(function(a, b){return a-b})
    
    const odds2 = fullArr2.filter(n => n % 2 !== 0)
    const numsOnly2 = odds2.filter(element => typeof element === "number")
    const final2 = numsOnly2.sort(function(a, b){return a-b})

    // PASS  ./code-challenges.test.js
    // function
    // ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (2 ms)
    

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const numbersToAdd1 = [2, 4, 45, 9]
// // Expected output: [2, 6, 51, 60]
// const numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
// const numbersToAdd3 = []
// // Expected output: []

    describe ("function", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    // Expected output: [2, 6, 51, 60]
    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    const numbersToAdd3 = []
    // Expected output: []


    it ("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    expect(numbersToAdd1.map(sum1)).toEqual([2, 6, 51, 60])
    expect(numbersToAdd2.map(sum2)).toEqual([0, 7, -1, 11])
    expect(numbersToAdd3.map(sum3)).toEqual([])
    })
    })

        // after running yarn jest received
        // ReferenceError: sum1 is not defined

// b) Create the function that makes the test pass.

    // Use the addition assignment += which takes the value form the right of the operator and adds it to the variable on the left. 
    
    const numbersToAdd1 = [2, 4, 45, 9]
    const sum1 = (sum => value => sum += value)(0);
    const numbersToAdd2 = [0, 7, -8, 12]
    const sum2 = (sum => value => sum += value)(0);
    const numbersToAdd3 = []
    const sum3 = (sum => value => sum += value)(0);

    // PASS  ./code-challenges.test.js
    // function
    //   ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (2 ms)

    //Below is a one line console.log I found while researching
    // console.log(numbersToAdd1.map((sum => value => sum += value)(0)));
    // console.log(numbersToAdd2.map((sum => value => sum += value)(0)));