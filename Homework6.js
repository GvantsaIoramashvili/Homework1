//Homework 1.

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var button = document.querySelector(".open-modal-button");
    button.addEventListener("click", function() {
      modal.style.display = "block";
    });
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    })
  })

  //Homework 2.

  function changeBackgroundColor() {
    var colorInput = document.getElementById("colorInput").value;
    var body = document.body;
    if (colorInput === "red" || colorInput === "blue" || colorInput === "green" || colorInput === "black" || colorInput === "white") {
      body.style.backgroundColor = colorInput;
    } else {
      alert("Invalid color entered!");
    }
    document.getElementById("colorInput").value = "";
  }

  //Homework 3. 

document.addEventListener("DOMContentLoaded", function() {
    const numbersInput = document.getElementById('numbersInput');
    const calculateAverageButton = document.getElementById('calculateAverageButton');
    const averageResult = document.getElementById('averageResult');
    function calculateAverage() {
      const numbersString = numbersInput.value;
      const numbersArray = numbersString.split(':');
      const numbers = numbersArray.map(Number);
      if (numbers.length > 0 && numbersArray.length > 0) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;
        averageResult.textContent = `The Average is: ${average.toFixed(2)}`;
      } else {
        averageResult.textContent = 'Not Valid';
      }
      numbersInput.value = '';
    }
    calculateAverageButton.addEventListener('click', calculateAverage);
  });