function effect(e) {
  let selection = document.querySelectorAll('.selection')

  let x = e.clientX;
  let y = e.clientY;
 let coor = ": (" + x + "," + y + ")";

  console.log(coor); 
}