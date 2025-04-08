class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get age() {
        return this.#age;
    }
    greet() {
        console.log(
            `Hello, my name is ${this.#name} and I am ${this.#age} years old.`,
        );
    }
}
const barbara = new Person("Barbara", 15);
const anton = new Person("Anton", 16);
barbara.greet();
anton.greet();
console.log(`Gemeinsames Alter: ${barbara.age + anton.age}`);





