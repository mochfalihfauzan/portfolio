$(document).ready(function () {
  $("button.btn").click(function () {
    if ($("input#nama").val().length == 0) {
      return alert("Masukkan kontak dengan lengkap");
    }
  });
  $(".navbar-nav a").on("click", function () {
    $(".navbar-nav").find("a.active").removeClass("active");
    $(this).addClass("active");
  });
});
