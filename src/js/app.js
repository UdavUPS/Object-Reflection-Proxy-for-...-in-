// TODO: write your code here
/* import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */


export default function orderByProps (objectForSorted, properties) {
    let keys = Object.keys(objectForSorted).sort();
    let keysEnd = keys.filter((e) => !(properties.includes(e)));
    keys = properties.concat(keysEnd);
    let mas = [];

    for (const elem of keys) {
        for (const pro in objectForSorted) {
            if (pro == elem) {
                mas.push(elem + ': '+ objectForSorted[elem]);
            }
        }
    }

    return mas;
}
