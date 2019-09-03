$(document).ready(function() {
    $(".registerbutton").click(function() {
        $(".bg-popUp").show().css("display", "flex");
    });
    $(".submitBtn").click(function() {
        $(".bg-popUp").hide();
    });
});