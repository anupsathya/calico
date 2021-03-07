function hallEffectTest() {
  pinMode(D5, "input_pullup");
  setInterval(function () {
    var x = analogRead(D5);
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

function mt1() {
  setWatch(function () { 
    console.log("yup"); 
    locoStop(); 
    clearWatch(); }, D7, { repeat: true, edge: 'falling' });
}

function stopAtHall() {
  mf();
  mt1();
}

pinMode(D7, "input_pullup");

