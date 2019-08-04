// function statement

//function statement pada runtime akan di naikkin ke atas
//sehingga aman digunakan bahwa sebelum deklarasi
//istilah ini disebut "hoisting"
//function greet () {
//  const name = `Alven`
//  console.log(`hello ${name}`)
//}

//function parameter
function greet (name = `stranger`) {
console.log(`hello ${name}`)
}

function alertuser () {
  console.log (`Danger alert`)
}

//function expression

//function expression harus dideklarasi dulu sebelum dipakai

const growl = function () {
  console.log(`meong`)
}

growl()

// ketika user baru masuk
greet(`alven`)
greet(`riko`)
greet (`Ahmed`)
greet()

//ketika user melakukan kesalahan
alertuser()


//function return value

//return value membuat function "menghasilkan value" ketika dijalankan
const eat= function (foodName) {
  console.log (`I am eating ${foodName}`)
  //by default function akan return undefined
  //return undefined
}
const hasilFunction =eat(`bimbimbap`)
console.log(hasilFunction) // undefined


const getSpecialNumber = function () {
  return 888
}

const number = getSpecialNumber ()
console.log (number)
console.log (number + 20)

eat(getSpecialNumber())



//settimeout ada 2 parameter 
// parameter 1: function yg mau dijalankan
//parameter 2: waktu delay (dalam ms) - 1000 ms = 1 s

//cara 1
function printTulisan() {
  console.log(`kamu sudah menunggu 3 detik`)
}

setTimeout(printTulisan,3000)

//cara 2
setTimeout(function (){
  console.log(`test`)
}
,2000)

// control c to stop ongoing functions
//setInterval
const interval = setInterval(function(){
  console.log(`1 detik sudah berlalu`)
}
,1000)

// challenge : setinterval jalanin 3 kali
function stop(){
  clearInterval(interval)
}

setTimeout(stop,3100)