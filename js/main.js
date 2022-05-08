$(window).on("load", function () {
  $("body").removeClass("overflow");
  sal({
    once: false,
  });
  for (let i = 0; i < 2; i++) {
    $("video").get(i).play();
  }
});
$(document).ready(function () {
  for (let i = 0; i < 2; i++) {
    $("video").get(i).play();
  }
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".scroll-up").show()
      : $(".scroll-up").hide();
  });
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
      $(".navbar").slideUp();
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
    $(".navbar").slideToggle();
    $("body").toggleClass("overflow");
  });
});
