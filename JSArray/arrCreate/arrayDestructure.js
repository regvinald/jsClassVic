let emojis = new Array();
emojis.push('🔍', '😼', '📕', '🚓', '👌', '🪷', '🤮', '⛷️')
console.log(emojis);

let [emoji1, emoji2, ...otherEmojis] = emojis
console.log(emoji1);
console.log(emoji2);
console.log(otherEmojis);

"".T