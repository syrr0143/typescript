// let awesomename: string = "sumit yadav"
// let age: number = 25
// let ispaid: boolean = true
// let issubscribed: boolean = false

// console.log(awesomename, age.toPrecision(5), ispaid, issubscribed)

// let ans: boolean = ispaid || issubscribed;
// console.log(ans)

// let status: 'pending' | 'success' | ' error' = 'pending'
// status = ' error'
// console.log(status)

// let orderstatus: 'processing' | 'delivered' | 'shipped' | 'cancel' = 'processing'

// orderstatus = 'cancel'
// console.log(orderstatus)

// let primes: number[] = [10, 20, 30]
// console.log(primes)

// // lets discuss the object in typescript 
// type cartype = {
//     brand: string,
//     price: number,
//     mileage: number
// }
// let car: cartype = {
//     brand: 'toyota',
//     price: 2500,
//     mileage: 25
// }

// console.log(car.brand)

// interface student {
//     name: string,
//     age: number,
//     rollnumber: string,
//     readonly collgename: string,
//     branch: string
// }

// let sumityadav: student = {
//     name: 'sumit',
//     age: 25,
//     rollnumber: "2101202cs",
//     collgename: "IIIT BH",
//     branch: 'CSE'
// }
// console.log(sumityadav)
// console.log(sumityadav.name, sumityadav.collgename)

// type stringarray = string[];
// let newsarray: stringarray = ['2232', '545']
// console.log(newsarray[0])

// // ? represent the optional parameter which may or may not to be passed
// type message = {
//     sender: string,
//     receiver: string,
//     test: string,
//     length?: number

// }

// type conversation = message[]

// let chat: conversation = [
//     {
//         sender: "sumit",
//         receiver: 'rudresh patel',
//         test: "hellp",
//         length: 250
//     }, {
//         sender: "sumit",
//         receiver: 'rudresh patel',
//         test: "hellp",
//         length: 2500

//     }, {
//         sender: "sumit",
//         receiver: 'rudresh patel',
//         test: "hellp",
//         length: 25000

//     }
// ];

// console.log(chat.sort((a, b) => {
//     const lengtha = a.length ?? 0;
//     const lengthb = b.length ?? 0;
//     return lengthb - lengtha;
// }))


// chat.push({
//     sender: 'rahul',
//     receiver: "sonam",
//     test: 'hello hi',
//     length: 25000
// })
// console.log('new chat is ', chat.length, chat)

// type Loginuser = {
//     email: string, username: string,
//     password: string
// }

// const login = ({ email, username, password }: Loginuser): Loginuser => {
//     return { email, username, password };
// }
// login({ email: 'sfndnfd', password: 'dlknlkdn', username: 'kfnsdjfnds' });


// type add = {
//     a: number,
//     b: number,
// }
// const addition = ({ a, b }: add): string => {
//     return (a + b).toString();
// }
// console.log(typeof (addition({ a: 250, b: 250 })))

// type subtract = {
//     a: number,
//     b: number
// }
// const minus = ({ a, b }: subtract): string => {
//     return (a - b).toString();
// }
// type multiply = {
//     a: number, b: number
// }
// const guda = ({ a, b }: multiply): number => {
//     return (a * b);
// }

// console.log(minus({ a: 5, b: 15 }));
// console.log(guda({ a: 5, b: 15 }));


// const nameisinlist = (list: Array<string>, name: string): string => {
//     if (list.includes(name)) {
//         return "yes you are qualified"
//     }
//     return "better luck next time"
// }

// let nameslist = ["sumit", "rudy", "lokesh"]
// console.log(nameisinlist(nameslist, "lokesh"));

// const calculateprice = (price: number, discount?: number): number => {
//     const discounts = discount ?? 0;
//     return price - (price * discounts / 100);
// }


// const result = calculateprice(650, 50);
// const results = calculateprice(650);
// console.log(result)
// console.log(results)

// const logmesssage = (message: string): void => {
//     console.log(message)
// }
// logmesssage('hello there');

// console.log(typeof ("hello"))
// function process(input: string | number): void {
//     if (typeof (input) === "string") {
//         return console.log(input.toUpperCase)
//     }
//     else {
//         console.log(2 * input)
//     }
// }
// process("hello terethis is the process")

// type employee = {
//     id: string, name: string, age: number, address: string, salary: number, dept: string, companyname: string
// }
// const creteEmployeeid = (details: employee): employee => {
//     return details

// }

// console.log(creteEmployeeid({ id: "250", address: "mallupur", age: 25, companyname: "google", dept: "sde", name: "sumit yadav", salary: 6900000 }));

// const createStudent = (studentdeyails: student): student => {
//     return studentdeyails
// }

// const responseof = createStudent({ name: "sumit yadav", age: 25, branch: "cse", collgename: "iiitbh", rollnumber: "2101202" });
// console.log(responseof)

// interface computer {
//     readonly id: string,
//     version: number,
//     brand: string,
//     ram: number,
//     storage?: number,
// }

// const computerdetails = (details: computer): computer => {
//     return details
// }

// const responsecomputer = computerdetails({ brand: "dell", id: "dhdiusd", ram: 2156156, storage: 44655, version: 22 });

// console.log(responsecomputer)

import { sumitfunction, returnname } from "./actions";

interface Person {
    name: string;
    age: number;
    networth: number;
}

interface Employee extends Person {
    salary: number;
    experience: number;
}

interface manager extends Employee, Person {
    headdept: string,
    numberofworkerunder: number
}

// You don't need to use this approach, directly create the object instead
const sumit: Employee = {
    name: "sumit yadav",
    age: 25,
    networth: 32651561,
    salary: 11212142,
    experience: 25
};
const amit: manager = {
    name: "amit kumar",
    age: 28,
    networth: 42561561,
    salary: 14212142,
    experience: 30,
    headdept: "finance",
    numberofworkerunder: 20
}

console.log(sumit);
console.log(amit.numberofworkerunder);

//enums in typescript 

// type statusof = "failed" | "success";
enum serverstatus {
    success = "success", error = "error", pending = "pending", failed = "failed"
}


enum userrole {
    admin, manager, employee
}
interface serverresponse {
    result: serverstatus,
    data: string[],
    role?: userrole
}

const wait = (): serverresponse => {
    try {
        return {
            data: ["hello", "there"],
            result: "failed" as serverstatus,
            role: userrole.employee
        }
    } catch (error) {
        console.log((error as Error).message);
        return {
            data: [],
            result: "error" as serverstatus
        }
    }
}

const responses = wait();
console.log(responses)

const ressumit = sumitfunction("hello this is sumit function from actions");
console.log(ressumit)

const responsename = returnname("sumit yadav", 25);
console.log(responsename.name)