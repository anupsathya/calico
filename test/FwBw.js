function moveForward(a) {
  setTimeout(function () {
  D25.write(0);
    analogWrite(D24,0);
}, a);
  analogWrite(D24, 1);
}

function moveBackward(a) {
  setTimeout(function () {
  D24.write(0);
    analogWrite(D25,0);
}, a);
  analogWrite(D25, 1);
}

function locoStop() {
 D24.write(0);
  D25.write(0);
}