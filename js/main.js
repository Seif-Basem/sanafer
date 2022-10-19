//these for progress bar
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
//these for count on scroll
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) { //these for progress bar
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    if (window.scrollY >= statsSection.offsetTop) {//these for count on scroll
        if (!started) {
        nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) { //these for count on scroll
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
        clearInterval(count);
        }
    }, 2000 / goal);
}

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime(); //these for the countdown

let counter = setInterval( () => {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); 
    document.querySelector(".days").innerHTML = days;

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000)