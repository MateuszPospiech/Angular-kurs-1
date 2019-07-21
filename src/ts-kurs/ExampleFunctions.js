var ExampleFunctions = /** @class */ (function () {
    function ExampleFunctions() {
        this.msg = 'Hello world';
        this.hello4 = function (message) { return console.log('Witaj świecie, funkcja fat arrow hello4 ' + message); };
        this.hello5 = function () { return console.log('Witaj świecie, funkcja fat arrow hello5'); };
    }
    ExampleFunctions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFunctions.prototype.hello = function () {
        return 'Witaj świecie, funkcja hello';
    };
    ExampleFunctions.prototype.hello1 = function (message) {
        console.log(message);
    };
    ExampleFunctions.prototype.hello2 = function (message, message2) {
        console.log(message + ' ' + message2);
    };
    ExampleFunctions.prototype.hello3 = function (message, message2) {
        if (message2 === void 0) { message2 = 'hello3'; }
        console.log(message + ' ' + message2);
    };
    return ExampleFunctions;
}());
var example = new ExampleFunctions();
example.showMsg();
example.hello1('Hello World, finckja hello1');
example.hello2('Hello World,', 'to jest opcjonalna wartość');
example.hello3('Hello World');
example.hello4('wywołana');
example.hello5();
