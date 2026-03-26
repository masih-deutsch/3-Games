const args = process.argv.slice(2);


if (args.length < 1) {
    console.log('Please Enter: rock, paper or scissors');
    process.exit(1);
}
if (args.length > 1) {
    console.log('Please Enter just one: rock, paper or scissors');
    process.exit(1);
}

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

console.log(game1(args[0].toLocaleLowerCase().trim()));
