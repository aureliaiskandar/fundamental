const x = 5
const y = 3

console.log(x+y)
console.log(x-y)
console.log(x/y)
console.log(x*y)
console.log(x%y)

let number = 5

//increment ++
number++
console.log(number)
//decrement --
number--
console.log(number)

//number = number + 5
number += 5
console.log(number)


//Basic Math Objects

//PI
console.log(Math.PI)

//absolute value
console.log(Math.abs(-9.43))

//power ( 2 to the power of 4)
console.log(Math.pow(2, 4))

//squareroot - akar pangkat 2
console.log(Math.sqrt(81))

//cubicleroot - akar pangkat 3
console.log(Math.cbrt(27))

//count a circle if its radius is 28
const r = 28
console.log((Math.PI)*(Math.pow(r, 2)))

//rounding
console.log(Math.round(12.6))
console.log(Math.floor(12.6))
console.log(Math.ceil(12.6))

// max and min
console.log(Math.max(54, 67, 99, 100))
console.log(Math.min(54, 67, 99, 100))

//random
console.log(Math.random())

//random number between 1-10
const randomNUm = Math.ceil(Math.random()*10)
console.log(randomNUm)