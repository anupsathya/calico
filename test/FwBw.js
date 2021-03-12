function hallEffectTest() {
  pinMode(D8, "input_pullup");
  setInterval(function () {
    var x = analogRead(D8);
    console.log(x);
  }, 100);
}

function moveForward(a) {
  setTimeout(function () {
    D25.write(0);
    analogWrite(D24, 0);
  }, a);
  analogWrite(D24, 1);
}

function moveBackward(a) {
  setTimeout(function () {
    D24.write(0);
    analogWrite(D25, 0);
  }, a);
  analogWrite(D25, 1);
}

function locoStop() {
  D24.write(0);
  D25.write(0);
}

function mf() {
  D24.write(1);
  D25.write(0);
}

function mb() {
  D24.write(0);
  D25.write(1);
}

function readHall() {
  var x = analogRead(D5);
  return x;
}

function mtf() {
  setWatch(function () { 
    console.log("yup"); 
    locoStop(); 
    clearWatch(); }, D7, { repeat: true, edge: 'falling' });
}

function mtb() {
  setWatch(function () { 
    console.log("yup"); 
    locoStop(); 
    clearWatch(); }, D8, { repeat: true, edge: 'falling' });
}

function stopAtHallff() {
  mf();
  mtf();
}

function stopAtHallfb() {
  mb();
  mtf();
}

function stopAtHallbf() {
  mf();
  mtb();
}

function stopAtHallbb() {
  mb();
  mtb();
}

function notification(a) {
  setInterval(function () {
    moveForward(30);
    setTimeout('moveBackward(30);',40);
  }, 100);
  setTimeout('clearInterval(); locoStop();', a);
}

pinMode(D7, "input_pullup");
pinMode(D8, "input_pullup");

