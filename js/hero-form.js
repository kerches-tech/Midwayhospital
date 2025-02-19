// JavaScript Document
$(document).ready(function() {

    "use strict";

    $(".hero-form").submit(function(e) {
        e.preventDefault();        
        var name = $(".name");
        var email = $(".email");
        var phone = $(".phone");
        var date = $(".date");
        var doctor = $(".doctor");
        var flag = false;
        if (name.val() == "") {
            name.closest(".form-control").addClass("error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-control").removeClass("error").addClass("success");
        } if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        } if (phone.val() == "") {
            phone.closest(".form-control").addClass("error");
            phone.focus();
            flag = false;
            return false;
        } else {
            phone.closest(".form-control").removeClass("error").addClass("success");
        } if (date.val() == "") {
            date.closest(".form-control").addClass("error");
            date.focus();
            flag = false;
            return false;
        } else {
            date.closest(".form-control").removeClass("error").addClass("success");
        } if (doctor.val() == "") {
            doctor.closest(".form-control").addClass("error");
            doctor.focus();
            flag = false;
            return false;
        } else {
            doctor.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        var dataString = "name=" + name.val() + "&email=" + email.val() + "&phone=" + phone.val() + "&date=" + date.val() + "&doctor=" + doctor.val();
        $(".loading").fadeIn("slow").html("Loading...");
        $.ajax({
            type: "POST",
            data: dataString,
            url: "php/heroForm.php",
            cache: false,
            success: function (d) {
                $(".form-control").removeClass("success");
                    if(d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
                        $('.loading').fadeIn('slow').html('<font color="#00596e">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');
                         else
                        $('.loading').fadeIn('slow').html('<font color="#ff5607">Mail not sent.</font>').delay(3000).fadeOut('slow');
                                }
        });
        return false;
    });
    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });
    
})
$('.feature-35-owl').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    responsive: { 0:{ items:1, nav:false }, 1000:{ items:2, nav:false }, 1650:{ items:3, nav:false, loop:false } }
}); 


