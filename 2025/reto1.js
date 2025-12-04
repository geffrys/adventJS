const gifts1 = ['car', 'doll#arm', 'ball', '#train']

// function filterGifts(gifts) {
//     console.log(gifts);
//     return gifts.map(e => {
//         if (!e.includes("#")) {
//             return e;
//         }
//     }
//     ).filter(e => e !== undefined);
// }

function filterGifts(gifts) {
    return gifts.filter(e => !e.includes("#"));
}

console.log(filterGifts(gifts1));