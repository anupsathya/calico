var path = document.getElementById('connect');

// Called when we get a line of data
function onLine(v) {
    console.log("Received: " + JSON.stringify(v));
}

// When clicked, connect or disconnect
var connection;
var buf = "";
function handleThis() {
    if (connection) {
        connection.close();
        connection = undefined;
    }
    Puck.connect(function (c) {
        if (!c) {
            alert("Couldn't connect!");
            return;
        }
        connection = c;        
        connection.on("data", function (d) {
        // Search the incoming string for the data that you want
        // You'll get garbage values like "<" and "=" so can't check for equality
            if (d.search('11') != -1) {
                setNode("left_wrist");
            }
            else if (d.search('10') != -1){
                setNode("left_elbow");
            }
            else if (d.search('Reached') != -1){
                setNode(destination_node);
                console.log("Receiving");
            }
        });
    });
}

function stopData() {
    connection.write("clearInterval();\n");
}

function setVariable() {
    connection.write("testVariable=11;\n");
}

function resetVariable() {
    connection.write("testVariable=10;\n");
}

function collectData() {
    setTimeout(function () {
        // Check if there's a change in the variable 100 times a second. 
        // Print to Bluetooth only when there's a change
        connection.write("setInterval(function(){if(oldVar != testVariable){Bluetooth.println(testVariable);}oldVar=testVariable;},10);NRF.on('disconnect', function() {clearInterval()});\n",
            function () { console.log("Collecting Data..."); });
    }, 100);
}

