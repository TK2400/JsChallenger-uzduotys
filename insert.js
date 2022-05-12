// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string


// const a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

// a.reverse()
// a.reverse() //.splice(3, 0, '.')
// a.splice(7, 0, '.')
// a.splice(11, 0, '.')




// console.log(counter(a))


function myFunction(a, b) {
    let arr = a.split('').reverse()

    for (i = 3; i < arr.length; i += 4) {

        if (arr[i] !== undefined) {
            arr.splice(i, 0, b)

        }

    }
    return arr.reverse().join('')
}


// autoriaus sprendimas
function myFunction2(a, b) {
    let result = [];
    let rest = a;
    while (rest.length) {
        result.push(rest.slice(-3));
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b);
}







// function myFunction(a, b) {






console.log(myFunction('12345678954321', '.')) //'1.234.567'
console.log(myFunction('abcde', '$')) //'ab$cde'
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')) //'zwxyzwxyzwxyzwxyzwxyz'

console.log(myFunction2('12345678954321', '.')) //'1.234.567'
console.log(myFunction2('abcde', '$')) //'ab$cde'
console.log(myFunction2('zxyzxyzxyzxyzxyz', 'w')) //'zwxyzwxyzwxyzwxyzwxyz'



// // Write a function that takes a string as argument
// // As it is, the string has no meaning
// // Increment each letter to the next letter in the alphabet
// // Return the correct word
// // function
// // myFunction2(
// //     str
// // ) {

// //     return
// // }

// 'coding' / 'cheese' / 'testing'