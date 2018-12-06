//preloader
(function() {
  window.addEventListener("load", function() {
    document.querySelector(".preloader").style.display = "none";
    //console.log("hello");
  });
})();

$(document).ready(function() {
  //toggler btn
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
    //console.log("hello");
  });

  //sticky navbar and less padding
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 718) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });
});

//smooth scroll
$(".nav-item a, .logo, .header-link, .menu-btn, #back-to-top").click(function(
  link
) {
  link.preventDefault();

  let target = $(this).attr("href");
  console.log(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(target).offset().top - 25
      },
      3000
    );
});

//back to the top
$(window).scroll(function() {
  let position = $(this).scrollTop();

  if (position >= 718) {
    $("#back-to-top").addClass("scrollTop");
  } else {
    $("#back-to-top").removeClass("scrollTop");
  }
});
