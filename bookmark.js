let appliedJobDetail = JSON.parse(localStorage.getItem("bookmarkData"));
tableBookmark(appliedJobDetail);
function tableBookmark(appliedJobDetail) {
  appliedJobDetail.forEach(function (el, index) {
    let tr = document.createElement("tr");
    document.querySelector("tbody").append(tr);

    let td1 = document.createElement("td");
    td1.innerText = el.name;
    let td2 = document.createElement("td");
    td2.innerText = el.email;
    let td3 = document.createElement("td");
    td3.innerText = el.role;
    let td4 = document.createElement("td");
    td4.innerText = "DELETE";
    td4.addEventListener("click", function () {
      deleteDetail(index);
    });
    tr.append(td1, td2, td3, td4);
  });
}

function deleteDetail(index) {
  appliedJobDetail.splice(index, 1);
  localStorage.setItem("bookmarkData", JSON.stringify(appliedJobDetail));
  window.location.reload();
}
