const sentence = 'Ibu pergi beli semangka ke pasar'

// //length of sentence

console.log (sentence.length)

// //index of substring
console.log (sentence.indexOf('semangka'))

//substring index from one point to another
console.log(sentence.substring(4, 20))

//substring index without numbers
console.log(sentence.substring(sentence.indexOf('beli'),sentence.length))

//slice string
console.log(sentence.slice(5,8))

//includes
console.log(sentence.includes('Ibu'))

//split
console.log(sentence.split('p'))

//transforming to capital letters
console.log(sentence.toUpperCase())

//transforming to small letters
console.log(sentence.toLowerCase())

//changin number to string
const angka = 123456
angka,toString()

//type coercion = string + number
console.log('Ibu memiliki angka '+  angka)

//changing string to number
const numberString = '123456'
console.log(parseInt(numberString))

// '123' + '456' = '579'
const x = '123'
const y = '456'
const xInt = parseInt(x)
const yInt = parseInt(y)
const result =(xInt + yInt).toString()
console.log(result)
