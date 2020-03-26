const button = document.getElementById("button");
button.addEventListener("click", generateTip);

function generateTip() {
  const check = document.getElementById("billAmount").value;
  const percentage = document.getElementsByName("tip");
  var value = " ";
  for (var i = 0; i < percentage.length; i++) {
    if (percentage[i].checked) {
      value = percentage[i].value;
    }
  }

  const tip = (value * check) / 100;
  const show = document.getElementById("tip-result");
  show.innerHTML = "You should tip the server : " + tip + "$";
}
