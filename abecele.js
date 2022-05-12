// // Write a function that takes a string as argument
// // As it is, the string has no meaning
// // Increment each letter to the next letter in the alphabet
// // Return the correct word

// myFunction('bnchmf')

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let arr = ['b', 'n', 'c', 'f', 'h', 'm', 'f']
const newIndex = alphabet.indexOf('b') + 1
console.log(newIndex)
let newArr = arr.splice(0, 1, newIndex)
console.log(newArr)


// function myFunction(a) {
//     let arr = a.split('')
//     for (let i = 0; i < arr.length; i++) {
//         const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//         arr.splice(i, 1, alphabet.indexOf('i'))
//     }
//     return arr
// }





// 'coding' / 'cheese' / 'testing'
// myFunction('bnchmf')
// Expected
// 'coding'
// myFunction('bgddrd')
// Expected
// 'cheese'
// myFunction('sdrshmf')