let boxBtns = document.querySelectorAll(".box");
let restBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-game");
let msgContain = document.querySelector(".winMsg");
let msg = document.querySelector("#msg");

//Let explain that which player have first term in game, we by default set 0 
let turn0 = true;

//Now we explain and add winning patterns in game with array, In this game we have 8 wining patterns

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7 ,8]
];

//Now we add a event listner on boxes

boxBtns.forEach((box) => {
    box.addEventListener("click", () => {
        //When turn is player 0 then print 0 and trurn0 is false 
        if (turn0) {
            box.innerText = "0";
            box.style.color = "green";
            turn0 = false;
        } //When turn is player X then print X and trurn0 is true
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContain.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxBtns) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxBtns) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>  {
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgContain.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let patterns of winPatterns) {
        let pos1val = boxBtns[patterns[0]].innerText;
        let pos2val = boxBtns[patterns[1]].innerText;
        let pos3val = boxBtns[patterns[2]].innerText;
        if (pos1val != "" &&  pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
}

newBtn.addEventListener('click', resetGame);
restBtn.addEventListener('click', resetGame);
