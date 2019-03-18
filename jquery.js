



$( document ).ready(readyNow)

function readyNow() {
    console.log( 'jq');

    $('.location').mouseenter (locMouseEnter);
    $('.location').mouseleave (locMouseLeave);


  
        
 
    $('.resources').mouseleave (locMouseLeave);

    $('.shop').mouseenter (shopMouseEnter);
    $('.shop').mouseleave (shopMouseLeave);

    $('.dropdow-menu1').mouseenter (contactMouseEnter);
    $('.contact').mouseleave (contactMouseLeave);






// nav mouse enter
function locMouseEnter (e) {
    console.log('now red');
    $(e.target).css('background-color', 'red');
}
function resourcesMouseEnter (e) {
    console.log('now red');
    $(e.target).css('background-color', 'red');
}
function contactMouseEnter (e) {
    console.log('now red');
    $(e.target).css('background-color', 'red');
}
function shopMouseEnter (e) {
    console.log('now red');
    $(e.target).css('background-color', 'red');
}

   //nav mouse leave
function locMouseLeave (e) {
    console.log('now red');
    $(e.target).css('background-color', 'black');
}

function resourcesMouseLeave (e) {
    console.log('now red');
    $(e.target).css('background-color', 'black');
}

function shopMouseLeave (e) {
    console.log('now red');
    $(e.target).css('background-color', 'black');
}

function contactMouseLeave (e) {
    console.log('now red');
    $(e.target).css('background-color', 'black');
}

}