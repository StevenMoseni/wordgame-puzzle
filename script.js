var button = document.getElementById("start");
var userScore = document.getElementById("score");
var startTimer = 25;

function timer(){
    var countdown = setInterval(function(){
        userScore.textContent = startTimer;
        startTimer--;
        console.log(startTimer)
        // if startTimer is less then 0, we reset to 0. 
        if (startTimer < 0){
            clearInterval(countdown)
            startTimer = 0
        }
        // stop timer
    }, 100);
};

function restart() {
    // We need to reset the startTimer counter
    startTimer = 25;
    // clear data on page
}


button.addEventListener("click", function() {
    timer()
    // The timer function
    // console.log(startTimer)       
})