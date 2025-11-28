$(document).ready(function () {
  $(".valentines")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: "10px",
        },
        "slow"
      );
    });
});
