class ThisProblem{

    msg: string = 'hello problem';

    printFunction() {
        return function() {
            console.log(this.msg);
        };
    }

    printFunction2() {
        return () => {
            console.log(this.msg);
        };
    }
}

let example = new ThisProblem();
let fun = example.printFunction();
fun();

let fun2 = example.printFunction2();
fun2();
