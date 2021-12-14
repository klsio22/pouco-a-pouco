import {
  createElementSpanEmail,
  clearSpanEmail,
  createElementSpanSuject,
  clearSpanSubjet,
  createElementSpanDescript,
  clearSpanDescript,
} from "./create-requerids-contact.js";

$(document).ready(function () {
  const email = document.getElementById("email");

  $(email).on("blur", function () {
    if (this.value.trim() == "") {
      createElementSpanEmail();
    } else {
      clearSpanEmail();
    }
  });

  $(email).on("focus", function () {
    clearSpanEmail();
  });

  $("form").on("blur", "input:eq(1)", function () {
    if (this.value.trim() == "") {
      createElementSpanSuject();
    } else {
      clearSpanSubjet();
    }
  });

  $("form").on("focus", "input:eq(1)", function () {
    clearSpanSubjet();
  });

  $("form .description").on("blur", "textarea:eq(0)", function () {
    if (this.value.trim() == "") {
      createElementSpanDescript();
    } else {
      clearSpanDescript();
    }
  });

  $("form .description textarea").on("focus", function () {
    clearSpanDescript();
  });

  $("form .select1").hide();
  console.log($("form .select0 option:selected").val);
});
