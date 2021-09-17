//define Mobile class
class mobile {
  constructor(N, M, P) {
    this.name = N;
    this.model = M;
    this.price = P;
  }
}

let check = false;
function addAndDisplayMobiles() {
  //getting values from user

  let Name = document.getElementById("mobileName").value;
  let Model = document.getElementById("model").value;
  let price = document.getElementById("price").value;

  let myMobile = new mobile(Name, Model, price);
  let output = "";
  let obj_array = [];
  output +=
    "<tr>" +
    "<td>" +
    myMobile.name +
    "</td>" +
    "<td>" +
    myMobile.model +
    "</td>" +
    "<td>" +
    myMobile.price +
    "</td>" +
    "</tr>";
  obj_array.push(output);

  if (check === false)
   {

    check = true;
    document.getElementById("mobiles-table").innerHTML =
      "<table>" +
      "<tr>" +
      "<th>" +
      "Name" +
      "</th>" +
      "<th>" +
      "Model" +
      "</th>" +
      "<th>" +
      "Price" +
      "</th>" +
      "</tr>" +
      obj_array +
      "</table>";
s
    console.log(check);
  } else {
    document.getElementById("mobiles-table").innerHTML += obj_array;
    console.log("positive");
  }

  console.log(obj_array);
}
