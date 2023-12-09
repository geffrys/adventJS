
function manufacture(gifts: string[], materials: string): string[] {
    let canManufacture: string[] = []
    let flag: boolean = true;
    gifts.forEach((gift) => {
        flag = true;
        [...gift].forEach((m) => {
            if (materials.includes(m) == false) {
                flag = false;
            }
        });
        if (flag == true) {
            canManufacture.push(gift);
        }
    })
    return canManufacture;
}


const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials)