// let
var myName = 'Sang';
console.log(myName);
myName = 'Dao';
console.log(myName);
// const
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Errors
// DEFAULT PARAMETERS
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('DONE!', start);
};
countDown();
// Rest and Spread
var numbers = [-2, 100, 99, 1];
console.log(Math.max.apply(Math, numbers));
var getNumbersArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
console.log(getNumbersArray(1, 2, 3, 4));
// Destructuring array
var hobbies = ['Cooking', 'Sports'];
var hobby1 = hobbies[0], hobby2 = hobbies[1];
console.log(hobby1, hobby2);
// Destructuring object
var userData = { userName: 'Sang', userAge: 21 };
var myNamee = userData.userName, myAge = userData.userAge;
