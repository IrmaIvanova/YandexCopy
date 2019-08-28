$(function(){

    var res = $(".my_log_more");
    $(".logIn").on("click", funk);

    $(document).click(function(e) {
      if ($(e.target).closest(res).length || $(e.target).closest('.logIn').length) return;
      res.fadeOut(100);
      e.stopPropagation();
    });
function funk(){
    if(res.css("display") == "none"){
        res.fadeIn(100);
      }
    else{
        res.fadeOut(100);
      }
    }

});

// $(function(){
//     $(".logIn").click(function(){
//         console.log("GOOD JOB, IRMA!");
//     });
// });

// $(function(){
//     $('.logIn').on('click', function(){
//         console.log('helo');
//         $('.my_log_more').fadeToggle();
//     });
// });