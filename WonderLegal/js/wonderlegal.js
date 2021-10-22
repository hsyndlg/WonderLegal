function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
// JQUERY
$(document).ready(function(){
            
    $(window).scroll(function(){
       
        if($(window).scrollTop()>320){
            $("#myBtn-top").fadeIn();
        }
        else{
            $("#myBtn-top").fadeOut();
        }    
        
    });
    $("#myBtn-top").click(function(){                
        $("html,body").animate({scrollTop:0},700);
        return false;
    });
    $("#checkLabel2").click(function() {
        $("#sifre").show();
    });
    $("#checkLabel1").click(function() {
        $("#sifre").hide();
    });
});