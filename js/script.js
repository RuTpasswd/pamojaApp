$(document).ready(function() {
    $(".registerbutton").click(function() {
        $(".bg-popUp").show().css("display", "flex");

    });

    $(".loginbutton").click(function() {
        $(".bg-popUpLogin").show().css("display", "flex");
    });

    $(".submitBtn").on("click", function(e) {
        // e.preventDefault();
        // $("input").attr('required', true);
        $(".bg-popUp").hide();
        $(".bg-popUpLogin").hide();
        $(".form-container").reset();
    });
});