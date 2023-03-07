
let users = [
    {"login":"ilyas", "password": "qwerty"},
    {"login":"eldar", "password": "qqqqq"},
    {"login":"assylkhan", "password": "qweqwe"},
    {"login":"anel", "password": "asdasd"},
    {"login":"alibek", "password": "aaaaaa"}
];
let x =prompt("Insert login and parol")
let arr=x.split(' ')
let login=arr[0]
let password=arr[1]

let userCanEnter=false
 for (let u of users){
    if(u.login===login && u.password===password){
        userCanEnter=true
alert ("Welcome, you are authenticated")
} break
    }

if (!userCanEnter){
    alert("User not found")
}

