let s1 = Symbol()
let s2 = Symbol("Akshay from the Symbol")

console.log("s1 => " , s1)
console.log("s2 => " , s2)

let data={
    [s1]:"someData in object"
}

console.log(data[s1])

class Demo{
    function1(){
        return "Data in class"
    }
}

let obj = new Demo()
console.log(obj.function1())