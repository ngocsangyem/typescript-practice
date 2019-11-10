class Person {
    name: string;
    private age: number = 21;
    protected type: string;

    constructor(name: string, public fakeName: string) {
        this.name = name;
    }

    printAge(): void {
        console.log(this.age);
    }

    setType(type: string): void {
        this.type = type;
        console.log(this.type);
    }
}

// const myName = new Person('sang', 'sangsang');

// console.log(myName.name, myName.fakeName);
// myName.printAge();
// myName.setType('Handsome Sang');

// Inheritance

class Sang extends Person {
    // name = 'Sang';

    constructor(fakeName: string) {
        super('Sang', fakeName);
    }
}

const sang = new Sang('oke');
console.log(sang);

// Getters and Setters

class Plant {
    private _species: string = 'Default';
    constructor() {}

    public set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Blue plant';
        }
    }

    public get species(): string {
        return this._species;
    }
}

const plant = new Plant();

console.log(plant.species);
plant.species = 'Oke';
console.log(plant.species);
plant.species = 'Oke chua';
console.log(plant.species);
