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

function mtable() {
  analogWrite(D22, 1);
  D23.write(0);
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
  // battery side hall
  setWatch(function () { 
    console.log("yup"); 
    locoStop();
    D22.write(0);
    clearWatch(); }, D7, { repeat: true, edge: 'falling' });
}

var flag = 1;
var less;

function mtb() {
  // pcb side hall
  setWatch(function () { 
    console.log(flag);
    if (flag >= less)
    {
      locoStop();
      clearWatch();
      flag = 0;
    }
    flag = flag + 1;
     }, D8, { repeat: true, edge: 'falling' });
}

function stopAtHallff() {
  mf();
  mtf();
}

function stopAtHallfb() {
  mb();
  mtf();
}

function stopAtHallbf(x) {
  mf();
  mtb();
  less = x;
}

function stopAtHallbb(x) {
  mb();
  mtb();
  less = x;
}

function notification(a) {
  setInterval(function () {
    moveForward(30);
    setTimeout('moveBackward(30);',40);
  }, 100);
  setTimeout('clearInterval(); locoStop();', a);
}

function turntable() {
  mtable();
  mtf();
}

pinMode(D7, "input_pullup");
pinMode(D8, "input_pullup");

