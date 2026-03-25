const buttonGame1 = document.querySelector(".game1 button");
const buttonGame2 = document.querySelector(".game2 button");
const buttonGame3 = document.querySelector(".game3 button");

buttonGame1.addEventListener("click", (e) => {
    e.preventDefault();

    const radio = document.querySelector('.game1 input[type="radio"]:checked');
    const outputField = document.querySelector(".game1 input[type='text']");

    if (radio) {
        const result = game1(radio.value);
        outputField.value = result;
    } else {
        outputField.value = "Please select one!";
    }
});

buttonGame2.addEventListener("click", (e) => {
    e.preventDefault()

    const inputArea = document.querySelector(".game2 .textInput")
    const outputArea = document.querySelector(".game2 .textOutput");

    const words = inputArea.value.trim().replaceAll(",", "").replaceAll("!", "").replaceAll(".", "").split(" ")

    if (outputArea) {
        outputArea.value = ""
    }

    if (inputArea) {
        outputArea.value = words.map((word) => {
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
    }
})

buttonGame3.addEventListener("click", (e) => {
    e.preventDefault();

    const inputArea = document.querySelector(".game3 .textInput")
    const outputArea = document.querySelector(".game3 .textOutput");
    const shift = document.querySelector(".game3 input[type='text']")

    if (inputArea) {
        outputArea.value = caesarCode(inputArea.value, parseInt(shift.value))
    }


})

function game1(userInput) {
    const choices = ['rock', 'paper', 'scissors'];
    const comp = choices[Math.floor(Math.random() * 3)];
    const winConditions = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]];

    if (winConditions.some(([a, b]) => (a === userInput && b === comp))) {
        return `You: ${userInput} | Comp: ${comp} -> You Won`;
    } else if (userInput === comp) {
        return `You: ${userInput} | Comp: ${comp} -> Draw`;
    } else {
        return `You: ${userInput} | Comp: ${comp} -> Computer Won`;
    }
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