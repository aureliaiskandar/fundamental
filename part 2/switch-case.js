// switch case menerima keyword untuk dibandingkan (number/string)

const job = `Dokter`

switch(job){
  case 'Programmer':
    console.log('You make freat applicatins for code')
    break
    case 'Doctor':
    case 'Dokter':
      console.log('You heal the sick ones')
      break
      default:
        console.log('What do you do?')
}
