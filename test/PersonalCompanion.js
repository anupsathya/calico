function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomMove() {
    var randomTime = randomNumber(4, 7);
    var moveID = setTimeout(function () {
        connection.write("stopAtHallfb(1);\n");
    }, randomTime * 60 * 1000);
    randomMove();
}

var recursiveFlag = 0;

function randomNotification() {
    var randomTime = randomNumber(1, 5);
    console.log(randomTime);
    var notificationID = setTimeout(function () {
        connection.write("notification(500);\n");
        randomNotification();
    }, randomTime * 1000);
}

function playGame() {
    connection.write("notification(500);\n");
    timer = setTimeout(function () {
        connection.write("notification(500);\n");
    }, 1000);
    if (recursiveFlag == 0) {
        connection.on("data", function (d) {
            // Search the incoming string for the data that you want
            // You'll get garbage values like "<" and "=" so can't check for equality
            if (d.search('Reached') != -1) {
                connection.write("notification(500);\n");
                if (recursiveFlag == 0) {
                    playGame();
                } else {
                    return;
                }
            }
        });
    }
}

function stopGame() {
    recursiveFlag = 1;
}






