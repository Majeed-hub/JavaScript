/*
 Write JS Code here
 Initially two cards would be drawn..
 Subsequently one card would be drawn at a time..
 If the total becomes 21, it's a 'blackjack'
 If it exceeds 21, you loose..
*/

// DAY 1
// taking references of two button to disable them
// initially only one button will be visible
let firstButton = document.getElementById("startBtn");
let secondButton = document.getElementById("newBtn");
firstButton.style.display = "inline";
secondButton.style.display = "none";

// taking refences of image tags and hide them initially
let firstImage = document.getElementById("fristImage");
let secondImage = document.getElementById("secondImage");
let thirdImage = document.getElementById("thirdImage");

firstImage.style.display = "none";
secondImage.style.display = "none";
thirdImage.style.display = "none";

//  array of cards
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//creating array of objects
let cardsGroup = new Array();

let card1 = 0;
let card2 = 0;
let card3 = 0;

let card1_Value = 0;
let card2_Value = 0;
let card3_Value = 0;

let sum = 0;

let is_newCard = false;

//DAY 2
for (let i = 0; i < cards.length; i++) {
  let value = parseInt(cards[i]);
  if (cards[i] == "J" || cards[i] == "Q" || cards[i] == "K") value = 10;
  if (cards[i] == "A") value = 11;
  let card = { CARD: cards[i], VALUE: value, uniqueID: i + 1 };
  cardsGroup.push(card);
}
console.log(cardsGroup);

function startGame() {
  document.getElementById("message-el").textContent = " Want to play a round?";
  secondButton.style.display = "inline";
  firstButton.style.display = "none";
  firstImage.style.display = "inline-block";
  secondImage.style.display = "inline-block";

  //genearting random numbers
  let randomNum1 = Math.floor(Math.random() * 13 + 1);
  let randomNum2 = Math.floor(Math.random() * 13 + 1);

  // loop for evaluating cards value
  cardsGroup.forEach((element) => {
    if (element.uniqueID == randomNum1) {
      card1 = element.CARD;
      card1_Value = element.VALUE;
    }
    if (element.uniqueID == randomNum2) {
      card2 = element.CARD;
      card2_Value = element.VALUE;
    }
  });

  //displaying cards and sum
  sum = card1_Value + card2_Value;
  document.getElementById("cards-el").textContent =
    "Cards : " + card1 + " " + card2;
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
  if (card1 == "A") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122516042-e3dcc680-d02b-11eb-9841-750119049e08.png";
  } else if (card1 == "2") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122515964-cd366f80-d02b-11eb-94af-794208c99326.png";
  } else if (card1 == "3") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122515968-cf98c980-d02b-11eb-92f6-0a32d433a5d6.png";
  } else if (card1 == "4") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122515978-d1fb2380-d02b-11eb-811f-0e606a470211.png";
  } else if (card1 == "5") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122515984-d3c4e700-d02b-11eb-8d21-063dbb099bdd.png";
  } else if (card1 == "6") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122515995-d6274100-d02b-11eb-8bf7-92da010f4b79.png";
  } else if (card1 == "7") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122516003-d7f10480-d02b-11eb-9f79-a76430f9fa49.png";
  } else if (card1 == "8") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122516013-daebf500-d02b-11eb-9317-ecc5cb5189e5.png";
  } else if (card1 == "9") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122516018-dcb5b880-d02b-11eb-9d84-95eca5d49c44.png";
  } else if (card1 == "10") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122516025-de7f7c00-d02b-11eb-84e4-3c5391b8cb51.png";
  } else if (card1 == "J") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122516031-e0493f80-d02b-11eb-9422-7b75060a1680.png";
  } else if (card1 == "Q") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122515943-c7d92500-d02b-11eb-9c39-6327418a6650.png";
  } else if (card1 == "K") {
    firstImage.src =
      "https://user-images.githubusercontent.com/84311017/122516055-e808e400-d02b-11eb-8b2e-e1171afd82c3.png";
  }

  //generating image for card 2

  if (card2 == "A") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122516042-e3dcc680-d02b-11eb-9841-750119049e08.png";
  } else if (card2 == "2") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122515964-cd366f80-d02b-11eb-94af-794208c99326.png";
  } else if (card2 == "3") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122515968-cf98c980-d02b-11eb-92f6-0a32d433a5d6.png";
  } else if (card2 == "4") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122515978-d1fb2380-d02b-11eb-811f-0e606a470211.png";
  } else if (card2 == "5") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122515984-d3c4e700-d02b-11eb-8d21-063dbb099bdd.png";
  } else if (card2 == "6") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122515995-d6274100-d02b-11eb-8bf7-92da010f4b79.png";
  } else if (card2 == "7") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122516003-d7f10480-d02b-11eb-9f79-a76430f9fa49.png";
  } else if (card2 == "8") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122516013-daebf500-d02b-11eb-9317-ecc5cb5189e5.png";
  } else if (card2 == "9") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122516018-dcb5b880-d02b-11eb-9d84-95eca5d49c44.png";
  } else if (card2 == "10") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122516025-de7f7c00-d02b-11eb-84e4-3c5391b8cb51.png";
  } else if (card2 == "J") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122516031-e0493f80-d02b-11eb-9422-7b75060a1680.png";
  } else if (card2 == "Q") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122515943-c7d92500-d02b-11eb-9c39-6327418a6650.png";
  } else if (card2 == "K") {
    secondImage.src =
      "https://user-images.githubusercontent.com/84311017/122516055-e808e400-d02b-11eb-8b2e-e1171afd82c3.png";
  }
}

function newCard() {
  if (is_newCard == false) {
    is_newCard = true;

    thirdImage.style.display = "inline-block";

    //genearting random number
    let randomNum3 = Math.floor(Math.random() * 13 + 1);

    cardsGroup.forEach((element) => {
      if (element.uniqueID == randomNum3) {
        card3 = element.CARD;
        card3_Value = element.VALUE;
      }
    });

    sum = card1_Value + card2_Value + card3_Value;
    document.getElementById("cards-el").textContent =
      "Cards : " + card1 + " " + card2 + " " + card3;
    document.getElementById("sum-el").textContent = "sum : " + sum;
    console.log(sum);
    //evaluation of Black jack
    if (sum > 21) {
      console.log("positive");

      document.getElementById("message-el").innerHTML =
        " You Lost!" + "<br>" + "Refresh to play again";
    } else if (sum == 21) {
      document.getElementById("message-el").innerHTML =
        " You win!" + "<br>" + "Refresh to play again";
      secondButton.style.display = "none";
    } else if (sum < 21) {
      document.getElementById("message-el").innerHTML =
        " You Lost!" + "<br>" + "Refresh to play again";
    }
    if (card3 == "A") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122516042-e3dcc680-d02b-11eb-9841-750119049e08.png";
    } else if (card3 == "2") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122515964-cd366f80-d02b-11eb-94af-794208c99326.png";
    } else if (card3 == "3") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122515968-cf98c980-d02b-11eb-92f6-0a32d433a5d6.png";
    } else if (card3 == "4") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122515978-d1fb2380-d02b-11eb-811f-0e606a470211.png";
    } else if (card3 == "5") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122515984-d3c4e700-d02b-11eb-8d21-063dbb099bdd.png";
    } else if (card3 == "6") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122515995-d6274100-d02b-11eb-8bf7-92da010f4b79.png";
    } else if (card3 == "7") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122516003-d7f10480-d02b-11eb-9f79-a76430f9fa49.png";
    } else if (card3 == "8") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122516013-daebf500-d02b-11eb-9317-ecc5cb5189e5.png";
    } else if (card3 == "9") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122516018-dcb5b880-d02b-11eb-9d84-95eca5d49c44.png";
    } else if (card3 == "10") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122516025-de7f7c00-d02b-11eb-84e4-3c5391b8cb51.png";
    } else if (card3 == "J") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122516031-e0493f80-d02b-11eb-9422-7b75060a1680.png";
    } else if (card3 == "Q") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122515943-c7d92500-d02b-11eb-9c39-6327418a6650.png";
    } else if (card3 == "K") {
      thirdImage.src =
        "https://user-images.githubusercontent.com/84311017/122516055-e808e400-d02b-11eb-8b2e-e1171afd82c3.png";
    }
  }
}
// console.log(deck);

// Generating card's image
// arrayOfimages[
//   "https://user-images.githubusercontent.com/84311017/122516042-e3dcc680-d02b-11eb-9841-750119049e08.png",
//   "https://user-images.githubusercontent.com/84311017/122515964-cd366f80-d02b-11eb-94af-794208c99326.png",
//   "https://user-images.githubusercontent.com/84311017/122515968-cf98c980-d02b-11eb-92f6-0a32d433a5d6.png",
//   "https://user-images.githubusercontent.com/84311017/122515978-d1fb2380-d02b-11eb-811f-0e606a470211.png",
//   "https://user-images.githubusercontent.com/84311017/122515984-d3c4e700-d02b-11eb-8d21-063dbb099bdd.png",
//   "https://user-images.githubusercontent.com/84311017/122515995-d6274100-d02b-11eb-8bf7-92da010f4b79.png",
//   "https://user-images.githubusercontent.com/84311017/122516003-d7f10480-d02b-11eb-9f79-a76430f9fa49.png",
//   "https://user-images.githubusercontent.com/84311017/122516013-daebf500-d02b-11eb-9317-ecc5cb5189e5.png",
//   "https://user-images.githubusercontent.com/84311017/122516018-dcb5b880-d02b-11eb-9d84-95eca5d49c44.png",
//   "https://user-images.githubusercontent.com/84311017/122516025-de7f7c00-d02b-11eb-84e4-3c5391b8cb51.png",
//   "https://user-images.githubusercontent.com/84311017/122516031-e0493f80-d02b-11eb-9422-7b75060a1680.png",
//   "(https://user-images.githubusercontent.com/84311017/122515943-c7d92500-d02b-11eb-9c39-6327418a6650.png",
//   "https://user-images.githubusercontent.com/84311017/122516055-e808e400-d02b-11eb-8b2e-e1171afd82c3.png"
// ];

// if(card1 == "A"){ firstImage.src = "https://user-images.githubusercontent.com/84311017/122516042-e3dcc680-d02b-11eb-9841-750119049e08.png";}
// else if(card1 == "2"){firstImage.src = "https://user-images.githubusercontent.com/84311017/122515964-cd366f80-d02b-11eb-94af-794208c99326.png";}
// else if(card1 == "3"){ firstImage.src = "https://user-images.githubusercontent.com/84311017/122515968-cf98c980-d02b-11eb-92f6-0a32d433a5d6.png";}
// else if (card1 == "4"){firstImage.src =   "https://user-images.githubusercontent.com/84311017/122515978-d1fb2380-d02b-11eb-811f-0e606a470211.png";}
// else if(card1 == "5"){ firstImage.src =   "https://user-images.githubusercontent.com/84311017/122515984-d3c4e700-d02b-11eb-8d21-063dbb099bdd.png";}
// else if(card1 == "6"){ firstImage.src =   "https://user-images.githubusercontent.com/84311017/122515995-d6274100-d02b-11eb-8bf7-92da010f4b79.png";}
// else if(card1 == "7"){firstImage.src =   "https://user-images.githubusercontent.com/84311017/122516003-d7f10480-d02b-11eb-9f79-a76430f9fa49.png"}
// else if(card1 == "8"){firstImage.src =   "https://user-images.githubusercontent.com/84311017/122516013-daebf500-d02b-11eb-9317-ecc5cb5189e5.png";}
// else if(card1 == "9"){ firstImage.src =   "https://user-images.githubusercontent.com/84311017/122516018-dcb5b880-d02b-11eb-9d84-95eca5d49c44.png";}
// else if(card1 == "10"){firstImage.src =   "https://user-images.githubusercontent.com/84311017/122516025-de7f7c00-d02b-11eb-84e4-3c5391b8cb51.png";}
// else if(card1 == "J"){firstImage.src =   "https://user-images.githubusercontent.com/84311017/122516031-e0493f80-d02b-11eb-9422-7b75060a1680.png";}
// else if(card1 == "Q"){firstImage.src =   "(https://user-images.githubusercontent.com/84311017/122515943-c7d92500-d02b-11eb-9c39-6327418a6650.png";}
// else if(card1 == "K"){ firstImage.src =   "https://user-images.githubusercontent.com/84311017/122516055-e808e400-d02b-11eb-8b2e-e1171afd82c3.png";}
