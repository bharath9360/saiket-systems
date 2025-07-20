let princibelAmtEl = document.getElementById("princibelAmt");
let inrestRateEl = document.getElementById("inrestRate");
let numberOfmonthEl = document.getElementById("numberOfmonth");
let emiPerMonthEl = document.getElementById("emiPerMonth");
let errorMessage_tip = document.getElementById("errorMessage");



function calculateEMI(P, annualRate, N) {
  const R = annualRate / (12 * 100); // Convert annual rate (%) to monthly decimal
  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  return emi.toFixed(2); // Round to 2 decimal places
}

function calculatetipamt() {
    if (princibelAmtEl.value === "") {
        errorMessage_tip.textContent = "Please Enter a Valid input";
    } else if (inrestRateEl.value === "") {
        errorMessage_tip.textContent = "Please Enter a Valid input";
    } else if(numberOfmonthEl.value === ""){
        errorMessage_tip.textContent = "Please Enter a Valid input";
    }else{
        errorMessage_tip.textContent = "";
        let p = parseInt(princibelAmtEl.value);
        let r = parseInt(inrestRateEl.value);
        let n= parseInt(numberOfmonthEl.value);
        let emiAmt =  calculateEMI(p, r, n);
        emiPerMonthEl.textContent="₹ "+emiAmt;
    }
}