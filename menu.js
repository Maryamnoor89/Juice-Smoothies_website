//Quantiiy selector 
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");

decreaseBtn.addEventListener("click", () => {
  let current = parseInt(quantityInput.value);
  if(current > 1) quantityInput.value = current - 1;
});

increaseBtn.addEventListener("click", () => {
  let current = parseInt(quantityInput.value);
  quantityInput.value = current + 1;
});

//Form errors 
document.getElementById("ordernow_btn").addEventListener("click", function () {
  // First 4 required fields
  const fields = ["name", "number", "address", "juice"];
  let isValid = true;

  fields.forEach(id => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      isValid = false;
    }
  });

  if (isValid) {
    alert("Order Placed");
  } else {
    alert("⚠️ Please fill all required fields first.");
  }
});

//Show Close popup 
function showPopup() {
  document.getElementById("popupForm").classList.add("show");
}

function closePopup() {
  document.getElementById("popupForm").classList.remove("show");
}


