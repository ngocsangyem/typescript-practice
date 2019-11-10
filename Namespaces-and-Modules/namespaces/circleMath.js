var Mymath;
(function (Mymath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    Mymath.calcCircumference = calcCircumference;
})(Mymath || (Mymath = {}));
