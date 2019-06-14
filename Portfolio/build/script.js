$(document).ready(function() {

    $('#accordeon .acc_head').on('click', f_acc);
});

function f_acc(){

  $('#accordeon .acc_body').not($(this).next()).slideUp(1000);

    $(this).next().slideToggle(1000);
}
