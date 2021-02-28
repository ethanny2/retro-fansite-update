/*Listeners and AJAX call for the forms */

$(document).ready(function() {
  $("#subscription_form").submit(function(event) {
    console.log("Starting AJAX POST");
    var url = "../php/subscribe.php";
    $.ajax({
      url: url,
      type: "POST",
      data: $("#subscription_form").serialize(),
      success: function(data) {
        $("#response").empty();
        $("#response").append(data);
      }
    })
      .done(function() {
        console.log("Ajax post DONE!");
      })
      .fail(function() {
        console.log("Ajax post failed");
      });
    event.preventDefault();
  });

  /* Move the picture to the back*/
  $(".design_container").on("click", function(event) {
    console.log("clicking");
    var target = $(this).children(".front");
    var back = $(this).children(".back");
    console.log(target);
    if (target.is(":visible")) {
      target.transition({
        perspective: "100px",
        rotateY: "180deg"
      });
      var timed = setInterval(function() {
        target.hide();
        target.css("rotateY", "0deg");
        back.show();
        clearInterval(timed);
      }, 330);
    } else {
      back.transition({
        perspective: "100px",
        rotateY: "180deg"
      });
      var timed = setInterval(function() {
        console.log("hiding back");
        target.show();
        back.hide();
        back.css("rotateY", "0deg");
        clearInterval(timed);
      }, 330);
    }
    event.preventDefault();
  });

  /* Function to set the height and width of all containers to same thing? */
});
