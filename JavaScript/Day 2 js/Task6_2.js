let n = prompt("Please enter")
let number = prompt().split(" ")
let max = number[0];
for (let i = 0; i < n; i++) {
    if (number[i] > max) {
        max = number[i]
    }
} 
console.log(max)

