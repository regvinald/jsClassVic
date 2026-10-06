let emojis = new Array();
// adding elements to an array
let itemNums = emojis.push('⛷️', '🔍', '💝', '📕', '🚓', '👌', '🤦‍♂️', '😃');
console.log(itemNums);
let newVals = emojis.unshift('🪷', '😶‍🌫️');
console.log(newVals);
console.log(emojis);


// removing elements from an array
let popItem = emojis.pop(); // removes at the end
console.log(popItem);


let shiftItem = emojis.shift(); //removes at the beginning
console.log(shiftItem);
console.log(emojis);

let newEmojis = emojis.concat(['🖤', '😎'])
console.log(newEmojis);

let entryRes = emojis.entries();
console.log(entryRes)
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().done);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().value);
console.log(entryRes.next().done);

let slicedItems = emojis.slice(2,5);
console.log(slicedItems);
let spliteItems = emojis.splice(2,5,'🚃', '🏗️', '👁️‍🗨️');
console.log(spliteItems);

const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
    return age > 18;
}

const vals = [32, 33, 16, 40];
const result = vals.filter(checkAdult);
console.log(result);

function checkAdult(age) {
    return age >= 18;
}

const vals2 = [32, 33, 16, 40];
const results2 = vals2.find(checkAdult);
console.log(result2);
function checkAdult(age) {
    return age >= 18;
}

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
newFruits = fruits.fill('kiwi');

const fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits2.fill('kiwi', 1, 3);

fruits2.includes('Banana');
fruits2.includes('kiwi');

fruits2.join(',');
fruits2.keys();
fruits2.lastIndexOf('kiwi');