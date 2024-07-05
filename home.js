document.querySelector("form").addEventListener("submit", addDetails);

let arrOfDetails = JSON.parse(localStorage.getItem("details")) || [];

function addDetails() {
  let obj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    role: document.querySelector("#role").value,
    salary: document.querySelector("#salary").value,
  };
  arrOfDetails.push(obj);
  localStorage.setItem("details", JSON.stringify(arrOfDetails));
}
