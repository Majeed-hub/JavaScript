function CalcTotal(){
  let DisplayTotal = document.getElementById("display");
//   let subject1 = document.getElementById("Maths");
//   let subject2 = document.getElementById("Science");
//   let subject3 = document.getElementById("English");
  let math = parseInt( document.getElementById("Maths").value);
  let Science = parseInt(document.getElementById("Science").value);
  let English = parseInt(document.getElementById("English").value);

  let marks = [];
  let totalMarks = 0;
  marks.push(math);  
  marks.push(Science); 
  marks.push(English);
console.log(marks);
  for(let i= 0; i<marks.length; i++){
    totalMarks = totalMarks + marks[i];
    console.log(marks[i]);
  }
DisplayTotal.textContent = totalMarks;

}