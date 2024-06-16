import orderByProps from '../app';

test('Sorted', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

    const result = orderByProps (obj, ["name", "level"]);
    const testMas = ['name: мечник', 'level: 2', 'attack: 80', 'defence: 40', 'health: 10'];

    //const result2 = orderByProps (obj, ["level", "name"]);
    //const testMas2 = ['level: 2', 'name: мечник', 'attack: 80', 'defence: 40', 'health: 10'];

    //const result3 = orderByProps (obj, ["defence", "attack"]);
    //const testMas3 = ['defence: 40', 'attack: 80', 'health: 10', 'level: 2', 'name: мечник'];



    expect(result).toEqual(testMas);
    //expect(result2).toEqual(testMas2);
    //expect(result3).toEqual(testMas3);
});