addEventListener("load", (event) => {
  //para que cuando cargue ejecute el interior
  // Get the modal
  var modal = document.getElementById("myModal");
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  var btn1 = document.getElementById("myBtn1");
  var btn2 = document.getElementById("myBtn2");
  var btn3 = document.getElementById("myBtn3");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span1 = document.getElementsByClassName("close")[1];
  var span2 = document.getElementsByClassName("close")[2];
  var span3 = document.getElementsByClassName("close")[3];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
    document.body.style.overflowY = "hidden";
  };
  btn1.onclick = function () {
    modal1.style.display = "block";
    document.body.style.overflowY = "hidden";
  };
  btn2.onclick = function () {
    modal2.style.display = "block";
    document.body.style.overflowY = "hidden";
  };
  btn3.onclick = function () {
    modal3.style.display = "block";
    document.body.style.overflowY = "hidden";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflowY = "auto";
  };

  span1.onclick = function () {
    modal1.style.display = "none";
    document.body.style.overflowY = "auto";
  };
  span2.onclick = function () {
    modal2.style.display = "none";
    document.body.style.overflowY = "auto";
  };
  span3.onclick = function () {
    modal3.style.display = "none";
    document.body.style.overflowY = "auto";
  };
});
