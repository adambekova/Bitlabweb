let users = [
    { "name": "Harry Potter and the Philosopher's Stone", "avtor": "Joanne Rowling", "ISBN": "1233123", "price": "50$" },
    { "name": "Harry Potter and the Chamber of Secrets", "avtor": "Joanne Rowling", "ISBN": "222332", "price": "40$" },
    { "name": "Harry Potter and the Prisoner of Azkaban", "avtor": "Almas", "ISBN": "452323", "price": "55$" },
];

let avtor = prompt("enter avtor")

let avCanEnter = false
for (let u of users) {
    if (u.avtor === avtor) {
        avCanEnter = true
        alert(u.name + "-" + u.avtor + "-" + u.ISBN + "-" + u.price)
        break
    } 
}
if (!avCanEnter) {
    alert("Demal")
}


