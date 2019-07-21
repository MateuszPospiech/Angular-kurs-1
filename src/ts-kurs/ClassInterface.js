var ClassInterface = /** @class */ (function () {
    function ClassInterface(msg) {
        this.msg = "hello";
    }
    ClassInterface.prototype.printMsg = function () {
        console.log(this.msg);
    };
    return ClassInterface;
}());
var example4 = new ClassInterface('Witaj świecie');
example4.printMsg();
var dog = ({
    name: 'Reksio',
    age: 3,
    color: 'Szary'
});
console.log(dog);
console.log(dog.name);
var json = '{ "name": "Max", "age": 4, "color": "red", "date": "2019-01-12" }';
var myDog = JSON.parse(json);
console.log(myDog);
