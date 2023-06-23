//typescript basic types
let id:number = 6 //for numbers only
let comapny: string = 'hello' //this will store only string
let isValue: boolean = true //this will store boolean only
let x:any = 'ssss' // this can store any value 
let ids: number[] = [2,3,4,5] //this will only store numbers array
let arr: any[] = [1,2,'hello',true]// this can store any value in the array
//tuple
let person:[number,string,boolean]=[1,'ss',true] //this will store values and accept values on arrayh at the same spot
//tuple array
let employee:[number,string][] //this will create a type of array for the variable which can accept same type on the given spot
employee = [
    [1,'brad'],
    ['hello', 1] //wrong not accepted
]
//union 
let pid: string | number // this can store number or string
//enum
enum direction {
    up, //by default this starts from 0 we can change this to suit our side  
    down = 'down', 
    left,
    right
}
//objects
 type User = {
    id: number
    name:string
 }

 const user: User = {
    id:2,
    name:'john'
 }

 //type Assertion 
 let cid: any = 1
 let customerid = <number>cid // this is telling the compiler that customerid will be number not any

 //functions 
 function addnum(x:number,y:number):number{
    return x +y
 }
  function log(message: string | number): void{ //void means no value will be returned
    message = 1 
   
  }
// interfaces 
interface Userinterface {
    id: number
    name:string
    age?: number // ? for optional properties  
}
//a interface can only be used with defineing object
// on the other hand type can also be used with basic primatives while interface cant
const user1 : Userinterface ={
    id:1,
    name:"hello"
}
//we can use interfaces with functions also 
interface Mathfunc {
    (x: number,y:number):number
}
 const add: Mathfunc = (x:number,y:number):number =>x+y
 // classes

 class Person {
    id:number //we can public, private and protected
    name: string
    //constructor is a function which runs when class is intiated

    constructor(ud:number,name:string){
        this.id = id
        this.name = name
    }
 }
// class is use to create many objects with same class
 
const brad = new Person(1, 'brad')

//we can add interface to our classes also 
interface User1interface {
    id: number
    name:string
    register():string // we can declare functions in interfaces and theri return type 
}
class Person1 implements User1interface {
    id:number //we can public, private and protected
    name: string
    //constructor is a function which runs when class is intiated

    constructor(ud:number,name:string){
        this.id = id
        this.name = name
    }
    register(): string {
        return `${this.name} is now registered`
    }
 }
 // generics

 function getArray<T>(items:T[]):T[]{
    return new Array.concat(items)
 }
let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['bss','sss','ssss'])