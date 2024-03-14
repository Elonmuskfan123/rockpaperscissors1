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


function rock() {

    

    const computer = compchoice();

    const user = "rock";

    if (user==="rock" && computer==="rock"){
        
        document.getElementById('res').innerHTML = `User: rock<br>Computer: ${computer}<br>Tie`
        return "Tie";
    } else if (user==="rock" && computer==="scissors"){
        
        document.getElementById('res').innerHTML = `User: rock<br>Computer: ${computer}<br>You win`;
        return "You win";
    } else if(user==="rock" && computer==="paper"){
        document.getElementById('res').innerHTML = `User: rock<br>Computer: ${computer}<br>You lose`
        return "You lose";
    }     
}

function paper(){
    

    const computer = compchoice();

    const user = "paper";

    if (user==="paper" && computer==="paper"){
        
        document.getElementById('res').innerHTML =`User: paper<br>Computer: ${computer}<br>Tie`
        return "Tie";
    } else if (user==="paper" && computer==="scissors"){
        
        document.getElementById('res').innerHTML = `User: paper<br>Computer: ${computer}<br>You lose`
        return "You lose";
    } else if(user==="paper" && computer==="rock"){
        
        document.getElementById('res').innerHTML = `User: paper<br>Computer: ${computer}<br>You win`
        return "You win";
    }     
}

function scissors(){
    
    const computer = compchoice();

    const user = "scissors";

    if (user==="scissors" && computer==="scissors"){
        
        document.getElementById('res').innerHTML = `User: scissors<br>Computer: ${computer}<br>Tie`
        return "Tie";
    } else if (user==="scissors" && computer==="rock"){
        
        document.getElementById('res').innerHTML =  `User: scissors<br>Computer: ${computer}<br>You lose`
        return "You lose";
    } else if(user==="scissors" && computer==="paper"){
        

        document.getElementById('res').innerHTML = `User: scissors<br>Computer: ${computer}<br>You win` 
        return "You win";
    }     
}