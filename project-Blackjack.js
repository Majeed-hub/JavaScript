/*
 Write JS Code here
 Initially two cards would be drawn..
 Subsequently one card would be drawn at a time..
 If the total becomes 21, it's a 'blackjack'
 If it exceeds 21, you loose..
*/


// DAY 1
 let firstButton = document.getElementById("startBtn");
 let secondButton = document.getElementById("newBtn");
 firstButton.style.display = "inline";
 secondButton.style.display = "none";

 let firstImage = document.getElementById("fristImage");
 let secondImage = document.getElementById("secondImage");
 let thirdImage = document.getElementById("thirdImage");

 firstImage.style.display = "none";
 secondImage.style.display = "none";
 thirdImage.style.display = "none";

//  array of cards
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let cardsGroup = new Array();

// let randomNum1 = 0;
// let randomNum2 = 0;
// let randomNum3 = 0;

let card_1 = 0;
let card_2 = 0;
let card_3 = 0;

let card_1Value = 0;
let card_2Value = 0;
let card_3Value = 0;

let sum = 0;

let is_startGame = false;
let is_newCard = false;


//DAY 2
for (let i = 0; i < cards.length; i++) {
  let value = parseInt(cards[i]);
  if (cards[i] == "J" || cards[i] == "Q" || cards[i] == "K") value = 10;
  if (cards[i] == "A") value = 11;
  let card = { CARD: cards[i], VALUE: value, uniqueID : i+1 };
  cardsGroup.push(card);
}
  console.log(cardsGroup);

function startGame() {

 if(is_startGame == false){
 is_startGame = true;
 document.getElementById("message-el").textContent = " Want to play a round?";
 secondButton.style.display = "inline";
 firstButton.style.display = "none";
 firstImage.style.display = "inline-block";
 secondImage.style.display = "inline-block";

    //genearting random numbers
    let randomNum1 = Math.floor((Math.random()* 13) + 1);
    let randomNum2 = Math.floor((Math.random()* 13) + 1);
   
    // loop for evaluating cards value
    cardsGroup.forEach((element) => {
      if (element.uniqueID == randomNum1) {
        card_1 = element.CARD;
        card_1Value = element.VALUE;
      }
      if (element.uniqueID == randomNum2) {
        card_2 = element.CARD;
        card_2Value = element.VALUE;
      }
    });

    //displaying cards and sum
    sum = card_1Value + card_2Value;
    document.getElementById("cards-el").textContent =
      "Cards : " + card_1 + " " + card_2;
    document.getElementById("sum-el").textContent = "sum : " + sum;
    
    console.log(sum);

    //evaluation of Black jack
    if (sum > 21) {
      console.log("positive");
      document.getElementById("message-el").textContent = " You Lost!";
    } else if (sum == 21) {
      document.getElementById("message-el").textContent = " You win!";
      secondButton.style.display = "none";

    }

    // DAY 3
    // generating image for card 1
    if (card_1 == "A") {
      firstImage.src = "../Assets/images/A.png";
    } else if (card_1 == "2") {
      firstImage.src = "../Assets/images/2.png";
    } else if (card_1 == "3") {
      firstImage.src = "../Assets/images/3.png";
    } else if (card_1 == "4") {
      firstImage.src = "../Assets/images/4.png";
    } else if (card_1 == "5") {
      firstImage.src = "../Assets/images/5.png";
    } else if (card_1 == "6") {
      firstImage.src = "../Assets/images/6.png";
    } else if (card_1 == "7") {
      firstImage.src = "../Assets/images/7.png";
    } else if (card_1 == "8") {
      firstImage.src = "../Assets/images/8.png";
    } else if (card_1 == "9") {
      firstImage.src = "../Assets/images/9.png";
    } else if (card_1 == "10") {
      firstImage.src = "../Assets/images/10.png";
    } else if (card_1 == "J") {
      firstImage.src = "../Assets/images/J.png";
    } else if (card_1 == "Q") {
      firstImage.src = "../Assets/images/Q.png";
    } else if (card_1 == "K") {
      firstImage.src = "../Assets/images/K.png";
    }

    //generating image for card 2

    if (card_2 == "A") {
      secondImage.src = "../Assets/images/A.png";
    } else if (card_2 == "2") {
      secondImage.src = "../Assets/images/2.png";
    } else if (card_2 == "3") {
      secondImage.src = "../Assets/images/3.png";
    } else if (card_2 == "4") {
      secondImage.src = "../Assets/images/4.png";
    } else if (card_2 == "5") {
      secondImage.src = "../Assets/images/5.png";
    } else if (card_2 == "6") {
      secondImage.src = "../Assets/images/6.png";
    } else if (card_2 == "7") {
      secondImage.src = "../Assets/images/7.png";
    } else if (card_2 == "8") {
      secondImage.src = "../Assets/images/8.png";
    } else if (card_2 == "9") {
      secondImage.src = "../Assets/images/9.png";
    } else if (card_2 == "10") {
      secondImage.src = "../Assets/images/10.png";
    } else if (card_2 == "J") {
      secondImage.src = "../Assets/images/J.png";
    } else if (card_2 == "Q") {
      secondImage.src = "../Assets/images/Q.png";
    } else if (card_2 == "K") {
      secondImage.src = "../Assets/images/K.png";
    }
 }
}

function newCard() {
if(is_newCard == false){

  is_newCard = true;

 thirdImage.style.display = "inline-block";



  //genearting random number
  let randomNum3 = Math.floor((Math.random()*13)+1);
    

  cardsGroup.forEach((element) => {
    if (element.uniqueID == randomNum3) {
      card_3 = element.CARD;
      card_3Value = element.VALUE;
    }
  });

  sum = card_1Value + card_2Value + card_3Value;
  document.getElementById("cards-el").textContent = "Cards : " + card_1 + " " + card_2 + " " + card_3;
  document.getElementById("sum-el").textContent = "sum : " + sum;
  console.log(sum);
  //evaluation of Black jack
  if (sum > 21) {
    console.log("positive");

    document.getElementById("message-el").innerHTML =  " You Lost!" + "<br>" + "Refresh to play again";
  } else if (sum == 21) {
    document.getElementById("message-el").innerHTML =  " You win!" + "<br>" + "Refresh to play again";
    secondButton.style.display = "none";

  }
  else if(sum<21){
    document.getElementById("message-el").innerHTML = " You Lost!" + "<br>" + "Refresh to play again";
  }
  if (card_3 == "A") {
    thirdImage.src = "../Assets/images/A.png";
  } else if (card_3 == "2") {
    thirdImage.src = "../Assets/images/2.png";
  } else if (card_3 == "3") {
    thirdImage.src = "../Assets/images/3.png";
  } else if (card_3 == "4") {
    thirdImage.src = "../Assets/images/4.png";
  } else if (card_3 == "5") {
    thirdImage.src = "../Assets/images/5.png";
  } else if (card_3 == "6") {
    thirdImage.src = "../Assets/images/6.png";
  } else if (card_3 == "7") {
    thirdImage.src = "../Assets/images/7.png";
  } else if (card_3 == "8") {
    thirdImage.src = "../Assets/images/8.png";
  } else if (card_3 == "9") {
    thirdImage.src = "../Assets/images/9.png";
  } else if (card_3 == "10") {
    thirdImage.src = "../Assets/images/10.png";
  } else if (card_3 == "J") {
    thirdImage.src = "../Assets/images/J.png";
  } else if (card_3 == "Q") {
    thirdImage.src = "../Assets/images/Q.png";
  } else if (card_3 == "K") {
    thirdImage.src = "../Assets/images/K.png";
  }
}
}
// console.log(deck);

// Generating card's image 
// arrayOfimages[
//   "../Assets/images/A.png",
//   "../Assets/images/2.png",
//   "../Assets/images/3.png",
//   "../Assets/images/4.png",
//   "../Assets/images/5.png",
//   "../Assets/images/6.png",
//   "../Assets/images/7.png",
//   "../Assets/images/8.png",
//   "../Assets/images/9.png",
//   "../Assets/images/10.png",
//   "../Assets/images/J.png",
//   "../Assets/images/Q.png",
//   "../Assets/images/K.png"
// ];

// if(card_1 == "A"){ firstImage.src = "../Assets/images/A.png";}
// else if(card_1 == "2"){firstImage.src = "../Assets/images/2.png";}
// else if(card_1 == "3"){ firstImage.src = "../Assets/images/3.png";}
// else if (card_1 == "4"){firstImage.src =   "../Assets/images/4.png";}
// else if(card_1 == "5"){ firstImage.src =   "../Assets/images/5.png";}
// else if(card_1 == "6"){ firstImage.src =   "../Assets/images/6.png";}
// else if(card_1 == "7"){firstImage.src =   "../Assets/images/7.png"}
// else if(card_1 == "8"){firstImage.src =   "../Assets/images/8.png";}
// else if(card_1 == "9"){ firstImage.src =   "../Assets/images/9.png";}
// else if(card_1 == "10"){firstImage.src =   "../Assets/images/10.png";}
// else if(card_1 == "J"){firstImage.src =   "../Assets/images/J.png";}
// else if(card_1 == "Q"){firstImage.src =   "../Assets/images/Q.png";}
// else if(card_1 == "K"){ firstImage.src =   "../Assets/images/K.png";}


