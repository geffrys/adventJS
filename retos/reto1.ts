function findFirstRepeatedId(gifts: number[]): number | undefined {

    interface Toy {
        elemento: number,
        index: number
    }

    let giftsCopy: number[] = gifts
    let repeateds: Toy[] = []
    gifts.forEach((gift, index) => {
        giftsCopy = gifts.slice(index+1)
        if (giftsCopy.indexOf(gift)!= -1) {
            repeateds.push({
                elemento: gift,
                index: index + giftsCopy.findIndex((elementor) => elementor == gift)
            })
        }

    })
    if (repeateds) {
        repeateds.sort((a, b) => {
            return a.index - b.index;
        })
        let output = repeateds.shift();
        if(output?.elemento){
            return output.elemento
        }
    }

    return -1;
}


const case02 = [2, 1, 3, 5, 3, 2];
const case03 = [2, 2];
const case05 = [1, 3, 4, 5, 0, 1, 3, 0, 7]
let output = findFirstRepeatedId(case02);
console.log(case02, output, 'case02');
output = findFirstRepeatedId(case03);
console.log(case03 ,output, 'case03');
output = findFirstRepeatedId(case05);
console.log(case05, output, 'case05');

