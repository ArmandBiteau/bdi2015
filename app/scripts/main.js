'use strict';

var colorPalette = [
    '#E53935',
    '#FF5252',
    '#8E24AA',
    '#4A148C',
    '#673AB7',
    '#3F51B5',
    '#3D5AFE',
    '#00838F',
    '#009688',
    '#43A047'
];

var changeColor = function (){

    var color = colorPalette[ Math.floor(Math.random()*10) ];
    //console.log('Changing color : '+color);

    $('.bg-header').css( 'background-color', color );
    $('header').css( 'background-color', color );

};

$(document).ready(function(){
    function timeout() {
        setTimeout(function () {
            changeColor();
            timeout();
        }, 4000);
    }
    timeout();
});
