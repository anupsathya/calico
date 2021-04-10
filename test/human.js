var current_node = "";
var previous_node = "";

function updateList() {
    var newNode = document.getElementById(current_node);
    var oldNode = document.getElementById(previous_node);
    newNode.classList.add("current-node");
    if (oldNode != newNode) {
        oldNode.classList.remove("current-node");
    }
}

function setNode(x) {
    previous_node = current_node;
    current_node = x;
    updateList();
}


var man = document.getElementById('exercise-svg');
setTimeout(function () {
    man.classList.replace("exercise-good", "exercise-bad");
}, 10000);

setTimeout(function () {
    man.classList.replace("exercise-bad", "exercise-good");
}, 17000);
