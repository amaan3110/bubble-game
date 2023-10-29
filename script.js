var score = 0;
var hits;
var timer = 60;


function makeBubble() {
    var bubble = "";

    for (let i = 0; i <= 111; i++) {

        var rn = Math.floor(Math.random() * 10);

        bubble += `<div class="bubble">${rn}</div>`
        document.querySelector('#b-cont').innerHTML = bubble;
    }
}

makeBubble();

function getHits() {
    hits = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hits;
}

getHits();


function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint)
            document.querySelector("#b-cont").innerHTML = `<h2>Game Over</h2>`;
        }
    }, 1000)
}

runTimer();

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}



document.querySelector("#b-cont").addEventListener("click", function (dets) {
    var clickedNumber = Number(dets.target.textContent);

    if (clickedNumber === hits) {
        increaseScore();
        makeBubble();
        getHits();
    }
})