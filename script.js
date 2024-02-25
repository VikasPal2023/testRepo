let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset-btn");
let msg = document.querySelector('#msg');
let turn = true;

var arrX = [],
    arrO = [];

let winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log("Button was clicked");
        if (turn) {
            button.innerText = "X";
            turn = false;
            // if(arrX.length == 3){
            //     arrX = []
            // }
            arrX.push(parseInt(button.id));
            checkWinner(arrX, "X");
        } else {
            button.innerText = "O";
            turn = true;
            // if(arrO.length == 3){
            //     arrO = []
            // }
            arrO.push(parseInt(button.id));
            checkWinner(arrO, "O");
        }
        button.disabled = true;
    });
});

function disableAllButtons() {
    boxes.forEach(button => {
        button.disabled = true;
    });
}
const checkWinner = (arrU, user_) => {
    for (let pattern of winnerPattern) {
        let cnt = 0;
        // console.log(pattern);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < arrU.length; j++) {
                if (pattern[i] == arrU[j]) {
                    // if(JSON.stringify(pattern) == JSON.stringify(arrX)){
                    //     console.log("X winner");
                    // }
                    cnt++;
                }
            }
            if (cnt == 3) {
                break;
            } // else {
            //     arrX.pop()
            // }
        }
        if (cnt == 3) {
            disableAllButtons();

            if (user_ == "X") {
                msg.innerText = (" Congratulations X is Winner");
        
            } else if (user_ == "O"){
                msg.innerText = (" Congratulations O is Winner")
            }
            // else {
            //     msg.innerText = ("Game is Draw")
            // }
            //   button.removeEventListener();
        }
    }
};


// Restart Button
boxes.forEach((button) => {
    resetbtn.addEventListener("click", () => {
        // console.log("Button was clicked");
        button.innerText = "";
        turn = true;
        button.disabled = false;
        arrX = [];
        arrO = [];
        msg.innerText = ""
    });
});

