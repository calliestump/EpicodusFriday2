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
//let cplus = 0;
let cplus = 0;
$(document).ready(function() {  
  $("form#generator").submit(function(event) {
    const favDog = parseInt($("#favDog").val());
    const favMovie = parseInt($("#favMovie").val());
    const favMusic = parseInt($("#favMusic").val());
    const favSeason = parseInt($("#favSeason").val());
    const favRel = parseInt($("#favRel").val());
    //let cplus = 0;
    //event.preventDefault();

    // Question 1 Determination
    if (favDog === 1) {
        cplus += 1; // I could not update the global cplus variable by one. Could not proceed
    } else if (favDog === 2) {
        ruby += 1;
    } else if (favDog === 3) {
        python +=1;
    } // Question 2 Determination
    if (favMovie === 1) {
      cplus += 1;
    } else if (favMovie === 2) {
      ruby += 1;
    } else if (favMovie === 3) {
      python +=1;
    } // Question 3 Determination
    if (favMusic === 1) {
      cplus += 1;
    } else if (favMusic === 2) {
      ruby += 1;
    } else if (favMusic === 3) {
      python +=1;
    } // Question 4 Determination
    if (favSeason === 1) {
      cplus += 1;
    } else if (favSeason === 2) {
      ruby += 1;
    } else if (favSeason === 3) {
      python +=1;
    } // Question 5 Determination
    if (favRel === 1) {
      cplus += 1;
    } else if (favRel === 2) {
      ruby += 1;
    } else if (favRel === 3) {
      python +=1;
    } 

    // Compare CPlus Python and Ruby to see what language suits best for user

  });
});
