const calculatorContainer = document.getElementById("calculator_container");
const displayArea = document.getElementById("display_area");

calculatorContainer.addEventListener("click", (e) => {
  // 1. تصحيح المقارنة باستخدام ===
  if (e.target.nodeName === "BUTTON") {
    switch (e.target.textContent) {
      case "C":
        clear();
        break;
      case "DEL":
        deleteOneValue(); // تأكد من تعريف هذه الدالة لاحقاً
        break;
      case "=":
        evaluate(); // تأكد من تعريف هذه الدالة لاحقاً
        break;
      default:
        // تمرير النص للـ function بالشكل الصحيح
        addToDisplayArea(e.target.textContent);
    }
  }
});

function clear() {
  displayArea.textContent = "";
}

function addToDisplayArea(value) {
  displayArea.textContent += value;
}

function deleteOneValue() {
  let currentContent = displayArea.textContent;
  displayArea.textContent = currentContent.substring(
    0,
    currentContent.length - 1,
  );
}
function evaluate() {
    try {
        let calculation = eval(displayArea.textContent);
        displayArea.textContent = calculation;
    } catch (error) {
        displayArea.textContent = 'Invalid Operation';
        console.error(error);
    }
}
