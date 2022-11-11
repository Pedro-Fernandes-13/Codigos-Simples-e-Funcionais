function gradingStudents(grades=[]) {
  // Write your code here
  let nums = []
  let numRound;
  for(let i =0; i<grades.length; i++){
    numRound = Math.ceil(grades[i] / 5) * 5
    if(numRound - grades[i] <=2){
      if(grades[i] >= 38){
          grades[i] = numRound
    }
    
    }
    nums.push(grades[i])
  }
  return nums
}
console.log(gradingStudents([73,67,38,33]))