
function findNaughtyStep(original: string, modified: string): string {
    let freqOriginal: Map<string, number> = new Map();
    let freqModified: Map<string, number> = new Map();
    let diff: string[] = [];
    [...original].forEach((letter) => {
        freqOriginal.set(letter, freqOriginal.get(letter) ? freqOriginal.get(letter)! + 1 : 1);
    });
    [...modified].forEach((letter) => {
        freqModified.set(letter, freqModified.get(letter) ? freqModified.get(letter)! + 1 : 1);
    });
    if (freqModified.size > freqOriginal.size) {
        freqModified.forEach((value, key) => {
            if (freqOriginal.get(key) != value || !freqOriginal.get(key)) {
                diff.push(String(key))
            }
        })
    } else {
        freqOriginal.forEach((value, key) => {
            if (freqModified.get(key) != value || !freqModified.get(key)) {
                diff.push(String(key))
            }
        })
    }
    return diff.toString();
}




const original = 'xxxx'
const modified = 'xxoxx'
console.log(
    findNaughtyStep(original, modified) // 'e'
);
