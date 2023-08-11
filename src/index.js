const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(bits) {
    console.log(bits)
    // // 1. Проверка и дополнение нулями
    // const length = bits.length;
    // const paddingLeft = length % 10 === 0 ? '' : 10 - (length % 10);
    // bits = "0".repeat(paddingLeft) + bits;

    // 2. Разбиение строки на группы по 10 символов
    let newStr = bits.match(/.{1,10}/g).join(" ");
    console.log(newStr)

    // 3. Декодирование
    let decodeStr = "";
    for(let i = 0; i < newStr.length; i++){
        if(newStr.substring(i, i+10)  === "**********"){ 
            decodeStr += "*";
        }
        if(newStr[i] === " "){
            decodeStr += " ";
        }
        if(newStr.substring(i, i+1) === "11"){
            decodeStr += "-";
        }
        if(newStr.substring(i, i+1) === "10"){
            decodeStr += ".";
        }
    }
    
    // 4. Разбиваем на массив
    let decodeWord = decodeStr.split("*");
    let letters = decodeWord.join('').split(" ")
    // console.log(decodeWord)
    // console.log(letters)

    // 5. 
    const result = decodeWord.map(word => {
        if (word === "") {
            return " ";
        }
        let letters = word.split(" ");
        return letters.map(letter => MORSE_TABLE[letter]).join("");
    });

    return result
}

// console.log(decode("00000011110000000010"))
console.log(decode("0000001111**********0000001111"))
// console.log(decode("000000111100000000100000000000000000011110000000010"))
// console.log(decode("00000011110000000010000000111000111000001110001110111000000000000111011101110001110111011100000000001110111"))
console.log(decode("0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010"))


// module.exports = {
//     decode
// }