/*------Scrolling------*/
var header     = document.getElementsByTagName('header'); // height: 447px, 0px-447px
var education  = document.getElementsByClassName('.section-education'); // height: 677px, 448px-1125px
var experience = document.getElementsByClassName('.section-experience'); // height: 593px, 1126px-1719px
var skills     = document.getElementsByClassName('.section-skills'); // height: 672px, 1720px-2392px
var quote      = document.getElementsByClassName('.section-quote'); // height: 331px, 2393px-2724px
var about      = document.getElementsByClassName('.section-about'); // height: 925px, 2725px-3650px
var footer     = document.getElementsByTagName('footer'); // height: 160px, 3651px-3811px
var sections   = ['header', '.section-education', '.section-experience', '.section-skills', '.section-quote', '.section-about', 'footer'];


function scrollUp() {
    var coordinate_y = window.scrollY;
    console.log('scrollY: ' + coordinate_y);  
    var index;
    
    // If coordinate_y equals a breakpoint
    if(0 == coordinate_y)
        index = 0;
    else if (541 == coordinate_y) 
        index = 1;
    else if (1218 == coordinate_y) 
        index = 2;
    else if (1811 == coordinate_y) 
        index = 3;
    else if (2483 == coordinate_y) 
        index = 4;   
    else if (2814 == coordinate_y) 
        index = 5;
    else if (3169 == coordinate_y)
        index = 6;
    else if(coordinate_y <= 540)
        index = 1;
    else if (coordinate_y <= 1217) 
        index = 2;
    else if (coordinate_y <= 1810) 
        index = 3;
    else if (coordinate_y <= 2482) 
        index = 4;
    else if (coordinate_y <= 2813) 
        index = 5;   
    else if (coordinate_y <= 3358) 
        index = 6;
    else 
        index = 7;
    
    if(index != 0) 
        index--; 
    
    console.log('Scrolling Up to section: ' + sections[index]);
    
    $('html, body').animate({
        scrollTop: $(sections[index]).offset().top
    }, 500);
}

function scrollDown() {
    try {
        var coordinate_y = window.scrollY;
        console.log('scrollY: ' + coordinate_y);
        
        var index;
        console.log('In section: ' + sections[index]);  
        
        if(0 == coordinate_y || coordinate_y <= 540)
            index = 0;
        else if (541 == coordinate_y || coordinate_y <= 1217) 
            index = 1;
        else if (1218 == coordinate_y || coordinate_y <= 1810) 
            index = 2;
        else if (1811 == coordinate_y || coordinate_y <= 2482) 
            index = 3;
        else if (2483 == coordinate_y || coordinate_y <= 2813) 
            index = 4;   
        else if (2814 == coordinate_y || coordinate_y <= 3168) 
            index = 5;
        else
            index = 6;
        
        if(index != 6) 
            index++;       
        
        console.log('Scrolling Down to section: ' + sections[index]);
            
            $('html, body').animate({
                scrollTop: $(sections[index]).offset().top
            }, 500);
    } catch (e) {
        console.log("Error Message: " + e);
    }    
}







