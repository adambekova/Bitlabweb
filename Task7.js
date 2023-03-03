var abStr=prompt("Insert a and b")
var abArray=abStr.split(' ')
var a=parseInt(abArray[0])
var b=parseInt(abArray[1])

if(b/a<=135/60){
    alert ("YES, YOU CAN REACH")
}
else {
    alert ("NO, YOU CAN NOT REACH")
}