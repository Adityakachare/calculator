let string = "";
let memory = null; // Initialize memory to null
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "M") {
      // Store the current input field value in memory
      memory = string;
    } else if (e.target.innerHTML == "MC") {
      // Clear the memory
      memory = null;
    } else if (e.target.innerHTML == "M+") {
      // Add the value stored in memory to the current input field value
      if (memory !== null) {
        string = parseFloat(string) + parseFloat(memory);
      }
    } else if (e.target.innerHTML == "M-") {
      // Subtract the value stored in memory from the current input field value
      if (memory !== null) {
        string = parseFloat(string) - parseFloat(memory);
      }
    } else if (e.target.innerHTML == "MR") {
      // Display the value from memory if it's not null
      if (memory !== null) {
        string = memory;
      }
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
