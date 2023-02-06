window.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector("#display"),
    buttons = document.querySelectorAll("button"),
    btnOperators = document.querySelectorAll(".btn-operator");

  buttons.forEach((item) => {

    item.onclick = (e) => {
      e.preventDefault();
      // console.log(item.classList.contains("btn-operator"));


      if (item.id == "clear") {
        display.innerText = "";
      } else if (display.innerText != "0" && item.id == "equal") {
        display.innerText = eval(display.innerText);
      } else if (display.innerText == "" && item.id == "equal") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else if (item.id == "Deg") {
        // let string = display.innerText.toString();
        // display.innerText = string.slice(0, string.length - 1);
        display.innerText = display.innerText.slice(0, -1)
      } else {
        if(item.classList.contains('btn-operator')) {
          console.log(item)
          display.innerText += item.id;
        } else {
          display.innerText += item.id;
        }
      }
    };
  });
});
