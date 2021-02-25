function hallEffectTest() {
  pinMode(D5, "input_pullup");
  D25.write(0);
  D24.write(0);
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