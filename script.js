let h2 = document.getElementById("h2");
console.log(h2.innerText);

h2.innerText = " ❤️ i love you chinna ❤️";

let box1 = document.getElementById("box1");
console.dir(box1.innerText);
box1.innerText = "this is first box";

let box2 = document.getElementById("box2");
console.dir(box2.innerText);
box2.innerText = "this is second box";

let box3 = document.getElementById("box3");
console.dir(box3.innerText);
box3.innerText = "this is third box";

let button = document.createElement("button");
button.innerText = "click me";
console.log(button);
button.onclick = (e) => {
  console.log("the red button was clicked by you");
  a = 26;
  a++;
  console.log(a);
  console.log(e);
};

button.style.backgroundColor = "red";
button.style.color = "white";
button.style.borderRadius = "10px";
button.style.height = "30px";
button.style.width = "80px";
button.style.border = "2px solid gold";

let body = document.querySelector("body");
body.append(button);

let h1 = document.createElement("h1");
h1.innerText = "hello codars";

let p = document.querySelector("p");
p.prepend(h1);

let h3 = document.createElement("h3");
h3.innerText = "love coding..❤️";

let box = document.querySelectorAll("box");
box1.prepend(h3);

let btn = document.querySelector("#btn");
console.log(btn);
btn.onclick = (e) => {
  console.log("the green button was clicked by you");
  let a = 25;
  a++;
  console.log(a);
  console.log(e);
};

box1.append("🙏");
box2.append("🙏");
box3.append("🙏");

let heading = document.createElement("h3");
console.log(heading);
heading.innerText = " love coading..❤️";
box2.prepend(heading);

let div = document.querySelector("div");
div.onmouseover = (e) => {
  console.log(e);
  console.log("u cane in this div");
};

let box4 = document.querySelector("#box4");
box4.onmouseover = (e) => {
  console.log("hello sir");
  console.log(e);
};
let btn2 = document.querySelector("#btn");
btn2.onmouseover = () => {
  console.log("u came to this button");
};

let box5 = (document.querySelector("#box5").style.backgroundColor = "pink");

let box6 = document.querySelector("#box5");
box6.onmouseover = (e) => {
  console.log("hello sir you are on box5");
  console.log(e);
};

let mai = document.querySelector(".mai");
mai.onmouseover = (e) => {
  console.log("hello sir you are on mai");
  console.log(e);
};

let btn12 = document.createElement("button");
btn12.style.backgroundColor = "red";
btn12.style.color = "white";
btn12.style.borderRadius = "10px";
btn12.style.height = "30px";
btn12.style.width = "80px";
btn12.style.border = "2px solid gold";
console.log(btn12);
btn12.innerText = "click me";
let mai1 = document.querySelector(".main");
mai1.append(btn12);

btn12.onclick = (e) => {
  console.log("i love you chinna..❤️");
  console.log(e);
};

btn13 = document.createElement("button");
btn13.style.backgroundColor = "brown";
btn13.style.margin = "10px";
btn13.style.color = "white";
btn13.style.borderRadius = "10px";
btn13.style.height = "30px";
btn13.style.width = "80px";
btn13.style.border = "2px solid gold";
console.log(btn13);
btn13.innerText = "click me";

body1 = document.querySelector("body");
body1.append(btn13);

let currmode = "light";
btn13.addEventListener("click", (e) => {
  if (currmode === "light") {
    body1.style.backgroundColor = "black";
    body1.style.color = "white";
    currmode = "dark";
    console.log("dark mode");
  } else {
    body1.style.backgroundColor = "white";
    body1.style.color = "black";
    currmode = "light";
    console.log("light mode");
  }
});
