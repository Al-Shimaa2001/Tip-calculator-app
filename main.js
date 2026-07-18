const bill = document.querySelector("#bill");
const tipsBtn = document.querySelectorAll("button.btn");
let billValue = 0;

function handleGetBillValue() {
  bill.addEventListener("keyup", () => {
    billValue = Number(bill.value) || 0;

    console.log(billValue);
  });
  return billValue;
}
handleGetBillValue();

let tipAmount = 0;
let totalAmount = 0;
const calculateTips = () => {
  tipsBtn.forEach((e) => {
    e.addEventListener("click", () => {
      const tipPercentage = Number(e.value);
      tipAmount = billValue * (tipPercentage / 100);
      totalAmount = billValue + tipAmount;

      console.log("قيمة البقشيش:", tipAmount);
      console.log("المجموع الكلي:", totalAmount);
    });
    return (tipAmount, totalAmount);
  });
};

calculateTips();
const numOfPeople = document.querySelector("#numOfPeople");
const tipsForOnePerson = document.querySelector(".tipAmount");
const personTotal = document.querySelector(".personTotal");

let numPeople = 0;
const numberOfPeople = () => {
  numOfPeople.addEventListener("keyup", () => {
    numPeople = Number(numOfPeople.value) || 0;
    const tipsForOne = Math.ceil(tipAmount / numPeople);

    tipsForOnePerson.innerHTML = `$${tipsForOne} `;
    const totalBill = Math.ceil(totalAmount / numPeople);
    personTotal.innerHTML = `$${totalBill}`;
    console.log(tipsForOne);
    console.log(totalBill);
  });
};
numberOfPeople();
const reset = document.querySelector(".reset");
const handelReset = () => {
  reset.addEventListener("click", () => {
    tipsForOnePerson.innerHTML = "$0.00";
    personTotal.innerHTML = "$0.00";
  });
};
handelReset();
