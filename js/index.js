var helloWorld = "helloWorld";
console.log(helloWorld);

// $("#resumeLink").on("click", function() {
//     $("resumeLink").css("background-colour", "blue");
// });

//   $("#resumeLink").hover(function(){
//     $(this).css("background-color", "#AEDECF");
//     }, function(){
//     $(this).css("background-color", "FDF6F0");
//     $(this).css("border-color","#AEDECF")

//   });

  $("#nav").hover(function(){
    $(this).css("text-decoration", "underline");
  });

  $("#nav").mouseout(function(){
      $("#nav").css("text-decoration", "none");
  });

  $("#nav2").hover(function(){
    $(this).css("text-decoration", "underline");
  });

  $("#nav2").mouseout(function(){
      $("#nav2").css("text-decoration", "none");
  });

  $("#nav3").hover(function(){
    $(this).css("text-decoration", "underline");
  });

  $("#nav3").mouseout(function(){
      $("#nav3").css("text-decoration", "none");
  });

  $("#resumeLink").mouseover(function(){
    $("#resumeLink").css("background-color", "#AEDECF");
    $("#resumeLink").css("border-color", "#AEDECF");
    $("#resumeLink").css("font-weight", "500");
  });

  $("#resumeLink").mouseout(function(){
    $("#resumeLink").css("background-color", "#FDF6F0");
    $("#resumeLink").css("border-color", "#333333");
    $("#resumeLink").css("font-weight", "lighter");

  });

  $("#resumeLink").on("click", function(){
    $("#resumeLink").css("font-weight","bold");
    $("#resumeLink").css("background-color","#AEDECF");
    $("#resumeLink").css("border-color","#AEDECF");
    window.open(
        'https://drive.google.com/file/d/1unvXotA_DApSFkhMVXhH94PwaVYTyVmp/view?usp=sharing',
        '_blank'
      );
  });

  $("#nav").on("click", function(){
      window.location.replace('https://samchongluke.github.io/UX_UI_HW_18/');
  });

  $("#thumbnail2").mouseover(function(){
    $('#thumbnail2').css('background-image','url(images/Agri-foodhover.png)');   
 });

 $("#thumbnail2").mouseout(function(){
    $('#thumbnail2').css('background-image','url(images/Argi-food.png)');   
 });

//  $("#linkedin").mouseover(function(){
//      $("#linkedin").html('img','src="images/VectorLinkedinw.png"');
//  });

$("#linkedin").on("click", function(){
    window.open('https://www.linkedin.com/in/samantha-chong-luke-363796102/');
});

$("#github").on("click", function(){
    window.open('https://github.com/SamChongLuke');
});
