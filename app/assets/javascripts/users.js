// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function() {
    //  LOGIN FADES
     $('p#login').click(function() {
        //  login_fade();
        $('.idea_header').fadeOut(450, function() {
            //Stuff to do *after* the animation takes place
            $('.login_form').fadeIn(450, function() {
                //Stuff to do *after* the animation takes place
            })
        })
     })
    //  REGISTER FADES
    $('p#register').click(function() {
       //  login_fade();
       $('.idea_header').fadeOut(450, function() {
           //Stuff to do *after* the animation takes place
           $('.register_form').fadeIn(450, function() {
               //Stuff to do *after* the animation takes place
           })
       })
    })
    // CANCEL FADES
    $('#login_cancel').click(function() {
        $('.login_form').fadeOut(450, function() {
            $('.idea_header').fadeIn(450, function () {
            })
        })
    })
    $('#register_cancel').click(function() {
        $('.register_form').fadeOut(450, function() {
            $('.idea_header').fadeIn(450, function () {
            })
        })
    })

});
