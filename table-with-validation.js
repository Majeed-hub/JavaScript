function runLoop() {
  let n = document.getElementById("number-el").value;
  let resultElement = document.getElementById("result-el");
  let errorElement = document.getElementById("error-el");
  
  resultElement.textContent = "";
  errorElement.textContent = "";
  
  let validation = validate(n);
  if (validation== false){
      console.log('Negative')
    return;
  }
  console.log('positive')
  let table = "<h3> Multiplication table of " + n + "</h3>";
  //let table = tableHeading;
  for (let i = 1; i <= 10; i++) {
   // let line = n + " x " + i + " = " + n * i + "<br>";
     table += n + " x " + i + " = " + n * i + "<br>";

  //  table = table + line;
  }
  resultElement.innerHTML = table;

  for (let i = 0 ; i<1; i++){
      console.log("Testing");
  }
  
  function validate(num){
    if(num == ""){
      errorElement.textContent = " Error : Enter a value";
      resultElement.textContent = "";
      return false;
    }
    else if(num <= 0){
       errorElement.textContent = " Error : Enter a valid value";
      resultElement.textContent = "";
      return false;
    }
  }
}
