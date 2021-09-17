function classify() {
  let DisplayElement = document.getElementById("display");

  // let result = document.getElementById("array-el");

  let marks = [70, 80, 85, 65, 57, 35, 40];
  let firstClass = [];
  let secondClass = [];
  let failed = [];
  let firstClassRollno = [];
  let secondClassRollno = [];
  let failedRollno = [];
  let firstClassresult = "";
  let secondClassresult = "";
  let failedresult = "";

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 70) {

      firstClass.push(marks[i]);
      firstClassRollno.push(i + 1);
      
      firstClassresult += firstClassRollno[i] + " - " + firstClass[i] +",  ";
      //console.log(firstClassresult);
    } 
    else if (marks[i] >= 40) {

      secondClass.push(marks[i]);
      secondClassRollno.push(i + 1);
     
      //console.log(secondClass);\
      for(let i=0; i<secondClass.length; i++){
      secondClassresult += secondClassRollno[i] + " - " + secondClass[i] + ",  ";

      }
     // console.log(secondClassresult);

    } else {

       failed.push(marks[i]);
      failedRollno.push(i + 1);
      
      
     // failedresult +=  failedRollno + " - " + failed + ",  ";

     for (let i = 0; i < failed.length; i++) {
       secondClassresult += failedRollno[i] + " - " + failed[i] + ",  ";
     }
    }
  }
 
  DisplayElement.innerHTML =
    "Result" +
    "<br>" +
    "first class" +
    "<br>" +
    firstClassresult +
    "<br>" +
    "second class" +
    "<br>" +
    secondClassresult +
    +"<br>" +
    "failed" +
    failedresult;

  // DisplayElement.innerHTML =
  //   "<strong>results</strong> " + "<br>"+
  //   marks +
  //   "<br>" +
  //   " first class " +
  //   firstClass +
  //   " first class Roll no " +
  //   firstClassRollno +
  //   "<br>" +
  //   " second class: " +
  //   secondClass +
  //   " second class Roll no " +
  //   secondClassRollno +
  //   "<br>" +
  //   " failed : " +
  //   failed +
  //   " failed Roll no " +
  //   failedRollno;
  //   result.innerHTML = "number of students who scored above 70%  " + firstClassLenght +"<br>"+
  //   "number of student who scored above 40%  " + secondClassLenght +"<br>"+
  //   "number of number who failed " + failedLenght +"<br>";
}
