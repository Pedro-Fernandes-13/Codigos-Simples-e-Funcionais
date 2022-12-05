
function miniMaxsum(arr=[]){
  let max = arr[0]
  let min = arr[0]
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    if(max<arr[i]){
      max = arr[i]
    }
    if(min>arr[i]){
      min = arr[i];
    }
    sum += arr[i]
  }
  let maxSum = sum -min;
  let minSun = sum - max;
  console.log(minSun,maxSum)
}
miniMaxsum([1,2,3,4,5])