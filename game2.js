const arg = process.argv.slice(2);

if (arg.length < 1) {
    console.log("Please Enter a Word or a Sentence")
    process.exit(1);
}
if (arg.length > 1) {
    console.log("please enter your text in a one string")
    process.exit(2);
}

const sentence = arg[0]
const words = sentence.trim().replaceAll(",", "").replaceAll("!", "").replaceAll(".", "").split(" ")

const result = words.map((word) => {
    const lowerWord = word.toLowerCase();
    const v = "aeiou";

    if (v.includes(lowerWord[0])) {
        return word + "way";
    }
    else if (lowerWord[1] && !v.includes(lowerWord[0]) && !v.includes(lowerWord[1])) {
        return word.slice(2) + word.slice(0, 2) + "ay";
    }
    else {
        return word.slice(1) + word[0] + "ay";
    }
}).join(" ");

console.log(result)
