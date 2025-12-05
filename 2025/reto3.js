
function drawGift(size, symbol) {
    if(size<= 0) return "";
    if(size==1)  return "";
    let gift='';
    for (let index = 0; index < size; index++) {
        if(index == 0 || index == size-1){
            gift+=Array(size).fill(symbol).toString().replaceAll(',', '');
            if(index === 0) gift+='\n';
        }else{
            gift+=Array(1).fill(symbol).toString().replaceAll(',', ' ') ;
            gift+=Array(size-2).fill(' ').toString().replaceAll(',', '');
            gift+=Array(1).fill(symbol).toString().replaceAll(',', ' ') + '\n';
        }
    }
    return gift;
}






console.log(drawGift(4, '*'));