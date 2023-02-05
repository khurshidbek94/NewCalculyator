window.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector("#display"),
    buttons = document.querySelectorAll("button");

  buttons.forEach((item) => {
    item.onclick = (e) => {
      e.preventDefault();
      console.log(display.value);

      if (item.id == "clear") {
        display.innerText = "0";
      } else if (display.innerText != "0" && item.id == "equal") {
        display.innerText = eval(display.innerText);
      } else if (display.innerText == "" && item.id == "equal") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else if (item.id == 'Deg' ) {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length -1);
      } else {
        display.innerText += item.id;
        console.log(display.innerText)
      }
    };
  });
});
