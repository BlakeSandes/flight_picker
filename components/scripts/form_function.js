$ = require('jquery');

$("li").on("focus", ".choosePlace", function() {
  $(this).find("select #destinationOptions").focus();
});



$(".button").on("click", function(evt) {
  evt.preventDefault();
  var selection1 = $(".canadaOptions input:checked").val(),
      selection2 = $(".usOptions input:checked").val(), 
      selection3 = $(".euroOptions input:checked").val();
  
  var confirmSelection = $(".notify + input[type=submit]").attr({value: "confirm", name: "confirm"});
  function confirmIt() {
    $(".notify").on("click", confirmSelection, function() {
      $(this).closest(".notify").html("<p>Thank you, please proceed to payment</p>");
      $(this).after(".button").show();
    }); 
  }    
  var departing = $("#departing").val();
  var returning = $("#returning").val();

  $(".notify").slideDown(300, function() {
    if (departing && returning) {
      if (selection1) {
        $(this).html("<p>Please confirm your reservation for " + selection1 +  " departing on " + 
          departing + " and returning on " + returning + ".</p>");
        $(this).find("p").after(confirmSelection);
        confirmIt();

      } else if (selection2) {
        $(this).html("<p>Please confirm your reservation for " + selection2 +  " departing on " + 
          departing + " and returning on " + returning + ".</p>"); 
        $(this).find("p").after(confirmSelection);
        confirmIt(); 
      } else if (selection3) {
        $(this).html("<p>Please confirm your reservation for " + selection3 +  " departing on " + 
          departing + " and returning on " + returning + ".</p>");
        $(this).find("p").after(confirmSelection);
        confirmIt(); 
      } else {
        $(this).html("<p>Please select a departure city!</p>");
      }
    } else {
      $(this).html("<p>Please select departing and returning dates</p>");
    }
  });


   
     
}); 

$(".choosePlace").hover(function() {
  var $destination = $(this).find(".destination");
  $destination.slideToggle(200);
});















