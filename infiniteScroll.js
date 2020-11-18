window.addEventListener("load", addEvents);

var debounce;
let count = 0;
let root = document.getElementById("root");

function addEvents() {
  addElements(25);
  //   root.addEventListener("scroll", addMore);
  root.addEventListener(
    "scroll",
    throttle(function () {
      return addElements(25);
    }, 3000)
  );
}

const throttle = (func, delay) => {
  let flag;
  return function () {
    const args = arguments;
    const context = this;
    if (!flag) {
      func.apply(context, args);
      flag = true;
      setTimeout(() => (flag = false), delay);
    }
  };
};

// function addMore(event) {

//     debounce && clearTimeout(debounce);
//     debounce = setTimeout(() => {
//       // console.log("here")
//       if (
//         event.target.scrollTop ===
//         event.target.scrollHeight - event.target.clientHeight
//       ) {
//         addElements(25);
//       }
//     }, 3000);
//   if (count >= 100) root.removeEventListener("scroll", addMore);
// }

function addElements(num) {
  //   console.log(count);
  if (count <= 75) {
    for (let i = 0; i < num; i++) {
      count += 1;
      let div = document.createElement("div");
      div.classList.add("box");
      div.textContent = `Masai Student ${count}`;
      root.append(div);
    }
  }
}
