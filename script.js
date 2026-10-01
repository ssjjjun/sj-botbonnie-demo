(function () {
  "use strict";
  // Controls that are not evidenced by the reference screenshot stay inert.
  document.querySelectorAll("[data-inert]").forEach(function (el) {
    el.addEventListener("click", function (e) { e.preventDefault(); });
  });

  var btn = document.querySelector(".menu-btn");
  var gnb = document.getElementById("gnb");
  if (btn && gnb) {
    btn.addEventListener("click", function () {
      var open = gnb.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "전체 메뉴 닫기" : "전체 메뉴 열기");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && gnb.classList.contains("is-open")) { btn.click(); btn.focus(); }
    });
  }

  var top = document.querySelector(".to-top");
  if (top) top.addEventListener("click", function () { window.scrollTo({ top: 0 }); });
})();
