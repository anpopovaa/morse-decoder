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
    let newArr = [];
    expr =  expr.split('');
    let res = '';
  
    while(expr.length > 0) {
      newArr.push(expr.splice(0, 10));
    }
  
    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i].includes('*')) {
        res += ' ';
        continue;
      }
  
      let curWord = '';
      for(let j = 0;  j < newArr[i].length; j += 2) {
        if(newArr[i][j] === '1' && newArr[i][j + 1] === '0'){
          curWord += '.';
        } else if(newArr[i][j] === '1'&& newArr[i][j + 1] === '1') {
          curWord += '-';
        }
      }
      res += MORSE_TABLE[curWord];
    }
    return res;
  }

module.exports = {
    decode
}