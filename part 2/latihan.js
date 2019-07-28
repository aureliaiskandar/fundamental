const massa = prompt(`what is your mass?`)
const tinggi = prompt(`what is your height?`)
const tinggi2= Math.pow(tinggi,2)
const IMT = massa/tinggi2

if (IMT < 18.5){
  alert(`berat badan kurang`)
} else if (IMT >= 18.5 && IMT <= 24.9){
  alert(`berat badan ideal`)
} else if (IMT >= 25 && IMT <= 29.9){
  alert( `BB Berlebih`)
} else if (IMT >= 30 && IMT <= 39.9){
  alert(`BB sangat berlebih`)
} else if (IMT > 39.9)
alert(`obesitas`)

