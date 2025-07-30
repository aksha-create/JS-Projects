function DeleteRecord() {
  flag = confirm("Delete\nAre you sure you want to delete?");
  if (flag === true) {
    document.querySelector("h1").innerText = "Deleted Record";
    document.querySelector("p").innerText = "Record Deleted Successfully";
  } else {
    document.write("Record Not Deleted");
  }
}
