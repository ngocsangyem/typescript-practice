// let
let myName: string = 'Sang';
console.log(myName);
myName = 'Dao';
console.log(myName);

// const
const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Errors

// DEFAULT PARAMETERS

const countDown = (start: number = 10): void => {
    while (start > 0) {
        start--;
    }
    console.log('DONE!', start);
};

countDown();

// Rest and Spread

const numbers: number[] = [-2, 100, 99, 1];
console.log(Math.max(...numbers));

const getNumbersArray = (...args: number[]): number[] => args;

console.log(getNumbersArray(1, 2, 3, 4));

// Destructuring array
const hobbies = ['Cooking', 'Sports'];
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);

// Destructuring object
const userData = { userName: 'Sang', userAge: 21 };

const { userName: myNamee, userAge: myAge } = userData;
