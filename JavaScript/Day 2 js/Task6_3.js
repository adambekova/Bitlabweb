let n=prompt("Please enter")
let number=prompt().split(" ")
let count=0;
let sum=0;
let sum2=0;

for (let i=0;i<n;i++){
    count=count+1
sum=sum+parseInt(number[i])
    
    }
    sum2=sum/count
 
console.log(sum +" " +sum2)