$(function () { //Same as document.addEventLinstener("DOMContentLoaded"...)

    //Same as document.querySelector("#navbarToggle").addEventListener("blur"...
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});