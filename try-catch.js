function checkAge() {
  const agefield = document.getElementById("age").value;
  const errorTag = document.getElementById("error");
  console.log(agefield);

  try {
    const age = parseInt(agefield);
    if (isNaN(age)) {
      throw "Enter a proper age number";
    } else if (age < 18) {
      throw "Baccha Kaccha not allowed";
    } else if (age > 30) {
      throw " Murubbi ra aisen na ";
    }
  } catch (err) {
    console.log("ERROR: ", err);
    errorTag.innerText = "Error: " + err;
  } finally {
    console.log("Finally all done all");
  }
}
