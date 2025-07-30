function RegisterClick() {
  document.getElementById("RegisterContainer").style.display = "block";
  document.getElementById("detailsContainer").style.display = "none";
  document.getElementById("lblName").innerHTML =
    document.getElementById("Name").value;
  document.getElementById("lblPrice").innerHTML =
    document.getElementById("Price").value;
  document.getElementById("lblCity").innerHTML =
    document.getElementById("City").value;
  document.getElementById("lblMfd").innerHTML =
    document.getElementById("manufactured").value;
  stockStatus = "";
  stockChecked = document.getElementById("stock");
  if (stockChecked.checked) {
    stockStatus = "Available";
  } else {
    stockStatus = "Not Available";
  }
  document.getElementById("lblStock").innerHTML = stockStatus;
}

function EditClick() {
  document.getElementById("btnModalRegister").innerHTML = "Save";
  document.getElementById("btnModalRegister").className = "btn btn-info";
}
