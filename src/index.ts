export class Log {
    static success(msg: string) {
        console.log(`%c ${msg}`, 'color: green');
    }
    static error(msg: string) {
        console.log(`%c ${msg}`, 'color: red');
    }
    static info(msg: string) {
        console.log(`%c ${msg}`, 'color: black; background: yellow');
    }
    static response(value: any) {
        console.log(`%c Response -  ${JSON.parse(value)}`, 'color: white;background: green');
    }
}