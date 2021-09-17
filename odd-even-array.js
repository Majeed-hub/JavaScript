function Calculate() {
  let displayElement = document.getElementById("result-el");
 
  let array = [10, 15, 25, 20, 17, 24];
  let even = [];
  let odd = [];
  let oddnumberCount = 0;
  let evennumberCount = 0 ;

  for (let i = 0; i < array.length; i++) {
    let remainder = array[i] % 2;
    if (remainder == 0) {
        even.push(array[i]);
        evennumberCount=even.length;
    } else if(remainder==1) {

        odd.push(array[i]);
                oddnumberCount = odd.length;
    }
  }



  displayElement.innerHTML =
    "<h2>" +
    "output" +
    "</h2>" +
    "Even numbers : " +
    even +
    "<br>" +
    "Even numbers count : " +
    evennumberCount +
    "<br>" +
    "odd numbers : " +
    odd +
    "<br>" +
    "0dd numbers count : " +
    oddnumberCount;
}  
