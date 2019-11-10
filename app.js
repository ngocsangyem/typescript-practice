var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mymath;
(function (Mymath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    Mymath.calcCircumference = calcCircumference;
})(Mymath || (Mymath = {}));
var Mymath;
(function (Mymath) {
    function calcReactangle(width, length) {
        return width * length;
    }
    Mymath.calcReactangle = calcReactangle;
})(Mymath || (Mymath = {}));
/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>
var PI = 2.14;
console.log('TCL: PI', PI);
console.log(Mymath.calcCircumference(10));
console.log(Mymath.calcReactangle(10, 40));
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
var Person = /** @class */ (function () {
    function Person(name, fakeName) {
        this.fakeName = fakeName;
        this.age = 21;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
// const myName = new Person('sang', 'sangsang');
// console.log(myName.name, myName.fakeName);
// myName.printAge();
// myName.setType('Handsome Sang');
// Inheritance
var Sang = /** @class */ (function (_super) {
    __extends(Sang, _super);
    // name = 'Sang';
    function Sang(fakeName) {
        return _super.call(this, 'Sang', fakeName) || this;
    }
    return Sang;
}(Person));
var sang = new Sang('oke');
console.log(sang);
// Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Blue plant';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'Oke';
console.log(plant.species);
plant.species = 'Oke chua';
console.log(plant.species);
// String
var myName = ' Sang';
// Numbers
var myNumber = 21;
var myFloatNumber = 21.5;
// Boolean
var hasHobbies = true;
// Array
var hobbies = ['Soccer', 'Football', 'Volleyball'];
var arrayWithAnyTypes = [23, 'Jack', 24];
var ages = [21, 23, 24];
// Tuples
var address = ['Dang Nghiem', 24];
// Enum
// enum Colors {
//     Red, // 0
//     Green, // 1
//     Blue // 2
// }
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue"; // 101
})(Colors || (Colors = {}));
var myColor = Colors.Blue;
console.log('myColor ', myColor);
// Functions
function returnMyName() {
    return myName;
}
console.log('returnMyName: ', returnMyName());
// void
function sayHello() {
    console.log('hello world');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log('multiply: ', multiply(2, 2));
// Funtion types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(10, 20));
// Objects
var userData = {
    name: 'Sang',
    age: 21
};
// Complex object
var complex = {
    data: [2, 10, 15, 20],
    output: function (all) {
        return this.data;
    }
};
var complex1 = {
    data: [2, 300, 4],
    output: function (all) {
        return this.data;
    }
};
// Union type
var myRealAge = 27;
// Nullable type
