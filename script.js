let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("User-score");
const computerScore_span = document.getElementById("Computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const Result_p = document.querySelector(".Risultati > p ");
const Sasso_div = document.getElementById("s");
const Carta_div = document.getElementById("c");
const Forbice_div = document.getElementById("f");


function getComputerChoice(){
    const choices = ['s', 'c', 'f'];
    const numberRandom = Math.floor(Math.random()*3);
    return choices [numberRandom];
}

function converToWord(letter){
if (letter === "s") return "Sasso";
if (letter === "c") return "Carta";
return "Forbici";

}

function win(userChoice, computerChoice){
    const smallUserWord = "User".fontsize(3).sub();
    const smallComputerWord = "Computer".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    Result_p.innerHTML = converToWord(userChoice) +  smallUserWord + " beats "  + converToWord(computerChoice) +  smallComputerWord+ " .You win.";
    userChoice_div.classList.add('green-glow');
    setTimeout (function () {userChoice_div.classList.remove('green-glow')}, 600);
}



function lose(userChoice, computerChoice){
    const smallUserWord = "User".fontsize(3).sub();
    const smallComputerWord = "Computer".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    Result_p.innerHTML = converToWord(userChoice) +  smallUserWord + " not beats "  + converToWord(computerChoice) +  smallComputerWord+ " .You lost.";
    userChoice_div.classList.add('red-glow');
    setTimeout (function () {userChoice_div.classList.remove('red-glow')}, 600);
}

function draw(userChoice, computerChoice){
    const smallUserWord = "User".fontsize(3).sub();
    const smallComputerWord = "Computer".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    Result_p.innerHTML = converToWord(userChoice) +  smallUserWord + " equal "  + converToWord(computerChoice) +  smallComputerWord+ " .It's a draw.";
    userChoice_div.classList.add('gray-glow');
    setTimeout (function () {userChoice_div.classList.remove('gray-glow')}, 600);
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "sc":
        case "cs":
        case "fc":
            win(userChoice, computerChoice);
            break;

            case "sc":
            case"cf":
            case"fs":
            
             lose(userChoice, computerChoice);
            break;
            
        case"ss":
        case "cc":
        case "ff":
            draw(userChoice, computerChoice);
            break;
    }

}




function main(){

    Sasso_div.addEventListener('click', function (){
     game("s");
    })

    Carta_div.addEventListener('click', function (){
        game("c");
       })


       Forbice_div.addEventListener('click', function (){
        game("f");
       })
}

main();




