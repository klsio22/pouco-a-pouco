const createElementSpanEmail = () => {
  $(".required-email")
    .append("<span> Solicitante: E-mail: não pode ficar em branco</span>")
    .addClass("error");
};


const createElementSpanSuject = () => {
  $("#required-subject")
    .append("<span> Assunto: não pode ficar em branco </span>")
    .addClass("error");
};

const createElementSpanDescript = () => {
  $("div .description")
    .children("div")
    .append("<span> Descrição: não pode ficar em branco </span>")
    .css({
      color: "red",
      border: "1px solid red",
      " border-radius": "2px",
      padding: "5px",
      "margin-bottom": " 5px",
    });
};


const clearSpanEmail = function () {
  $(".required-email").removeClass("error").html("");
};

const clearSpanSubjet = function () {
  $("span").parent(".required-subject").removeClass("error").html("");
};

const clearSpanDescript = () => {
  $(".description div").html("").css({border: ""});
};


export {
  createElementSpanEmail,
  clearSpanEmail,
  createElementSpanSuject,
  clearSpanSubjet,
  createElementSpanDescript,
  clearSpanDescript,
};
