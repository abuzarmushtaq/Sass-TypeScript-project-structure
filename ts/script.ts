

class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

var cow = new Animal('Cew',12);

alert(`Name: ${cow.name}\nAge: ${cow.age}`);