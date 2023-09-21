const numericInput = document.getElementById('numericInput');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

incrementButton.addEventListener('click', () => {
  numericInput.stepUp(); // เพิ่มค่า
});

decrementButton.addEventListener('click', () => {
  numericInput.stepDown(); // ลดค่า
});

