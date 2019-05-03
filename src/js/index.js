import $ from "jquery";

// default message on the page
$("#message").text("Hello User!");

// Greet user
$("#greet-user").click(function() {
  let userName = $("#user-name").val();
  $("#message").text("Hello " + userName);  
});

// Show current time
$("#show-time").click(function() {
  $("#current-time").text(new Date());
});
