class Test {
    func1() {
        const func1a = 1;
        const func1b = 2;
        if (func1a === func1b) {
            console.log(`func1a === func1b`, func1a === func1b);
        } else {
            console.log("func1a !== func1b");
        }
    }

    func2() {
        const func2a = 3;
        const func2b = 4;
        const func2c = func2a + func2b;

        console.log(`func2c 的值是 ${func2c}`);
    }
}

const t = new Test();
t.func1();
t.func2();
