module.exports = function toReadable (number) {
   
    const numberObject = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };


    const a = String(number).length;
   
    let result = '';
    if (a>2) {
        result = `${numberObject[String(number)[0]]} hundred`
        if (String(number).slice(1)>20) {
            result +=` ${numberObject[String(number)[1]*10]} ${numberObject[String(number)[2]]}`
        } else {
            result +=` ${numberObject[+String(number).slice(1)]}`   
        }
        
    }

    if (a === 2) {
        if (number>20) {
            result +=`${numberObject[String(number)[0]*10]} ${numberObject[String(number)[1]]}`
        } else {
            result +=`${numberObject[number]}`   
            
        }

    }

    if (a === 1) {
        result +=`${numberObject[number]}`

    }

    if (result.endsWith('zero') && a!==1) {
        console.log(number)
        result=result.slice(0, result.length-5)
    }

    

   return result;




}
  

