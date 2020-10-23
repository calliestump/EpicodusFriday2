/*let result = ""

var answer1;
function sAnswer1(){
  answer1 = document.getElementById('favDog').value;
  alert(month);
}
var answer2;
function sAnswer2(){
  answer2 = document.getElementById('favMovie').value;
  alert(month);
}
var answer3;
function sAnswer3(){
  answer3 = document.getElementById('favMusic').value;
  alert(month);
}
var answer4;
function sAnswer4(){
  answer4 = document.getElementById('favSeason').value;
  alert(month);
}
var answer5;
function Answer5(){
  answer5 = document.getElementById('favRel').value;
  alert(month);
}
*/
let cPlus = 0
function cPlus2() {
  cPlus++;
}

let ruby = 0
function ruby2() {
  ruby++;
}
let python = 0
function python2() {
  python++;
}
$(document).ready(function() {
  $("form#Dog").submit(function(event) {
    const favDog = document.getElementById("favDog");
    var value1 = favDog.value;
    if (value1 === "1") {
      cPlus++;
    }
    else if (value1 === "2") {
      ruby++;
    }
    event.preventDefault();
  });
  $("form#Movie").submit(function(event) {
    const favMovie = document.getElementById("favMovie");
    var value2 = favMovie.value;
    event.preventDefault();
  });
  $("form#Music").submit(function(event) {
    const favMusic = document.getElementById("favMusic");
    var value3 = favMusic.value;
    event.preventDefault();
  });
  $("form#Season").submit(function(event) {
    const favSeason = document.getElementById("favSeason");
    var value4 = favSeason.value;
    event.preventDefault();
  });
  $("form#Relax").submit(function(event) {
    const favRel = document.getElementById("favRel");
    var value5 = favRelax.value;
    event.preventDefault();
  });
});
//console.log(cPlus);