var day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;

    case 2:
        dayName = 'Monday';
        break;

    case 3:
        dayName = 'Tuesday';
        break;

    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 7:
        dayName = 'Fridayday';
        break;
    case 7:
        dayName = 'Saturday';
        break;

    default:
        dayName = 'Unknown Day of the week';
        break;    
}
console.log(`Today is ${dayName}`)

let message ;
let char = 'F'
switch (char){
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'U':
    case 'u':
        message = 'it is vowel letter';
        break;
    default:    
        message = 'it is consonant letter';
        break;
}
console.log(message);