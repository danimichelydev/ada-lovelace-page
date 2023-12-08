let button = document.querySelector("button");
let inputName = document.querySelector("#name");



button.addEventListener("click", (event) => {


  if (inputName.value == "") {
    inputName.classList.add("warning");
    inputName.nextElementSibling.innerHTML =
      "Quero saber quem você é";
    inputName.nextElementSibling.style.opacity = "1";

    event.preventDefault();

    
  }


  passValueName();
});

function passValueName() {
  let name = inputName.value;
  let userName = name

  localStorage.setItem("userName", userName);
  return false;
}