let fruit = ['Apple', 'orange', 'mango']
console.log(fruit)
for(let x in fruit){

}
for(let x of fruit){
    console.log(x)
}
fruit.splice(1,1)
console.log(fruit)

fruit.splice(2,0,'cherry','lemon')
console.log(fruit)


let arr = fruit.slice(1,4)
console.log(arr)

let str="how are you my buddy,money"
let spl=str.split(' ')
for(let x of spl){

}
