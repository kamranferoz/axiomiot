tellme();

function tellme(){
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();

    console.log("Current time is " + theHr + ":" + theMin + " and current date: " + now);
}