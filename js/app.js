class Caesar {
    constructor(lang) {
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.alphabet = this.alphabet.toLowerCase();
    }
    addOwnAlphabet(alphabet) {
        this.alphabet = alphabet;
    }
    encrypt(sentence, key) {
        return (this.codeEncode(sentence, key));
    }
    decrypt(sentence, key) {
        return this.codeEncode(sentence, -key);
    }
    codeEncode(sentence, key) {
        sentence = sentence.toLowerCase();
        let letterQty = this.alphabet.length;
        let retVal = "";
        for (let i = 0; i < sentence.length; i++) {
            let letter = sentence[i];
            let index = this.alphabet.indexOf(letter);
            // console.log(index)
            if (index < 0) {
                retVal += letter;
            }
            else {
                let codeIndex = (letterQty + index + key) % letterQty;
                retVal += this.alphabet[codeIndex];
            }
        }
        return retVal;
    }
}
//main
// let instance = new Caesar("en");
// alert( instance.encrypt("sraka", 3));
// alert(instance.decrypt("vudnd",3));
//# sourceMappingURL=app.js.map