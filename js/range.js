$( document ).ready(function() {

    $('.panel-slide').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        center: false,
        smartSpeed: 900,
        items: 1,
        navText: ['<img src="img/slide-left.svg">', '<img src="img/slide-left.svg">'],
        responsive: {
            0: {
                items: 1,
                margin: 12,
            },
            600: {
                items: 1,
                margin: 20,
            },
            1000: {
                items: 1,
                margin: 12,
            }
        }
    });

    $('.brand-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.brand-block').toggleClass('active');
    });

    $('.price-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.price-block').toggleClass('active');
    });

    $('.filter-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.filter-block').toggleClass('active');
    });

    $('.color-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.color-block').toggleClass('active');
    });

    $('.category-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.category-block').toggleClass('active');
    });

    $('.pod-cat').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.cat-in').toggleClass('active');
    });
    
    $('.burger-block').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('header .navbar-block').toggleClass('active');
    });

    $('.user-icon-btn.mob').on('click',function(e){
        e.preventDefault();
        $('header .drop-span').toggleClass('active');
    });

});



var lower = $('.lower');
var upper = $('.upper');
var lowerVal = parseInt(lower.val());
var upperVal = parseInt(upper.val());
var resultL = $('.result-l');
var resultU = $('.result-u');
var lowMin = parseInt(lower.attr('min'));
var lowMax = parseInt(lower.attr('max'));
var upMin = parseInt(upper.attr('min'));
var upMax = parseInt(upper.attr('max'));
var line = $('.line');
var lineW = upperVal - lowerVal - 15;
line.width(lineW);
lower.on('input', function(){
    lowerVal = parseInt(lower.val());
    upperVal = parseInt(upper.val());
     if (upperVal <= lowerVal + 1 ) {
                upper.val(lowerVal + 2)
            if (lowerVal == lowMin) {
                 upper.val(lowerVal + 2)
            }
     }
        resultL.html(lowerVal)
        resultU.html(upperVal)
        lineW = upperVal - lowerVal;
        line.css({'left': + lowerVal + 'px'});
        line.width(lineW);
})
upper.on('input', function(){
    lowerVal = parseInt(lower.val());
     upperVal = parseInt(upper.val());

     if (lowerVal >= upperVal - 1) {
            lower.val(upperVal - 2)

            if (upperVal == upMax) {
                 lower.val(upperVal - 2)
            }

     }
    resultL.html(lowerVal)
    resultU.html(upperVal)
    lineW = upperVal - lowerVal;
        line.css({'left': + lowerVal + 'px'});
        line.width(lineW);
})
