document.querySelector("#sort").addEventListener("change", byName);
function byName() {
  let selected = document.querySelector("#sort").value;
  if (selected == "Ascending") {
    detailsFromLS.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }
  if (selected == "Descending") {
    detailsFromLS.sort(function (a, b) {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  }
  appliedJobDisplay(detailsFromLS);
}

document.querySelector("#filter").addEventListener("change", byRole);
function byRole() {
  let selectedRole = document.querySelector("#filter").value;
  let filterValue = detailsFromLS.filter(function (el) {
    return el.role == selectedRole;
  });
  appliedJobDisplay(filterValue);
}

document.querySelector("#nums").addEventListener("change", bySalary);
function bySalary() {
  let selectedSalary = document.querySelector("#nums").value;
  if (selectedSalary == "Ascending") {
    detailsFromLS.sort(function (a, b) {
      return a.salary - b.salary;
    });
  }
  if (selectedSalary == "Descending") {
    detailsFromLS.sort(function (a, b) {
      return b.salary - a.salary;
    });
  }
  appliedJobDisplay(detailsFromLS);
}