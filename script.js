const optionOne = document.getElementById("option-one");
if (optionOne) {
  optionOne.addEventListener("click", () => {
    alert("You have chosen to FU*K!");
  });
} else {
  console.error("Element with ID 'option-one' not found.");
}

const optionTwo = document.getElementById("option-two");
if (optionTwo) {
  optionTwo.addEventListener("click", () => {
    alert("You have chosen to KILL!");
  });
} else {
  console.error("Element with ID 'option-two' not found.");
}

const optionThree = document.getElementById("option-three");
if (optionThree) {
  optionThree.addEventListener("click", () => {
    alert("You have chosen to MARRY!");
  });
} else {
  console.error("Element with ID 'option-three' not found.");
}