
const ceaserCipher = function(str,shift) {
    const alphabet_LOWER = "abcdefghijklmnopqrstuvwxyz";
    const alphabet_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let ciphered = "";

    for(let i = 0; i < str.length; i++) {
        for(let x = 0; x < alphabet_LOWER.length; x++) {
            if(alphabet_LOWER.includes(str[i])) {
              let index = alphabet_LOWER.indexOf(str[i])+shift;
              ciphered += alphabet_LOWER[index < 0 ? index+alphabet_LOWER.length : index > alphabet_LOWER.length-1 ? index-alphabet_LOWER.length : index];
              break;
            } else if(alphabet_UPPER.includes(str[i])) {
              let index = alphabet_UPPER.indexOf(str[i])+shift;
              ciphered += alphabet_UPPER[index < 0 ? index+alphabet_UPPER.length : index > alphabet_UPPER.length-1 ? index-alphabet_UPPER.length : index];
              break;
            } else {
                ciphered += str[i];
                break;
            }
        }
    }

    return ciphered;
}

module.exports = ceaserCipher;