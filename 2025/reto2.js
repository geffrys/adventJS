const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

const production2 = [
  { toy: 'train', quantity: 0 }, // no se fabrica
  { toy: 'bear', quantity: -2 }, // tampoco
  { toy: 'puzzle', quantity: 1 }
]

function manufactureGifts(giftsToProduce) {
  let toyManufactured = [];
  giftsToProduce.filter(e => e.quantity>0).forEach(e => {
    toyManufactured.push(...Array(e.quantity).fill(e.toy))
  });
  return toyManufactured;
}

console.log(manufactureGifts(production1));
console.log(manufactureGifts(production2));