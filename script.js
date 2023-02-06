const display = document.querySelector("#display"),
  buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = (e) => {
    e.preventDefault();
    let val = display.innerHTML;
    if (!isNumber(val[val.length - 1]) && !isNumber(item.id)) {
      display.innerHTML = display.innerHTML.substring(0, val.length - 1);
    }

    if (item.id == "clear") {
      display.innerText = "";
    } else if (display.innerText != "0" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = eval(nums.split("").reverse().join(""));
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (item.id == "Deg") {
      display.innerText = display.innerText.slice(0, -1);
    } else {
      display.innerText += item.id;
    }
  };
});
let isNumber = function isNumber(value) {
  return typeof +value === "number" && isFinite(value);
};
