let usersArray = [
    { number1: '1234', number2: '1234', number3: '1234', number4: '1234', code: '123' }
]

let cardField1=myform.elements.number1
let cardField2=myform.elements.number2
let cardField3=myform.elements.number3
let cardField4=myform.elements.number4
let cvvField = myform.elements.code


function checkUser() {
        let authenticated = false

        for (let u of usersArray) {

            if (cardField1.value == u.number1 && 
                cardField2.value == u.number2 && 
                cardField3.value == u.number3 && 
                cardField4.value == u.number4 && 
                cvvField.value == u.code) {
                alert("Transaction completed")
                authenticated = true
                break;
            }
        }
        if (authenticated == false) {
            alert("Invalid data")
        }
    }
