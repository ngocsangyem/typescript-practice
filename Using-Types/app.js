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
