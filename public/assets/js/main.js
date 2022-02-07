jQuery(
  (function ($) {
    "use strict";
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 30) {
        $(".navbar-area").addClass("is-sticky");
      } else {
        $(".navbar-area").removeClass("is-sticky");
      }
    });
    jQuery(".mean-menu").meanmenu({ meanScreenWidth: "1199" });
    $(".others-option-for-responsive .dot-menu").on("click", function () {
      $(".others-option-for-responsive .container .container").toggleClass(
        "active"
      );
    });
    $(".language-option").each(function () {
      var each = $(this);
      each
        .find(".lang-name")
        .html(each.find(".language-dropdown-menu a:nth-child(1)").text());
      var allOptions = $(".language-dropdown-menu").children("a");
      each.find(".language-dropdown-menu").on("click", "a", function () {
        allOptions.removeClass("selected");
        $(this).addClass("selected");
        $(this)
          .closest(".language-option")
          .find(".lang-name")
          .html($(this).text());
      });
    });
    $(".amount-currency-select").each(function () {
      var each = $(this);
      each
        .find(".currency-name")
        .html(each.find(".currency-dropdown-menu a:nth-child(1)").text());
      var allOptions = $(".currency-dropdown-menu").children("a");
      each.find(".currency-dropdown-menu").on("click", "a", function () {
        allOptions.removeClass("selected");
        $(this).addClass("selected");
        $(this)
          .closest(".amount-currency-select")
          .find(".currency-name")
          .html($(this).text());
      });
    });
    $(".main-banner-area").mousemove(function (e) {
      var wx = $(window).width();
      var wy = $(window).height();
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var newx = x - wx / 2;
      var newy = y - wy / 2;
      $(".main-banner-image, .main-banner-shape, .main-banner-shape-2").each(
        function () {
          var speed = $(this).attr("data-speed");
          if ($(this).attr("data-revert")) speed *= -0.4;
          TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
        }
      );
    });
    $(".why-choose-us-area").mousemove(function (e) {
      var wx = $(window).width();
      var wy = $(window).height();
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var newx = x - wx / 2;
      var newy = y - wy / 2;
      $(".choose-shape, .choose-shape-2").each(function () {
        var speed = $(this).attr("data-speed");
        if ($(this).attr("data-revert")) speed *= -0.4;
        TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
      });
    });
    $(".security-area").mousemove(function (e) {
      var wx = $(window).width();
      var wy = $(window).height();
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var newx = x - wx / 2;
      var newy = y - wy / 2;
      $(".security-shape, .security-shape-2").each(function () {
        var speed = $(this).attr("data-speed");
        if ($(this).attr("data-revert")) speed *= -0.4;
        TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
      });
    });
    $(".main-banner-wrap-image").each(function () {
      var tl = new TimelineMax();
      if (tl.isActive()) {
        return false;
      }
      var cov = $(this).find(".overlay");
      tl.from(cov, 0.6, { scaleX: 0, transformOrigin: "left" });
      tl.to(cov, 0.6, { scaleX: 0, transformOrigin: "right" }, "reveal");
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.7,
      });
    });
    $(".review-slides").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      smartSpeed: 500,
      margin: 25,
      autoplayHoverPause: true,
      autoplay: true,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 },
      },
    });
    $(".review-slides-two").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      smartSpeed: 500,
      margin: 25,
      autoplayHoverPause: true,
      autoplay: true,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 1 },
        1024: { items: 2 },
        1200: { items: 2 },
      },
    });
    $(".partner-slides").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      smartSpeed: 500,
      margin: 30,
      autoplayHoverPause: true,
      autoplay: true,
      responsive: {
        0: { items: 2 },
        576: { items: 4 },
        768: { items: 5 },
        1200: { items: 6 },
      },
    });
   
   
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 600) $(".go-top").addClass("active");
      if (scrolled < 600) $(".go-top").removeClass("active");
    });
    $(".go-top").on("click", function () {
      $("html, body").animate({ scrollTop: "0" }, 500);
    });
    jQuery(window).on("load", function () {
      jQuery(".preloader").fadeOut(500);
    });
  })(jQuery)
);
