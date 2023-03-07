let n=prompt('enter number')
let number=prompt().split(" ")
let numberToInteger=[]
for (let i=0;i<number.length;i++){
numberToInteger.push(number[i])
}let sum=1
for(let num of numberToInteger){
    if(num>0){
        sum=sum*num
    }
} alert(sum)