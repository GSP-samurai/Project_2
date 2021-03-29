$(function() {

    var header = $("#header");
    var heroH = $("#hero").innerHeight();
    var scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= heroH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(e) {
        e.preventDefault();

        var $this = $(this);
        var blockId = $this.data('scroll');
        var blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");


    });

    /* Hiding nav on scrolling */
    $("#nav a").on("click", function(e) {
        $("#nav").removeClass("active");

    });

    /* Accordion */
    $("[data-collapse]").on("click", function(e) {
        e.preventDefault();

        var $this = $(this);
        var blockId = $this.data('collapse');

        $(blockId).slideToggle();
        $this.toggleClass("active");
    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1


    });



});