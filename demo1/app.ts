export {}; //remove  Duplicate Identifier issue

let a = "Hello Typescript";
console.log("a => " + a);

class App {
  display() {
    console.log("Inside Class Function!!!");
  }
}

let obj = new App();
obj.display();

//typescript types
let num: number = 18;
console.log("num = " + num);

let str: String = "15";
console.log("string = " + str);

//array
let data = ["Akshay", "Virat", 18, true];
data.push(18.5);
data[2] = "Rohit";
data.push(false);
console.log("random array=>" + data);

let data1: number[] = [15, 20, 45, 78, 12.5, 40];
// data1.push("Akshay")     datatype mustbe number
console.log("number array => " + data1);

let data2: string[] = ["Rahul", "Bumrah", "Jadeja"];
data2.push("Akshay");
// data2.push(12)    will give an error
console.log("String  array => " + data2);

//objects
let obj1 = {
  name: "Akshay",
  age: 20,
  address: "Rajkot",
};

// obj1.age = "15"
obj1.age = 21;

console.log("1st object => " + JSON.stringify(obj1));

//Interface
interface usersTyped {
  name: string;
  age: number;
  address: string;
  cricket: boolean;
}
let obj2: usersTyped = {
  name: "Virat Kohli",
  age: 32,
  address: "Delhi",
  cricket: true,
};
console.log("2nd object" + JSON.stringify(obj2));
obj2.name = "Cristiano Ronaldo";
//  obj2.cricket = "no"
obj2.cricket = false;
console.log("2nd object After Update" + JSON.stringify(obj2));


let obj3: any = {
  name: "Rohit Sharma",
  age: 33,
  address: "Mumbai",
  cricket: true,
};
console.log("3rd object" + JSON.stringify(obj3));
obj3.name = "Lionel Messi";
obj3.age = "I don't want to say";
obj3.cricket = "no"
console.log("3rd object After Update" + JSON.stringify(obj3));

//union types
let uni_data : String  = "This is Union" 
let uni_num : number | String = 50
console.log("data = " + uni_data + ", number = " + uni_num)

uni_num = "5000"
console.log("After Update,  number = "+ uni_num)

//function
function add(x:number, y?:number) : number{
    return y? x+y : x
}

console.log("addition="+ add(10,30))

class App1{
    name:string = "Akshay Gadher"
    // constructor(name:string){
    //     this.name = name
    // }
    getName():string{
        return this.name
    }
}
let o1 = new App1() 
console.log("Name in  Class App1=> " + o1.getName())

//Inheritence
class Super{
  name : string;
  setName(name:string) : void{
    this.name = name;
  }
}

class Sub extends Super{

  getName() : String{
    return this.name
  }
}

let s1 = new Sub()
s1.setName("Chirag Gadher");
console.log("Inherited Data => Name = " + s1.getName())


