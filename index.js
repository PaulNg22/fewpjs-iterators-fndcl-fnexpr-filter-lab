     
function findMatching(drivers,name) {
    return drivers.filter( function (value){
      return value.toLowerCase() === name.toLowerCase()
    })
  }
    console.log(findMatching('Susan'));

function fuzzyMatch (drivers,letter){
      return drivers.filter (function(value){
          return value.toLowerCase().indexOf(letter.toLowerCase())=== 0})
  
      }

function matchName(drivers, matchName) {
  return drivers.filter (function(value){
    value.name.toLowerCase()===matchName.toLowerCase()
  })
}

function matchName(drivers,matchName) {
  return drivers.filter (function(value){
    return value.name.toLowerCase()===matchName.toLowerCase()
  })
}

console.log(matchName("BoBby"));