const darkBtn = document.querySelector("#dark");
const wrapper = document.querySelector(
    ".wrapper"
);
darkBtn.addEventListener("click",darkMode);

function darkMode(){
    wrapper.classList.toggle("night");
    console.log("dark mode enabled");
}