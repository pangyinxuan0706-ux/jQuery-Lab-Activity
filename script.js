$(document).ready(function(){
    // ✅ Animate logo when page loads
    $(".logo").hide().fadeIn(2000);

    // ✅ Hover effect on navigation buttons
    $(".nav-button").hover(function(){
        $(this).css("background-color", "#0059b3");
    }, function(){
        $(this).css("background-color", "#0073e6");
    });

    // ✅ Click to show/hide contact info
    $(".nav-button:last").click(function(){
        $(".contact-info").slideToggle();
    });

    // ✅ Animate social media buttons on hover
    $(".social button").hover(function(){
        $(this).animate({opacity: 0.7, padding: "14px 24px"}, 200);
    }, function(){
        $(this).animate({opacity: 1, padding: "12px 20px"}, 200);
    });
});
