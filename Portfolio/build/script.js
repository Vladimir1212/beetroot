$(document).ready(function(){
    $("#pagination").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(function() {
  $(".menu").click(function() {
    if ($("#navigation").hasClass("hidden")) {
      $("#navigation").attr("class", "visible animated slideInLeft");
    } else {
      $("#navigation").attr("class", "hidden animated slideOutLeft");
    }
    $(this).toggleClass("open");
  });

  $("#navigation").click(function() {
    if ($("#navigation").hasClass("visible")) {
      $(".menu").toggleClass("open");
    } else {
    }
    $(this).attr("class", "slideOutLeft hidden");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      if ($("#navigation").hasClass("visible")) {
        $(".menu").toggleClass("open");
      } else {
      }
      $("#navigation").attr("class", "slideOutLeft hidden");
    }
  });
});

$(document).ready(function(){
    $("#navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
    });
});



$(document).ready(function() {

    $('#accordeon .acc_head').on('click', f_acc);
});

function f_acc(){

  $('#accordeon .acc_body').not($(this).next()).slideUp(1000);

    $(this).next().slideToggle(1000);
}
