/*let result = ""

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
*/

$(document).ready(function() {
  $("form#generator").submit(function(event) {
    const favDog = parseInt($("#favDog").val());
    const favMovie = parseInt($("#favMovie").val());
    const favMusic = parseInt($("#favMusic").val());
    const favSeason = parseInt($("#favSeason").val());
    const favRel = parseInt($("#favRel").val());
    let cplus = 0;
    //event.preventDefault();
    if (favDog === 1) {
        cplus += 1;
    } else if (favDog === 2) {
        ruby += 1;
    } else if (favDog === 3) {
        python +=1;
    }

  });
});
