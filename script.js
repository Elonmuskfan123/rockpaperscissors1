function compchoice() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3){
        return "rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        return "paper";
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        return "scissors";
    }
}
let wins = 0;
let loses = 0;
let ties = 0;

function rock() {

    

    const computer = compchoice();

    const user = "rock";

    if (user==="rock" && computer==="rock"){
        
        document.getElementById('res').innerHTML = `User: rock<br>Computer: ${computer}<br>Tie`
        ties = ties + 1;
        document.getElementById('ties').innerHTML = `Ties: ${ties}`
        return "Tie";
    } else if (user==="rock" && computer==="scissors"){
        
        document.getElementById('res').innerHTML = `User: rock<br>Computer: ${computer}<br>You win`;
        wins = wins + 1;
        document.getElementById('wins').innerHTML = `Wins: ${wins}`
        return "You win";
    } else if(user==="rock" && computer==="paper"){
        document.getElementById('res').innerHTML = `User: rock<br>Computer: ${computer}<br>You lose`
        loses = loses + 1;
        document.getElementById('losses').innerHTML = `Losses: ${loses}`
        return "You lose";
    }     
}

function paper(){
    

    const computer = compchoice();

    const user = "paper";

    if (user==="paper" && computer==="paper"){
        
        document.getElementById('res').innerHTML =`User: paper<br>Computer: ${computer}<br>Tie`
        ties = ties + 1;
        document.getElementById('ties').innerHTML = `Ties: ${ties}`
        return "Tie";
    } else if (user==="paper" && computer==="scissors"){
        
        document.getElementById('res').innerHTML = `User: paper<br>Computer: ${computer}<br>You lose`
        loses = loses + 1;
        document.getElementById('losses').innerHTML = `Losses: ${loses}`
        return "You lose";
    } else if(user==="paper" && computer==="rock"){
        
        document.getElementById('res').innerHTML = `User: paper<br>Computer: ${computer}<br>You win`
        wins = wins + 1;
        document.getElementById('wins').innerHTML = `Wins: ${wins}`
        return "You win";
    }     
}

function scissors(){
    
    const computer = compchoice();

    const user = "scissors";

    if (user==="scissors" && computer==="scissors"){
        
        document.getElementById('res').innerHTML = `User: scissors<br>Computer: ${computer}<br>Tie`
        ties = ties + 1;
        document.getElementById('ties').innerHTML = `Ties: ${ties}`
        return "Tie";
    } else if (user==="scissors" && computer==="rock"){
        
        document.getElementById('res').innerHTML =  `User: scissors<br>Computer: ${computer}<br>You lose`
        loses = loses + 1;
        document.getElementById('losses').innerHTML = `Losses: ${loses}`
        return "You lose";
    } else if(user==="scissors" && computer==="paper"){
        

        document.getElementById('res').innerHTML = `User: scissors<br>Computer: ${computer}<br>You win` 
        wins = wins + 1;
        document.getElementById('wins').innerHTML = `Wins: ${wins}`
        return "You win";
    }     
}

function reset(){
    // <h3 id="wins">Wins:</h3>
    // <h3 id="losses">Losses:</h3>
    // <h3 id="ties">Ties:</h3>

    document.getElementById("wins").innerHTML = `Wins: 0`;
    document.getElementById("losses").innerHTML = `Losses: 0`;
    document.getElementById("ties").innerHTML = `Ties: 0`;
    document.getElementById("res").innerHTML = `Result`;
}
