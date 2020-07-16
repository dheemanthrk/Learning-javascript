//version 1
// var ans = prompt("Are we there yet? ")
// while(ans!=="yeah" && ans!=="yes")
// {
//     var ans = prompt("Are we there yet? ")
// }
// alert("Yes we finally made it")

//version 2
var ans = prompt("Are we there yet? ")
while(ans.indexof("yes")!==-1)
{
    var ans = prompt("Are we there yet? ")
}
alert("Yes we finally made it")