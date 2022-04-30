$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  new bootstrap.ScrollSpy(document.body, {
    target: "#fixedNavbar",
  });

  $("#fixedNavbar ul li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
    if ($(window).width() <= 767) {
      $(".menu-btn").removeClass("active");
      $(".logo").removeClass("active");
      $(".navbar").fadeOut(300);
      $(".header").removeClass("active");
      $("body").removeClass("overflow");
    }
  });

  var prevScroll = $(window).scrollTop();

  $(this).scrollTop() >= 250
    ? $("header").addClass("header-scroll")
    : $("header").removeClass("header-scroll fixsedt");
  $(window).scroll(function () {
    $(this).scrollTop() >= 250
      ? $("header").addClass("header-scroll")
      : $("header").removeClass("header-scroll fixsedt");

    var currentScroll = $(window).scrollTop();
    prevScroll < currentScroll && prevScroll > 0
      ? $("header").removeClass("fixsedt")
      : $("header").addClass("fixsedt"),
      (prevScroll = currentScroll);
  });

  $(".menu-btn").on("click", function (e) {
    $(this).toggleClass("active");
    $(".logo").toggleClass("active");
    $(".navbar").fadeToggle(300);
    $(".header").toggleClass("active");
    setTimeout(() => {
      $("html,body").animate(
        {
          scrollLeft: 0,
        },
        0
      );
    }, 520);

    $("body").toggleClass("overflow");
  });
});
