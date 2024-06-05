// ! START
let body = document.querySelector("body");
let input = document.querySelector(".form-control");
let addList = document.querySelector("#button-addon2");
let removeAll = document.querySelector("#button-addon3");
let cardBody = document.querySelector(".card-body");

document.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    addLister();
  }
});

addList.addEventListener("click", () => {
  addLister();
});

removeAll.addEventListener("click", () => {
  cardBody.innerHTML = "";
});

function addLister() {
  if (input.value === "" || input.value === " ") {
    alert("You have to right something!");
    return;
  }
  let div = document.createElement("div");
  let li = document.createElement("li");
  let editBtn = document.createElement("button");
  let delBtn = document.createElement("button");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList = "checkbox";

  div.classList = "ul list-group-flush input-group mb-3";
  li.classList =
    "list-group-item border w-82 bg-white d-flex align-items-center ";
  li.innerText = input.value;
  li.style.textWrap = "wrap";
  input.value = "";
  editBtn.classList = "btn btn-outline-secondary bg-success text-white w-7_5";
  editBtn.innerText = "Edit";
  delBtn.classList = "btn btn-outline-secondary bg-primary text-white w-7_5";
  delBtn.innerText = "Delete";
  cardBody.append(div);
  div.append(checkbox, li, editBtn, delBtn);
  delBtn.addEventListener("click", () => {
    delBtn.parentElement.remove();
  });

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  editBtn.addEventListener("click", () => {
    let glass = document.querySelector(".glass");
    let input1 = document.querySelector(".container2 > input");
    let cancel = document.querySelectorAll(".button-div> button")[0];
    let update = document.querySelectorAll(".button-div> button")[1];
    glass.style.display = "block";
    input1.value = li.innerText;

    cancel.addEventListener("click", () => {
      glass.style.display = "none";
      input1.value = "";
    });
    update.addEventListener("click", () => {
      li.innerText = input1.value;
      glass.style.display = "none";
    });
  });
}
