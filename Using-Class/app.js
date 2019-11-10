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
