let userArray;
if (localStorage.getItem('users_data') == null) {
    userArray = []
} else {
    let json_data = localStorage.getItem('users_data');
    userArray = JSON.parse(json_data)
}

function registration() {
    let obj = {}
    obj.email = email.value
    obj.password = password.value
    obj.fullname = fullname.value
    obj.country = country.value
    obj.birth = birth.value
    userArray.push(obj)

    let json = JSON.stringify(userArray)
    localStorage.setItem("users_data", json)
    document.location.href = "Login.html"
}
function login() {
    document.location.href = "Login.html"
}
function signIn() {
    let json_data = localStorage.getItem("users_data")
    let data = JSON.parse(json_data)
    let authentifacation = true

    for (let obj of data) {
        if (login_email.value == obj.email && login_password.value == obj.password) {
            document.location.href = "Welcome.html"
            localStorage.setItem("mama", JSON.stringify(obj))
            authentifacation = false
            break
        }
    }
}
    if (!authentifacation) {
        alert("Who are you?")
    }








