$(function(){
  $("#firstName, #lastName").focus(function(){
    $("#firstName, #lastName").css("border", "3px solid green")
  });
  $("#firstName, #lastName").blur(function(){
    $("#firstName, #lastName").css("border", "3px solid red")
  });
});
