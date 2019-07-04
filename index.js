//j query to allow arrow to scroll down 1 page at a time
$(document).ready(function() {
  $(".arrow").click(function(event) {
    $("html, body").animate({ scrollTop: "+=970vh" }, 800);
  });
});
