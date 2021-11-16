setInterval(window.onload = () => {
  elementRow.changerClass();
}, 10);

const elementRow = {
  content: document.querySelector(".content"),

  changerClass() {

    elementRow.content.classList.toggle("s12", window.innerWidth < 1024)
    // console.log("estou aqui")

    elementRow.content.classList.toggle("s6", window.innerWidth > 1024)

  }

}