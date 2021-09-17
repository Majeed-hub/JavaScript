function runLoop() {
  let n = document.getElementById("number-el").value;
  let resultElement = document.getElementById("result-el");
  let tableHeading = "<h3> Multiplication table of " + n + "</h3>";
  let table = tableHeading;
  for (let i = 1; i <= 10; i++) {
    let line = n + " x " + i + " = " + n * i + "<br>";
    table = table + line;
    console.log(n*i);
  }
  resultElement.innerHTML = table;
}
