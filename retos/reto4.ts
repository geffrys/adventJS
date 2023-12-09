function decode(message: string): string {
    let messageDecoded: string = '';
    let iterator: number = 0;
    let groupFlag: boolean = false;
    let groupString: string = '';
    messageDecoded += message.substring(0, message.indexOf('('));
    // while (true) {
        
    // }
    

    return messageDecoded;
}



const c:string = decode('sa(u(cla)atn)s');
console.log(c);
const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!
