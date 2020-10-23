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
  $("form#generator").submit(function(event) {
    const favDog = document.getElementById("favDog");
    var value1 = favDog.value;
    event.preventDefault();
  });
});
//console.log(cPlus);