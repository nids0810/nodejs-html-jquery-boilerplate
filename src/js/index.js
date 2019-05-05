import $ from "jquery";
import { square } from './lib';

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

// Show square of a number
$("#num-sq").click(function(){
  $("#result").text(square($("#num").val()));
});
