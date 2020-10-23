$(document).ready(function() {
  let cPlus = 0
  let ruby = 0
  let python = 0
  let result = ""
  $("form#Dog").submit(function(event) {
    const questionOne = parseInt($("#favDog").val());
    // const operator1 = $("#favDog").val();
    if (questionOne === 1) {
      cPlus += 1
      print(cPlus)
    }
    event.preventDefault();
  });
  $("form#Movie").submit(function(event) {
    const questionTwo = parseInt($("#favMovie").val());
    //const operator2 = $("#favMovie").val();
    event.preventDefault();
  });
  $("form#Music").submit(function(event) {
    const questionThree = parseInt($("#favMusic").val());
    //const operator3 = $("#favMusic").val();
    event.preventDefault();
  });
  $("form#Season").submit(function(event) {
    const questionFour = parseInt($("#favSeason").val());
    //const operator4 = $("#favSeason").val();
    event.preventDefault();
  });
  $("form#Relax").submit(function(event) {
    const questionFive = parseInt($("#favRel").val());
    //const operator5 = $("#favRel").val();
    event.preventDefault();
  });
  show(cPlus)
});