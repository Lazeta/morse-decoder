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
    // 1. Проверка и дополнение нулями
    const length = bits.length;
    const paddingLeft = length % 10 === 0 ? '' : 10 - (length % 10);
    bits = "0".repeat(paddingLeft) + bits;

    // 2. Разбиение строки на группы по 10 символов
    let newStr = bits.match(/.{1,10}/g).join(" ");

    // 3. Декодирование
    let decodeStr = "";
    for(let i = 0; i < newStr.length; i++){
        if(newStr.substring(i, [i+10])  === "**********"){ 
            decodeStr += "*";
            i += 9;
        }
        else if(newStr[i] === " "){
            decodeStr += " ";
        }
        else if((newStr[i] + newStr[i+1]) === "11"){
            decodeStr += "-";
            i += 1
        }
        else if((newStr[i] + newStr[i+1]) === "10"){
            decodeStr += ".";
            i += 1
        }
    }
    
    // 4. Разбиваем на массив
    let decodeWord = decodeStr.split("*");

    // 5. Формируем результат в новый массив
    const result = decodeWord.map(word => {
        let letters = word.split(" ");
        return letters.map(letter => MORSE_TABLE[letter]).join("");
    });

    // 6. Вызываем результат строки из массива
    return result.join(' ')
}

// console.log(decode("00000011110000000010")) //me
// console.log(decode("00000011110000001111**********00000011110000001110")) //mm mn
// console.log(decode("0000001111 0000000010 0000001111 0000000010")) // meme
// console.log(decode("0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010")) //"rolling scope school" 
// console.log(decode("000000101100000011100000101010000010111100000000100000101110**********00001111110000001110**********000000001100101010100000000010**********00001010110010111010000000001100000010100000001111000000101100000000110000000010**********00111110110000101011000000001000001010100000000011000000101000001111110000001110**********00001111110010101110**********0010111010000000101000101011100000000010**********000000001100101010100000000010**********00001010110000001110000000101000101010110000000010000010111000001010100000000010**********000000101100000011100000111010**********0000000010001010101100000000100000101110001110111100000000110010101010000000101000000011100000111110**********00000010100000101010**********10101010111010111111")) //"answer on the ultimate question of life the universe and everything is 42"


module.exports = {
    decode
}