module.exports = function check(str, bracketsConfig) {
    if (str.length <= 1) return false;

    let matchingOpeningBracket, chAr;
    let stack = [];

    let openingBrackets = [];
    let closingBrackets = [];

    let arr2 = [];

    for (let l = 0; l < bracketsConfig.length; l++) {
        arr2 = arr2.concat(bracketsConfig[l]);
    }

    for (let k = 0; k < arr2.length; k += 2) {
        openingBrackets.push(arr2[k]);
        closingBrackets.push(arr2[k + 1]);
    }

    let repeatedChars = [];
    for (let g = 0; g < openingBrackets.length; g++) {
        if (openingBrackets[g] === closingBrackets[g]) {
            repeatedChars.push(openingBrackets[g]);
            openingBrackets[g] = "(";
            closingBrackets[g] = ")";
        }
    }

    repeatedChars.forEach((val) => {
        if (str.indexOf(val) != -1) {
            let indices = [];
            for (let n = 0; n < str.length; n++) {
                if (str[n] === val) indices.push(n);
            }

            var strArr = Array.from(str);

            console.log(indices);
            for (let j = 0; j < indices.length; j += 2) {
                strArr[indices[j]] = "(";
                strArr[indices[j + 1]] = ")";
            }
            str = strArr.join("");
            console.log(strArr.join(""));
        }
        console.log(str);
        console.log(strArr);
    });

    for (let i = 0; i < str.length; i++) {
        chAr = str[i];

        if (closingBrackets.indexOf(chAr) > -1) {
            matchingOpeningBracket =
                openingBrackets[closingBrackets.indexOf(chAr)];
            if (stack.length == 0 || stack.pop() != matchingOpeningBracket) {
                return false;
            }
        } else {
            stack.push(chAr);
        }
    }

    return stack.length == 0;
};
