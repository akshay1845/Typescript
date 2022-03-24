function users<T>(data:T):T{
    return data
}

console.log(users({name:'virat', age:32}))
console.log(users("String in Function"))
console.log(users(45.18))
console.log(users("Akshay is here"))
console.log(users({name:'Rohit', age:33}))
console.log(users(true))