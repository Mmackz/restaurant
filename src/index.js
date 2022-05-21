import "./style.css";

const h1 = document.createElement("h1");
h1.innerText = "Hello World!";
h1.classList.add("hello");

h1.onclick = async () => {
   
   const { default: home } = await import("./modules/home");
   document.getElementById("root").innerHTML += home;
};

document.getElementById("root").appendChild(h1);
