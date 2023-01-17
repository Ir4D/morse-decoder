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

function decode(expr) {
    let arr = [];
  let result = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    let str = expr.slice(i, i + 10);
    arr.push(str);
  }
  arr.forEach(element => {
    let arr2 = [];
    for (let j = 8; j >= 0; j = j - 2) {
      let elem = element.slice(j, j + 2);
      if (elem == '10') {
        arr2.push('.');
      } else if (elem == '11') {
        arr2.push('-');
      } else if (elem == '**') {
        arr2.push('**');
      }
    }
    arr2.reverse();
    let line = arr2.join('');
    for (const [key, value] of Object.entries(MORSE_TABLE)) {
      if (line == key) {
        result.push(value);
      }
    }
    if (line == '**********') {
      result.push(' ');
    }
  });
  return result.join('');
}

module.exports = {
    decode
}