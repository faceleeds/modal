
    //Modal banner

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

// Get the modal
$(document).ready(function() {
    var url = window.location.href;
    if (url.indexOf('modal') > -1) {
        modalLT.style.display = "block";
    }
    if (url.indexOf('test') > -1) {
        modalES.style.display = "block";
    }
});

var span = document.getElementsByClassName("close__LT")[0];
span.onclick = function() {

    console.log('test');
    modalLT.style.display = "none";
};

var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
    modalES.style.display = "none";
};


$(".overlay").click(function(e) {

    if($(e.target).closest(".cla").length==0) $(".overlay").css("display","none");

});

$('.modal').click(function() {
    $('#modalES').on('click', function(event) {
        var select = $('.modal-content');
        if ($(event.target).closest(select).length)
            return;
        $('.modal, .modal-content, .btn__banner').hide();
        $('#modalES').unbind('click');
    });
});

$('.modal').click(function() {
    $('#modalLT').on('click', function(event) {
        var select = $('.modal-content');
        if ($(event.target).closest(select).length)
            return;
        $('.modal, .modal-content, .btn__banner').hide();
        $('#modalLT').unbind('click');
    });
});