module.exports = function toReadable(num) {
    const arr_1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    const arr_2 = ['hundred', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
    // num from 1 to 19
    if (num >= 0 && num < 20) return arr_1[num];
    // num from 20 to 99
    if (num >= 20 && num < 100) {
        let b_1 = Math.floor(num / 10);
        if (num % 10 != 0) return `${arr_2[b_1]} ${arr_1[num % 10]}`;
        else return arr_2[b_1];
    }
    // num from 99 to 999
    else if (num > 99 && num < 1000) {
        let b_1 = Math.floor(num / 100);
        let b_2 = Math.floor(num % 100 / 10);
        let b_3 = num % 10;

        if (b_2 != 0 && b_3 != 0) {
            if (b_2 == 1) return `${arr_1[b_1]} ${arr_2[0]} ${arr_1[[b_3 + 10]]}`;
            else return `${arr_1[b_1]} ${arr_2[0]} ${arr_2[b_2]} ${arr_1[b_3]}`;
        };
        if (b_2 == 0 && b_3 != 0) return `${arr_1[b_1]} ${arr_2[0]} ${arr_1[b_3]}`;
        if (b_2 != 0 && b_3 == 0) return `${arr_1[b_1]} ${arr_2[0]} ${arr_2[b_2]}`;
        if (b_2 == 0 && b_3 == 0) return `${arr_1[b_1]} ${arr_2[0]}`;
    }
}