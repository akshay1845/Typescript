/// <reference path="./Utils.ts" />

namespace UsersInfo{
    export class App extends Demo implements infoType{
        name:string = "Virat King Kohli";
        age:number = 15
        getName(): string{
            return this.name
        }
        setAge(age:number):void{
            this.age = age
        }
        getAge(): number{
            return this.age
        }
    }
}

let namespaceObj = new UsersInfo.App();
console.log("Before Name=> "+namespaceObj.getName())
console.log("Before Age => "+namespaceObj.getAge())


namespaceObj.setName("Ro hit man Sharma")
namespaceObj.setAge(22)

console.log("After Name => "+namespaceObj.getName())
console.log("After Age => "+namespaceObj.getAge())



