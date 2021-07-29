let cardOneId = "";
let cardTwoId = "";
let numOfCards = 0;

function getCardId(clicked_id) {
  if (numOfCards == 0) {
    console.log("Number of cards is: " + numOfCards);
    cardOneId = clicked_id;
    cardOneValue = document.getElementById(clicked_id).src;
    numOfCards = 1;
    document.getElementById(clicked_id).style =
      "border-width: 10px; border-style: solid; border-color: green;";
  } else if (numOfCards == 1) {
    console.log("Number of cards is: " + numOfCards);
    cardTwoId = clicked_id;
    cardTwoValue = document.getElementById(clicked_id).src;
    numOfCards = 3;
    document.getElementById(clicked_id).style =
      "border-width: 10px; border-style: solid; border-color: green;";
    checkForMatch(cardOneValue, cardTwoValue);
  } else {
    // Do nothing for now
  }
}

function checkForMatch(cardOne, cardTwo) {
  if (cardOne == cardTwo) {
    document.getElementById(cardOneId).style = "visibility: hidden;";
    document.getElementById(cardTwoId).style = "visibility: hidden;";
  } else {
    resetPair();
  }
}

function resetPair() {
  document.getElementById(cardOneId).style =
    "border-width: 0px; padding: 20px;";
  document.getElementById(cardTwoId).style =
    "border-width: 0px; padding: 20px;";

  cardOneId = "";
  cardTwoId = "";
  numOfCards = 0;
}
