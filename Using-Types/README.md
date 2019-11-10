# Using Types

## String

```typescript
let myName: string = ' Sang'; // Sang
```

## Numbers

```typescript
let myNumber: number = 21; // 21
let myFloatNumber: number = 21.5; // 21.5
```

## Boolean

```typescript
let hasHobbies: boolean = true; // true
```

## Array

```typescript
let hobbies: string[] = ['Soccer', 'Football', 'Volleyball']; // ['Soccer', 'Football', 'Volleyball']
let arrayWithAnyTypes: any[] = [23, 'Jack', 24]; // [23, 'Jack', 24]
let ages: number[] = [21, 23, 24]; // [21, 23, 24]
```

## Tuples

Like array but need to follow types in array

```typescript
let address: [string, number] = ['Dang Nghiem', 24]; // ['Dang Nghiem', 24]

let address: [string, number] = [24, 'Dang Nghiem']; // Compile error
```

## Enum

```typescript
enum Colors {
    Red, // 0
    Green, // 1
    Blue // 2
}

let myColor: Colors = Colors.Blue;
console.log('myColor: ', myColor); // myColor: 2
```

Can change number of Enum

```typescript
enum Colors {
    Red, // 0
    Green = 100, // 100
    Blue // 101
}

let myColorGreen: Colors = Colors.Blue;
let myColorBlue: Colors = Colors.Blue;

console.log('myColor: ', myColorGreen); // myColor: 100
console.log('myColor: ', myColorBlue); // myColor: 101
```

## Functions

With return a type:

```typescript
function returnMyName(): string {
    return myName;
}
console.log('returnMyName: ', returnMyName()); // returnMyName: Sang
```

With no return

```typescript
function sayHello(): void {
    console.log('hello world');
}
sayHello(); // hello world
```

Argument types:

```typescript
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log('multiply: ', multiply(2, 2)); // multiply: 4
```

Funtion types:

-   Without type:

```typescript
let myMultiply;
myMultiply = sayHello;
myMultiply(); // hello world
myMultiply = multiply;
console.log(myMultiply(10, 20)); // 200
```

-   With type:

```typescript
let myMultiply: (a: number, b: number) => number;
myMultiply = sayHello; // Compile error
myMultiply(); // Compile error
myMultiply = multiply;
console.log(myMultiply(10, 20)); // 200
```

## Object

```typescript
let userData: { name: string; age: number } = {
    name: 'Sang',
    age: 21
};
// {"name": "Sang", "age": 21}
```

Example:

```typescript
let complex: { data: number[]; output: (all: boolean) => number[] } = {
    data: [2, 10, 15, 20],
    output: function(all: boolean) {
        return this.data;
    }
};
```

Custom type with alias:

```typescript
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex1: Complex = {
    data: [2, 300, 4],
    output: function(all: boolean) {
        return this.data;
    }
};
```

## Allowing multiple Types with Union Types

```typescript
let myRealAge: number | string = 27;
```

## Never

```typescript
function neverReturn(): never {
    throw new Error('An error!');
}
```

## Nullable type

setting up with:

```object
{
	"CompilerOptions": {
		"strictNullCkecks": false
	}
}
```
