function AmtTextBoxChanged() {
  document.getElementById("rangeAmt").value =
    document.getElementById("txtAmount").value;
}
function RangeAmtChanged() {
  document.getElementById("txtAmount").value =
    document.getElementById("rangeAmt").value;
}
function YearsTxtBoxChanged() {
  document.getElementById("rangeYears").value =
    document.getElementById("txtYears").value;
}
function RangeYearsChanged() {
  document.getElementById("txtYears").value =
    document.getElementById("rangeYears").value;
}
function RateTxtBoxChanged() {
  document.getElementById("rangeRate").value =
    document.getElementById("txtRate").value;
}
function RangeRateChanged() {
  document.getElementById("txtRate").value =
    document.getElementById("rangeRate").value;
}
function CalculateEMI() {
  var p = parseInt(document.getElementById("txtAmount").value);
  var n = parseInt(document.getElementById("txtYears").value);
  var r = parseFloat(document.getElementById("txtRate").value) / 12 / 100;
  var emi = (p * r * Math.pow(1 + r, n)) / Math.pow(1 + r, n) - 1;
  document.getElementById("result").innerHTML =
    "Your monthy installment amount is <b><span class='text-primary'> &#8377;" +
    Math.round(emi) +
    "</span></b> ";
}
