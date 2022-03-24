enum Names{
    akshay,chirag,darshak,smit,nikunj
}

let info:Names;
info = Names.akshay

function test(name:Names){
    return name
}

console.log(info)

console.log(test(Names.darshak))