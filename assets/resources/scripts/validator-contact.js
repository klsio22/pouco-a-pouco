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
    event.preventDefault();

    let formSubjet = $("form .subject").val();
    let descriptionTextArea = $(".description textarea").val();
    let selectValue = 0;
    let selectValue2 = 0;

    if (email.value.trim() == "") {
      clearSpanEmail();
      createElementSpanEmail();
    } else {
      clearSpanEmail();
    }

    if ($.trim(formSubjet) == "") {
      clearSpanSubjet();
      createElementSpanSuject();
    } else {
      clearSpanSubjet();
    }

    if ($.trim(descriptionTextArea) == "") {
      clearSpanDescript();
      createElementSpanDescript();
    } else {
      clearSpanDescript();
    }

    $("form .select0 select")
      .change(function () {
        $("select option:selected").each(function () {
          selectValue = $("select option:selected").val();
        });

        //console.log(value);
        if (selectValue > 0) {
          $("form .select0").next().show();
          clearSpandoubt();
        } else {
          clearSpandoubt();
          createElementSpanDoubt();
        }
      })
      .trigger("change");

    $("form .select1 select")
      .change(function () {
        $("select option:selected").each(function () {
          selectValue2 = $("select option:selected").val();
        });
        console.log(selectValue2);
        if (selectValue2 < 1) {
          alert("O campo Dúvidas e solicitações não está selecionado");
        }
      })
      .trigger("change");

    if (
      email.value.trim() != "" &&
      formSubjet != "" &&
      descriptionTextArea != "" &&
      selectValue > 0 && selectValue2 > 0

    ) {
      alert("Solicitação enviada com sucesso!");
      return true;
    }
  });




});
