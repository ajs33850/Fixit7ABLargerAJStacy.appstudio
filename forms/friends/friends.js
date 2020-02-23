var friendNames = [
prompt("Enter the name of your first of three friends."),
prompt("Enter the name of your second of three friends."),
prompt("Enter the name of your third of three friends.")
] ;
let best = prompt("Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third")

let firstFriend = friendNames[0]
let secondFriend = friendNames[1]
let thirdFriend = friendNames[2]
let bestFriend = friendNames[best - 1]

if (bestFriend.charAt(0) == "A")
   alert("Your best friends' name starts with A.")
else if (bestFriend.charAt(0) == "B")
   alert("Your best friends' name starts with B.")
else 
   alert("Your name starts with something other than A or B.")


