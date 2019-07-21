class LetConstVar {
    printNumber() {
        let i = 99;
        for (let i = 0; i < 3; i++) {
            console.log(i);
        }
        console.log('wypisz: ' + i);
    }

    printNumber2() {
        var i = 99;
        for (var i = 0; i < 3; i++) {
            console.log(i);
        }
        console.log('wypisz: ' + i); // var run out of his scope
    }

    checkIf() {
        let a = 'Jestem A';

        if(true) {
            var b = "jestem b";
            console.log(b);
            console.log(a);
        }
        console.log(b); // var rune out of IF scope
    }

    showConst() {
        const num = 100;
        console.log(num);
    }
}

let example3 = new LetConstVar();
example3.printNumber();
example3.printNumber2();
example3.checkIf();
example3.showConst();
