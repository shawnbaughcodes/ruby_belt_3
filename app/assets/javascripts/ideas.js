// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function() {
     // BUTTON TO CREATE IDEAS
     $('#create_button').click(function (){
         $('div.ideas').fadeOut('fast', function() {
             $('div.create_idea').fadeIn('fast', function() {
                 //Stuff to do *after* the animation takes place
             })
         })
     });
    //  POST IDEAS
     $('.idea_create').submit(function(){
         $('.create_idea').fadeOut('slow', function() {
             $('.ideas').fadeIn('slow', function() {
             })
         })
     })
     $('#cancel').click(function(){
         $('div.create_idea').fadeOut('fast', function() {
             $('div.ideas').fadeIn('fast', function() {
             })
         })
     })
});
