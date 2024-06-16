// TODO: write your code here
/* import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */


function orderByProps (objectForSorted, properties) {
    let keys = [];
    for (let elem in objectForSorted) {
        keys.push(elem);
    }
    keys.sort();
    let mas = [];


    for (let i = 0; i < properties.length; i++) {
        for (const pro in objectForSorted) {
            if (pro == properties[i]) {
                mas.push(properties[i] + ': ' + objectForSorted[properties[i]]);
                delete objectForSorted[properties[i]];
            }
        }
    }

    for (const elem of keys) {
        for (const pro in objectForSorted) {
            if (pro == elem) {
                mas.push(elem + ': '+ objectForSorted[elem]);
            }
        }
    }

    return mas;
}
