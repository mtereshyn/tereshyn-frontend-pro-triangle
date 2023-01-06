let cathetuses = prompt("Enter two cathetuses", "").split(" ");
let hypotenuse;

function sqrt(thirdNumber) {
  let firstNumber;
  let secondNumber = thirdNumber / 2;
  do {
    firstNumber = secondNumber;
    secondNumber = (firstNumber + thirdNumber / firstNumber) / 2;
  } while (firstNumber != secondNumber);
  return firstNumber;
}

if (cathetuses[0] < 0 || cathetuses[1] < 0) {
  alert("Invalid data");
} else if (cathetuses[0] && cathetuses[1] > 0) {
  hypotenuse = Math.sqrt(
    cathetuses[0] * cathetuses[0] + cathetuses[1] * cathetuses[1]
  );
  alert("Hypotenuse with Math.sqrt: " + hypotenuse);
  alert(
    "Hypotenuse without Math.sqrt: " +
      sqrt(cathetuses[0] * cathetuses[0] + cathetuses[1] * cathetuses[1])
  );
}
