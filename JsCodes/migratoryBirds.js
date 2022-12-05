
function migratoryBirds(arr=[]) {
  //new array order
  let counts ={}
  arr.forEach((value)=>{
    counts[value] = (counts[value] || 0) + 1
  });

  const maxVal = Math.max(...Object.values(counts))
  const num = Object.keys(counts).find((key)=>{
    return counts[key] === maxVal;
  })
  return num
}

console.log(migratoryBirds([1,2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))

