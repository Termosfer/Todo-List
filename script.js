/* let input = document.createElement("input");
let input1 = document.createElement("input");
let button = document.createElement("button")
let body = document.querySelector("body");
button.innerHTML = "Add";
body.append(input, input1, button);
button.addEventListener("click",  ()=>{
   let sum = parseInt(input.value) + parseInt(input1.value);
 let h1 = document.createElement("h1")
 h1.innerHTML = sum;
 input.value = "";
 input1.value = "";
 body.appendChild(h1)

}) */

/* let body = document.querySelector("body")
let button = document.createElement("button");
body.append(button);
button.innerHTML = "Button"
button.style.padding  = "10px"
button.style.backgroundColor = "red"
button.addEventListener("click", ()=>{
    let div  = document.createElement("div")
    body.append(div)
    div.style.width = "100px"
    div.style.height = "100px"
    div.style.margin = "10px"
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);
    div.style.backgroundColor = `rgb(${red} ${green} ${blue})`
}) */

/* let arr = [
  {
    id: 1,
    ad: "Thom",
    soyad: "Anderson",
  },
  {
    id: 2,
    ad: "Thomas",
    soyad: "Andrea",
  },
];
let body = document.querySelector("body");
let input = document.createElement("input");
let input1 = document.createElement("input");
let btn = document.createElement("button");
body.append(input, input1, btn);
btn.innerHTML = "Create";

function userList(user) {
  let fullName = document.createElement("h1");
  let deleteBTN = document.createElement("button");
  deleteBTN.innerHTML = "Delete";
  deleteBTN.addEventListener("click",()=>{
    deleteValue(user.id)
    fullName.remove();
    deleteBTN.remove();
  })
  fullName.textContent = `${user.ad} ${user.soyad}`;
  body.append(fullName, deleteBTN);
}

arr.map((ele) => userList(ele));

function create() {
    if(input == "" && input1 == ""){
        alert("Enter something!")
        return;
    }
  let obj = {
    id: arr.length + 1,
    ad: input.value,
    soyad: input1.value,
  };
  arr.push(obj);
  userList(obj)
  input.value = "";
  input1.value = "";
}

btn.addEventListener("click",create);

function deleteValue(id){
    arr.filter(ele=>ele.id !== id)
    console.log(id)
}
 */

/* 
let body = document.querySelector("body");
let div = document.createElement("div");
let input = document.createElement("input");
let input1 = document.createElement("input");
let button = document.createElement("button");
body.append(div, input, input1, button);
body.style.height = "100vh"
div.style.width = "300px";
div.style.height = "200px";
div.style.backgroundColor = "lightgray";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";
div.style.justifyContent = "center";
button.innerHTML = "Button";
input.style.width = "250px";
input1.style.width = "250px";
input.style.padding = "5px";
input1.style.padding = "5px";
input.style.borderRadius = "5px";
input1.style.borderRadius = "5px";
input.style.marginBottom = "10px";
input1.style.marginBottom = "10px";
button.style.width = "260px";
button.style.padding = "5px";
button.style.fontSize = "15px";
button.style.borderRadius = "5px"
body.appendChild(div);
div.append(input, input1, button);


button.addEventListener("click", ()=>{
  let h1 = document.createElement("h1");
  let wholeValue =`${input.value} ${input1.value}` //input.value  +" " + input1.value ;
  h1.innerHTML = wholeValue;
  body.appendChild(h1);
}) */

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
  checkbox.classList = "checkbox"
  
  div.classList = "ul list-group-flush input-group mb-3";
  li.classList =
    "list-group-item border w-82 bg-white d-flex align-items-center ";
  li.innerText = input.value;
  li.style.textWrap = "wrap"
  input.value = "";
  editBtn.classList = "btn btn-outline-secondary bg-success text-white w-7_5";
  editBtn.innerText = "Edit";
  delBtn.classList = "btn btn-outline-secondary bg-primary text-white w-7_5";
  delBtn.innerText = "Delete";
  cardBody.append(div);
  div.append(checkbox, li, editBtn, delBtn );
  delBtn.addEventListener("click", () => {
    delBtn.parentElement.remove();
  });

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through"
    } else {
      li.style.textDecoration = "none"
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

let reo
// https://prod.liveshare.vsengsaas.visualstudio.com/join?E81998C680EAEDE4D4FE869116D4CE7C89EF