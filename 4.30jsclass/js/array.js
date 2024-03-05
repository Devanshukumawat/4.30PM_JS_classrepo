// const newArray = ["devanshu",78,67,true,"Manny"]

// console.log(newArray , typeof(newArray))

// const myArray = new Array("dev","kizie",89,67,45,false)

// console.log(myArray , typeof(myArray))

// const newArray = ["devanshu",78,67,true,"Manny"]

// let sizeOfarray = newArray.length

// console.log(sizeOfarray)


// let myArray = ["dev","manny","kizie","swastik",98,67]

// let myNewarray = myArray.toString()

// console.log(myNewarray , typeof(myNewarray))

// let myArray = ["dev","manny","kizie","swastik",98]

// let removeValue = myArray.pop()

// console.log(myArray , "Remove value :- ",removeValue)

// let myArray = ["dev","manny","kizie","swastik",98]

// myArray.pop()
// myArray.push("Aman")

// console.log(myArray)

// let myArray = ["dev","manny","kizie","swastik",98]

// let removeValue = myArray.shift()

// myArray.unshift("Devanshu")

// console.log(myArray , "Remove value :- ", removeValue)

// let myArray = ["dev","manny","kizie","swastik",98]

// let joinArray = myArray.join("+")

// console.log(joinArray , typeof(joinArray))


// let myArray = ["dev","manny","kizie","swastik",98]

// myArray[1] = 89

// console.log(myArray)

// let myArray = ["dev","manny","kizie","swastik",98]

// delete myArray[1]


// console.log(myArray)


// const firstArray = ["dev","manny","kizie","swastik",98]

// const secondArray = ["Aman","manish","Daisy",78]

// let myNewarray= firstArray.concat(secondArray)

// console.log(myNewarray)

// const firstArray = ["dev","manny","kizie","swastik",98]

// let cutArray = firstArray.slice(1,3)

// console.log(cutArray)

// const firstArray = ["dev","manny","kizie","swastik",98]

// console.log(firstArray)

// let removeItem = firstArray.splice(1,2,"Daisy","Aman")

// console.log("Remove items :- " , removeItem)
// console.log(firstArray)

// const firstArray = ["dev","manny","kizie","haha","swastik",98]

// let sortArray = firstArray.sort()

// console.log(sortArray)

// let myArray = ["dev","swastik","manny","Kizie"]

// console.log(myArray)

// myArray[1] = "Aman"

// console.log(myArray)

// let myArray = ["dev","swastik","manny","Kizie"]

// const secondArray = ["manny","Kizie"]

// let newArray = myArray.concat(secondArray)

// console.log(newArray)


// let myArray = ["dev","swastik","manny","Kizie"]

// let a = myArray.splice(2,2,"aman","ddev")

// console.log(myArray)


//  let myArray = ["dev","swastik","manny","Kizie"]

//  let a = myArray.slice(2)

//  console.log(a)


// let myArray = ["dev","swastik","manny","Kizie"]


// for(let i = 0; i<=5; i++){
//     console.log(i)
// }


// let myArray = ["Devanshu",98,true,"Aman","Manny"]

// for(let i = 0; i<myArray.length; i++){
//   console.log(myArray[i])
// }



// let myArray = ["Devanshu",89,56,34,"Dev","manny",true,false,"Kizie","hajhaj",718,516,728]

// let a= myArray[4]

// console.log(a)


// let myArray = ["Devanshu",89,56,34,"Dev","manny",true,false,"Kizie","hajhaj",718,516,728]

// for(let i = 0; i<myArray.length; i++){
//   console.log(myArray[i])
// }


// function myFn(){
//   let a = 10
//   console.log(a)
// }

// let b = "Devanshu"
// console.log(b)

// myFn()



// function helloFun(a,b){
//   let c = a+b
//   console.log(c)
// }

// helloFun(9,7)


// let myFn = function (a,b){
//   console.log(a*b)
// }

// myFn(8,8)


// let Fun = (a,b)=>{
//   console.log(a*b)
// }

// Fun(7,5)


// function myFun(a,b,c){
//   let d = a*b*c
//   console.log(d)
// }

// myFun(7,8,6)


// let myFun = function (){

// }


// let Myfn = ()=>{

// }



// function add(a,b){
//  let c =  a*b
//  return c
// }

// let myOut = add(8,9)

// let mySecond = add(8,8)

// console.log(myOut)
// console.log(mySecond)


// const myArray = ["Devanshu","Manny","Kizie","Aman",87,67]

// for(let i =0; i<myArray.length; i++){
//   console.log(myArray[i])
// }

// myArray.forEach((value,index)=>{
//   console.log(value+ " Index :- "+index)
// })

// function myFn(hello,num){
//   console.log(hello + "Index := "+num)
// }

// myArray.forEach(myFn)


// const myArray = ["Devanshu","Manny","Kizie","Aman",87,67]


// let myValue = myArray.forEach((value,index)=>{
//    return value
// })

// console.log(myValue)

// let myValue = myArray.map((value,index)=>{
//   return value
// })

// console.log(myArray)
// console.log(myValue)


// const myArray = ["Devanshu","Manny","aman",78,67]

// let a = myArray.forEach((value,index)=>{
//     return value
// })

// console.log(a)



// function MyFun(value,index){
//     return value
// }

// let b = myArray.map(MyFun)

// console.log(b);

// const myArray = [9,8,67,56,45,37,89,78]

// let myValue = myArray.filter((value,index)=>{
//     return value>40
// })

// console.log(myValue)

// const myArray = [1,2,3,4,5,6,7]

// let myValue = myArray.reduce((acc,value,index)=>{
//     console.log("Acc :- "+acc)
//     console.log("Value :- "+value)
//     return acc + value
// })

// console.log(myValue)

// const myArray = [1,2,3,4,5,6,7,"Devanshu"]


// for(let i =0; i<myArray.length; i++ ){
//     console.log(myArray[i])
// }

// let Student = {
//     name:"Devanshu",
//     class:12,
//     age:120,
//     rollNo:8765,
//     id:"hajaj789",
//     address:{
//         city:"jaipur",
//         pincode:"302020"
//     },
//     allDetailes:function (){
//         console.log("Student Name :- "+this.name + " Class :- "+this.class)
//     }
// }

// Student.allDetailes()

// let StudentName = Student.address.pincode
// console.log(StudentName)

// const {pincode,city} = Student.address

// console.log(pincode)
// console.log(city)


// console.log("Student Name :- "+Student.name + " Student Age :- "+Student.age)

// console.log(Student)

// console.log(this)

const {Example,Example2,Example3} = require ("../modules/fun1")


console.log(Example(8,2))
console.log(Example2(8,6))
console.log(Example3(6,4))


































