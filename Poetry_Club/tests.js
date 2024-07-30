let phrase = 'sophia'


function frontDoorResponse(line) {
  return line.charAt(0)
}



// 
// console.log(frontDoorResponse(phrase))

function formatStrings(str){
  if(str.charAt(0)==str.charAt(0).toUpperCase()){
    return str.charAt(0) + str.slice(1).toLowerCase()
  }else{
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
}


function frontDoorPassword(word) {
  return formatStrings(word)
}

console.log(frontDoorPassword(phrase))