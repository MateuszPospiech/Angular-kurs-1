var LetConstVar = /** @class */ (function () {
    function LetConstVar() {
    }
    LetConstVar.prototype.printNumber = function () {
        var i = 99;
        for (var i_1 = 0; i_1 < 3; i_1++) {
            console.log(i_1);
        }
        console.log('wypisz: ' + i);
    };
    LetConstVar.prototype.printNumber2 = function () {
        var i = 99;
        for (var i = 0; i < 3; i++) {
            console.log(i);
        }
        console.log('wypisz: ' + i); // var run out of his scope
    };
    LetConstVar.prototype.checkIf = function () {
        var a = 'Jestem A';
        if (true) {
            var b = "jestem b";
            console.log(b);
            console.log(a);
        }
        console.log(b); // var rune out of IF scope
    };
    LetConstVar.prototype.showConst = function () {
        var num = 100;
        console.log(num);
    };
    return LetConstVar;
}());
var example3 = new LetConstVar();
example3.printNumber();
example3.printNumber2();
example3.checkIf();
example3.showConst();
