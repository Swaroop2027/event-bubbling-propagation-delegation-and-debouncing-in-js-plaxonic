window.onload = function () {
  //   const div = document.querySelector("div");
  //   const span = document.querySelector("span");
  //   const button = document.querySelector("button");

  //   div.addEventListener("click", () => {
  //     console.log("in div");
  //   });

  //   span.addEventListener("click", () => {
  //     console.log("in span");
  //   });

  //   button.addEventListener("click", (event) => {
  //     // event.stopPropagation()
  //     // event.stopImmediatePropagation()
  //     console.log("in button");
  //   });
  //   button.addEventListener("click", (event) => {
  //     // event.stopPropagation()
  //     event.stopImmediatePropagation()

  //     console.log("in button 1");
  //   });

  //   console.log(div);

  const table = document.querySelector("table");
  //   console.log(table);

  table.addEventListener("click", (event) => {
    let target = event.target;
    // console.log(target);
    if (target.tagName !== "TD") return;
    else alert(target.innerText + " clicked");
  });
};
