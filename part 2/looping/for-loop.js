//we use i variable naming for iteration
//for(let i = 0; i < 10; i++){
 // console.log(`${i+1}.hello world`)
//}

//challenge:
//print angka
//2, 4, 6, 8, 10, 12, 14 16, 18, 20

for(let i = 2; i <= 20; i+=2){
  console.log(`${i}.hello world`)
}

console.log(`\n\n\n\n`)

//loop drawing
let stars= ``
for (let i=0; i < 5; i++){
  stars += `*\n`}
console.log(stars)


//nested if
//for (let i=0; i < 3; i++){
 // for (let j=0; j < 5; j++){
    //console.log(`this is nested if`)
  //}
//}

console.log(`\n\n\n\n`)

let box = ``
// j horizontal
//i vertical
for(let i=0; i<5; i++){
  for(let j= 0; j < 5; j++){
    box += `*`
  }
  box += `\n`
}
console.log(box)

console.log(`\n\n\n\n`)

let triangle = ``
for(let i=0; i<5; i++){
  for(let j= 0; j <= i; j++){
    triangle += `*`
  }
  triangle += `\n`
}
console.log(triangle)



let down = ``
for(let i=0; i<5; i++){
  for(let j= 5; j > i; j--){
    down += `*`
  }
  down += `\n`
}
console.log(down)



