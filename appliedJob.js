let detailsFromLS = JSON.parse(localStorage.getItem("details"));
let arrOfBookmark = JSON.parse(localStorage.getItem("bookmarkData")) || [];

appliedJobDisplay(detailsFromLS);

function appliedJobDisplay(detailsFromLS) {
  document.querySelector("tbody").innerHTML = "";
  detailsFromLS.forEach(function (el) {
    let tr = document.createElement("tr");
    document.querySelector("tbody").append(tr);

    let td1 = document.createElement("td");
    td1.innerText = el.name;
    let td2 = document.createElement("td");
    td2.innerText = el.email;
    let td3 = document.createElement("td");
    td3.innerText = el.role;
    let td4 = document.createElement("td");
    td4.innerText = el.salary;
    let td5 = document.createElement("td");
    td5.innerText = "Bookmark";
    td5.addEventListener("click", function () {
      addBookmark(el);
    });
    tr.append(td1, td2, td3, td4, td5);
  });
}

function addBookmark(el) {
  arrOfBookmark.push(el);
  localStorage.setItem("bookmarkData", JSON.stringify(arrOfBookmark));
}