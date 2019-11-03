// String
let myName: string = ' Sang';

// Numbers
let myNumber: number = 21;
let myFloatNumber: number = 21.5;

// Boolean
let hasHobbies: boolean = true;

// Array
let hobbies: string[] = ['Soccer', 'Football', 'Volleyball'];
let arrayWithAnyTypes: any[] = [23, 'Jack', 24];
let ages: number[] = [21, 23, 24];

// Tuples
let address: [string, number] = ['Dang Nghiem', 24];

// Enum
// enum Colors {
//     Red, // 0
//     Green, // 1
//     Blue // 2
// }
enum Colors {
    Red, // 0
    Green = 100, // 100
    Blue // 101
}

let myColor: Colors = Colors.Blue;
console.log('myColor ', myColor);

// Functions
function returnMyName(): string {
    return myName;
}
console.log('returnMyName: ', returnMyName());

// void
function sayHello(): void {
    console.log('hello world');
}

// argument types

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log('multiply: ', multiply(2, 2));

// Funtion types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(10, 20));

// Objects
let userData: { name: string; age: number } = {
    name: 'Sang',
    age: 21
};
// Complex object

let complex: { data: number[]; output: (all: boolean) => number[] } = {
    data: [2, 10, 15, 20],
    output: function(all: boolean) {
        return this.data;
    }
};

// Custom type with alias

type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex1: Complex = {
    data: [2, 300, 4],
    output: function(all: boolean) {
        return this.data;
    }
};

// Union type

let myRealAge: number | string = 27;

// Nullable type
