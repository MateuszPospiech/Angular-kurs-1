class ClassInterface {

    msg: string = "hello";

    constructor(msg?:string) {

    }

    printMsg() {
        console.log(this.msg);
    }

}
let example4 = new ClassInterface('Witaj świecie');
example4.printMsg();

interface Dog {
    name: string;
    age: number;
    color: string;
    date?: Date;
}

let dog: Dog = ({
    name: 'Reksio',
    age: 3,
    color: 'Szary'
});

console.log(dog);
console.log(dog.name);

let json = '{ "name": "Max", "age": 4, "color": "red", "date": "2019-01-12" }';
let myDog: Dog = JSON.parse(json);
console.log(myDog);
