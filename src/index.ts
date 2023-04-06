class Log {
    static success(msg: string) {
        console.log(`%c ${msg}`, 'color: green');
    }
    static error(msg: string) {
        console.log(`%c ${msg}`, 'color: red');
    }
    static info(msg: string) {
        console.log(`%c ${msg}`, 'color: black; background: yellow');
    }
    static response(msg: string) {
        console.log(`%c ${msg}`, 'color: white;background: green');
    }
}