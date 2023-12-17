const runner = document.querySelector("[data-runner]");
const hurdle = document.querySelector("[data-hurdle]")

function jump() {
    if (runner.classList != "jump") {
        runner.classList.add("jump");

        setTimeout(function () {
            runner.classList.remove("jump");
        }, 300);
    }
}

let stillRunning = setInterval(function () {
    let runnerTop = parseInt(window.getComputedStyle(runner).getPropertyValue("top"));
    
    let hurdleLeft = parseInt(window.getComputedStyle(hurdle).getPropertyValue("left"));

    if (hurdleLeft < 20 && hurdleLeft > 0 && runnerTop >= 80) {
        alert("You hit a hurdle! You have been disqualified!")
        location.reload(true)
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});
