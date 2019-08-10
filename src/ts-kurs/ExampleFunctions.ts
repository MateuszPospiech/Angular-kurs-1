class ExampleFunctions {
    msg: string = 'Hello world';

    showMsg() {
        console.log(this.msg);
    }

    hello(): string {
        return 'Witaj świecie, funkcja hello';
    }

    hello1(message){
        console.log(message);
    }

    hello2(message: string, message2?: string){
        console.log(message + ' ' + message2);
    }

    hello3(message: string, message2 = 'hello3') {
        console.log(message + ' ' + message2);
    }

    hello4 = message => console.log('Witaj świecie, funkcja fat arrow hello4 ' + message);

    hello5 = () => console.log('Witaj świecie, funkcja fat arrow hello5');

}

let example2 = new ExampleFunctions();
example2.showMsg();
example2.hello1('Hello World, finckja hello1');
example2.hello2('Hello World,', 'to jest opcjonalna wartość');
example2.hello3('Hello World');
example2.hello4('wywołana');
example2.hello5();
