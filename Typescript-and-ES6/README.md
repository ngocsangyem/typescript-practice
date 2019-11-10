# Typescript and ES6

## "Var" and "Let" and "Const"

**let**

`let` tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó, khác với var - tạo ra một biến có phạm vi truy cập xuyên suốt `function` chứa nó.

Ví dụ:

-   `var`:

```javascript
function foo() {
    var x = 10;
    if (true) {
        var x = 20; // x ở đây cũng là x ở trên
        console.log(x); // in ra 20
    }
    console.log(x); // vẫn là 20
}
```

-   `let`

```javascript
function foo() {
    let x = 10;
    if (true) {
        let x = 20; // x này là x khác rồi đấy
        console.log(x); // in ra 20
    }
    console.log(x); // in ra 10
}
```

Ngoài ra, khi ở global scope (tức là không nằm trong một function nào cả), từ khóa `var` tạo ra thuộc tính mới cho global object (this), còn `let` thì không:

```javascript
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

```typescript
let myName: string = 'Sang';
console.log(myName); // Sang

myName = 'Dao';
console.log(myName); // Dao
```

**const**

`const` dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.

```typescript
// const
const maxLevels = 100;
console.log(maxLevels); // 100
maxLevels = 99; // Uncaught TypeError: Assignment to constant variable
```

## Arrow function

Normal function:

```typescript
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10, 3)); // 13
```

Arrow function:

```typescript
const multiplyNumbers = (number1: number, number2: number): number => {
    number1 * number2;
};
console.log(multiplyNumbers(10, 3)); // 30
```

## Default parameters

```typescript
const countDown = (start: number = 10): void => {
    while (start > 0) {
        start--;
    }
    console.log('DONE!', start);
};

countDown();
```

## Rest and Spread

`Spread`

```typescript
const numbers: number[] = [-2, 100, 99, 1];
console.log(Math.max(...numbers)); // 100
```

`Rest`

```typescript
const getNumbersArray = (...args: number[]): number[] => args;
console.log(getNumbersArray(1, 2, 3, 4)); // [1, 2, 3, 4]
```

### Rest Parameters & Tuples

Since TypeScript 3, you can also use tuples as types for rest expressions.

For example, these two function signatures are equal:

```typescript
function printInfo(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
```

```typescript
function printInfo(...info: [string, number]) {
    console.log(
        'My name is ' + info[0] + ' and I am ' + info[1] + ' years old!'
    );
}
```

## Destructuring array

```typescript
const hobbies = ['Cooking', 'Sports'];
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2); // Cooking Sports
```

## Destructuring object

```typescript
const userData = { userName: 'Sang', userAge: 21 };

const { userName, userAge } = userData;
console.log(userName, userAge); // Sang 21

// With alias

const { userName: myNamee, userAge: myAge } = userData;
console.log(myNamee, myAge); // Sang 21
```
