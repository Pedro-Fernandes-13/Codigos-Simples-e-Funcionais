function bingo(arr){
  let vetor = [
    Math.round(Math.random()*10),
    Math.round(Math.random()*10),
    Math.round(Math.random()*10),
    Math.round(Math.random()*10),
  ]
  let count =0;

  for(let index =0; index<vetor.length; index +=1){
    for(let num =0; num<arr.length; num +=1){
      if(vetor[index]===arr[num]){
        count +=1
      }
      if(count >= 2){
        return 'congratulations you got ' + count + ' numbers right'
      }
    }
  }
  return 'you hit '+ count +' bingo numbers'
}

console.log(bingo([2,3,4,5]))
//match at least 2 bingo numbers