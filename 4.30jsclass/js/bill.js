let prompt = require("prompt-sync")()


let Item = prompt("Enter Item :- ")
let Price = prompt("Enter Item Price :- ")
let Quantity = prompt("Enter Quantity :- ")


let discount = 10
let gst = 20;

Bill = Price*Quantity

Bill_discount = Bill*discount/100

Total_Bill = Bill-Bill_discount

Bill_gst = Total_Bill*gst/100

final_Bill = Total_Bill+Bill_gst

console.log("Item :-"+ Item)
console.log("Item Price :- "+Price)
console.log("Item Quantity :- "+Quantity)
console.log("Bill :- "+Bill)
console.log("Bill_Discount :- "+Bill_discount)
console.log("Total_bill :- "+Total_Bill)
console.log("Bill_gst :- "+Bill_gst)
console.log("Final_bill :- "+ final_Bill)

console.log(`You have to pay ${final_Bill} \u20B9 for ${Quantity}-${Item}`)


