const args = process.argv.slice(2);


if (args.length < 2) {
    console.log('Please Enter a Word or a Sentence Like --> "your text" shift');
    process.exit(1);
}

const text = args[0];
const shift = Number(args[1]);

if (isNaN(shift)) {
    console.log("Shift must be a number.");
    process.exit(1);
}


function caesarCode(word, shift) {
    const alpha = shift < 0 ? "zyxwvutsrqponmlkjihgfedcba" : "abcdefghijklmnopqrstuvwxyz";
    const absShift = Math.abs(shift) % 26;

    return [...word].map(x => {
        let idx = alpha.indexOf(x.toLowerCase());
        if (idx === -1) return x;

        let nxtIdx = (idx + absShift) % 26;
        return alpha[nxtIdx];
    }).join("");
}


const result = caesarCode(text, shift);
console.log(result);
