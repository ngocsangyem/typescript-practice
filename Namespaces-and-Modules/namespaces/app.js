var Mymath;
(function (Mymath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calcCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calcCircumference = calcCircumference;
    })(Circle = Mymath.Circle || (Mymath.Circle = {}));
    // const PI = 3.14;
    // export function calcCircumference(diameter: number): number {
    //     return diameter * PI;
    // }
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
// console.log(Mymath.calcCircumference(10));
console.log(Mymath.Circle.calcCircumference(10));
console.log(Mymath.calcReactangle(10, 40));
