'use strict'

//HelloWorld

function HelloWorld(arr=[]){
  for(let index=0; index<arr.length; index+=1){
    if(arr[index] ===10){
      return 'Hello World'
    }
    else{
      return 'try again'
    }
  }
}

console.log(HelloWorld([1,2,3,5]))

// remember the length property?
// then add numbers to the array
// one of them might result in a "hello world".