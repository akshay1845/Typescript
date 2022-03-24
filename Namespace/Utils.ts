namespace UsersInfo{
    export class Demo{
        name:string;
        setName(name:string):void{
            this.name= name
        }
    }

    export interface infoType{
        getName():string
        setAge(age:number):void
    }
}