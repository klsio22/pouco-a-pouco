import {
  createElementSpanEmail,
  clearSpanEmail,
  createElementSpanSuject,
  clearSpanSubjet,
  createElementSpanDescript,
  clearSpanDescript,
  createElementSpanDoubt,
  clearSpandoubt,
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

  $(".select1").hide();

  $("form .select0 select")
    .change(function () {
      let value = 0;

      $("select option:selected").each(function () {
        value = $("select option:selected").val();
      });

      //console.log(value);

      if (value > 0) {
        $("form .select0").next().show();
      }
    })
    .trigger("change");

  //Submit no Form
  $("form").submit(function (event) {

    

    if (email.value.trim() == "") {
      clearSpanEmail();
      createElementSpanEmail();
    } else {
      clearSpanEmail();
    }

    if ($("form .subject").val().trim() == "") {
      clearSpanSubjet();
      createElementSpanSuject();
    } else {
      clearSpanSubjet();
    }

    if ($(".description textarea").val().trim() == "") {
      clearSpanDescript();
      createElementSpanDescript();
    } else {
      clearSpanDescript();
    }

    $("form .select0 select")
      .change(function () {
        let value = 0;

        $("select option:selected").each(function () {
          value = $("select option:selected").val();
        });

        //console.log(value);

        if (value > 0) {
          $("form .select0").next().show();
          clearSpandoubt();
        } else {
          clearSpandoubt();
          createElementSpanDoubt();
        }
      })
      .trigger("change");

    event.preventDefault();
  });
});
