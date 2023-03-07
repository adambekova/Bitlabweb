
let array = []
let x
while (true) {
    x = parseInt(prompt())
    if (x == 0) {
        break
    } array.push(x)
} let sum = 1
for (let i = 0; i < array.length; i++) {
    sum = sum * array[i]
} alert(Math.pow(sum, 1 / array.length).toFixed(3));