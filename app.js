let gameSeq = [];
let userSeq = [];
let btns = ["b1", "b2", "b3", "b4"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 300);
}
function levelUp() {
    userSeq = [];   // reset userSeq arr
    level++;
    h3.innerText = `Level : ${level}`;

    let randIdx = Math.floor(Math.random() * 4); // 0 to 3
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randbtn);
}
function checkAns(idx) {
    // console.log(`curr Level ${level}`);

    if(userSeq[idx] === gameSeq[idx]) {
        // console.log("same value");
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 400);
        }
    } else {
        h3.innerHTML = `Game Over! Your Score was : ${level} <br> Press Any Key To Start.`;
        document.querySelector("body").style.backgroundColor = `rgba(255, 0, 0, 0.3)`;
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = `rgba(0, 0, 0, 0.3)`;
        }, 150)
        reset(); // reatart game if Game was over
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}