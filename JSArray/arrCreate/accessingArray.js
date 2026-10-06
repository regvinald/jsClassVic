let emojis = new Array();
emojis.push('🔍', '😼', '📕', '🚓', '👌', '🪷', '🤮', '⛷️')

let itemsNumber = emojis.length;
emojis.length = 20;
console.log(emojis);
console.log(itemsNumber);

// getting items from an array
console.log(emojis[1]);
console.log(emojis[22]);
console.log(emojis[7]);
console.log(emojis[4]);

// setting an item
emojis[7] = "hello"
emojis[8] = "world"
emojis[9] = "hi"
console.log(emojis);