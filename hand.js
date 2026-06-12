let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");

const generatechoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];

}

const playgame = (userchoice) => {
    console.log("userchoice = ", userchoice);

    const computerchoice = generatechoice();
    console.log("computerchoice = ", computerchoice);

    if(userchoice === computerchoice){
        console.log("It's a tie!");
        msg.innerText = "It's a tie!";
    }else if(userchoice === "rock" && computerchoice === "scissors" || userchoice === "paper" && computerchoice === "rock" || userchoice === "scissors" && computerchoice === "paper" ){
        console.log("You win!");
        userscore++;
        userScore_span.innerText = userscore;
        msg.innerText = "you win!";
    } else {
        console.log("Computer wins!");
        computerscore++;
        computerScore_span.innerText = computerscore;
        msg.innerText = "Computer wins!";
    }


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice clicked:", userchoice);
        playgame(userchoice);
    });
});

