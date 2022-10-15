var interval = 1500;
var score = 0;
var timer;
var BugImg;

function checkTap() {
    BugImg.removeEventListener("click", checkTap, false);
    score += 2;
    document.getElementById('scoreLabel').innerHTML = score;
    interval = interval - 210;
    clearInterval(timer);
    timer = window.setInterval(moveBug, interval);
}

function update() {
    document.getElementById('scoreLabel').innerHTML = score;
    timer = window.setInterval(moveBug, interval);
}

function moveBug() {
    BugImg.style.left = (Math.random() * 910) + "px";
    BugImg.style.top = (Math.random() * 480) + "px";
    BugImg.addEventListener("click", checkTap, false);
    BugImg.addEventListener("ontouchstart", checkTap, false);
}

function resetSpeed() {
    interval = 1500
    clearInterval(timer);
    timer = window.setInterval(moveBug, interval);
    alert("Speed is reseted!");
}

function resetScore() {
    score = 0;
    document.getElementById('scoreLabel').innerHTML = score;
}
window.onload = function start() {
    BugImg = document.getElementById("bug");
    BugImg.addEventListener("click", checkTap, false);
    BugImg.addEventListener("ontouchstart", checkTap, false);
    update();
}