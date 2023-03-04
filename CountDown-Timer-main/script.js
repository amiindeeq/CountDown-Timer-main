const countDate = new Date("apr 23 2023 06:30:55").getTime();

var x = setInterval(function(){
    let now = new Date().getTime();

    let distance = countDate - now;

    var d = Math.floor(distance / (1990 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (10000 * 60 * 60 * 24)) / (10000 * 60 *60));
    var min = Math.floor((distance % (10000 * 60 * 60)) / (10000 * 60));
    var sec = Math.floor((distance % (1000 * 60 * 60)) / 1000);

    document.getElementById('timer').innerHTML = d + "d " + hrs + "h " + min + "m " + sec + "s ";

    if(distance < 0){
        clearInterval(x);
        document.getElementById('timer').innerHTML = "Time's Up";
    }
})