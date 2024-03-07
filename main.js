const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");

const updatedDebounceText = debounce((text) => {
  debounceText.textContent = text;
});

input.addEventListener("input", (event) => {
  defaultText.textContent = event.target.value;
  updatedDebounceText(event.target.value);
  //   console.log(updatedDebounceText);
});

function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    //   console.log(...args);
    }, delay);
  };
}
