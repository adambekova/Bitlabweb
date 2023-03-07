var abStr=prompt("Data name and surname and city and age separeted by space")
var abArray=abStr.split(' ')
var name=abArray[0]
var surname=abArray[1]
var city=abArray[2]
var age=abArray[3]

alert(`Name: ${name}` + '\n' + `Surname: ${surname}`+'\n' +`City: ${city}`+'\n'+`Age: ${age}`)
