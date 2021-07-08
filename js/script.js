 $('documnet').ready(function() {

    $('.navbar-toggler').on('click',function(){
        $('.sidebar-left').toggleClass('active');
    });/*** menu */

    $('.search-trigger').on('click',function(){
        $('.search-area').addClass('active');
    });/*** search-open */ 

    $('.search-bar-close').on('click',function(){
        $('.search-area').removeClass('active');
    });/*** search-close */ 

    $('.profile-trigger').on('click',function(){
        $('.profile-setting').toggleClass('active');
    });/*** search-close */

    /*** Header height = gutter height */
    function setGutterHeight(){
        var header = document.querySelector('.header'),
            gutter = document.querySelector('.headergutter');

        if ( gutter ) {
            gutter.style.height = header.offsetHeight + 'px';
        }
    }
    window.onload = setGutterHeight;
    window.onresize = setGutterHeight;

    // print 
    $('.print').on('click', function() { // select print button with class "print," then on click run callback function
       $.print('.post'); // inside callback function the section with class "content" will be printed
    });

    // $('.print').on('click',function(){
    //    print('.post-body');
    // });/*** search-close */
});