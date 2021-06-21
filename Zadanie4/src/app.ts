import { Sign } from "./signs";
import "./styles/styles.scss";

//fabryka

interface GameMenu {
  doSomething(): void;
}

interface Factory {
  ChooseGame(name): GameMenu;
}

class TicTacToe implements GameMenu {
  doSomething(): void {
    guessTheNumberContainer.style.display = "none";
    ticTacToeContainer.style.display = "block";
    document.body.style.backgroundColor = "lightpink"
  }
}

class GuessTheNumber implements GameMenu {
  doSomething(): void {
    ticTacToeContainer.style.display = "none";
    guessTheNumberContainer.style.display = "block";
    document.body.style.backgroundColor = "dodgerblue"
  }
}

class ProductFactory implements Factory {
  ChooseGame(name): GameMenu {
    switch(name) {
      case 'TicTacToe':
        return new TicTacToe();
      case 'GuessTheNumber':
        return new GuessTheNumber();
      default:
        return null;
    }
  }
}

const factory = new ProductFactory();

let guessTheNumberContainer = document.getElementById(
  "GuessTheNumberContainer"
);

let ticTacToeContainer = document.getElementById(
  "TicTacToeContainer"
);

let guessTheNumberButton = document.getElementById("guessTheNumber");
guessTheNumberButton.addEventListener("click", () => DisplayGuessTheNumber());


const DisplayGuessTheNumber = () => {
  const product = factory.ChooseGame('GuessTheNumber');
  factory.ChooseGame('GuessTheNumber');
  product.doSomething()

};

let ticTacToeButton = document.getElementById("TicTacToe");
ticTacToeButton.addEventListener("click", () => DisplayTicTacToe());

const DisplayTicTacToe = () => {
  factory.ChooseGame('TicTacToe');
  const product = factory.ChooseGame('TicTacToe');
  product.doSomething()
};



/// TicTacToe 

let counter: number = 0;
let elementCells: Element[] = Array.from(
  document.getElementsByClassName("cells")
);
let resetButton: Element = document.getElementById("reset");
let cells: string[] = new Array(9);
let currentSign: Sign = Sign.O;
let playWithAIButton = document.getElementById("playWithAI")
let playOtherPlayerButton = document.getElementById("playWithOtherPlayer")

resetButton.addEventListener("click", () => reset());


playWithAIButton.addEventListener("click", () => playWithAI())
playOtherPlayerButton.addEventListener("click", () => playWithOtherPlayer())


const playWithAI = () => {
  elementCells= Array.from(
    document.getElementsByClassName("cells")
  );
  (playWithAIButton as HTMLButtonElement).disabled = true;
  (playOtherPlayerButton as HTMLButtonElement).disabled = true;
  elementCells.forEach((element) => {
    element.addEventListener("click", () => {fillCell(element); AIMove()});
  });
}

const playWithOtherPlayer = () => {
  elementCells= Array.from(
    document.getElementsByClassName("cells")
  );
  (playWithAIButton as HTMLButtonElement).disabled = true;
  (playOtherPlayerButton as HTMLButtonElement).disabled = true;
  elementCells.forEach((element) => {
    element.addEventListener("click", () => fillCell(element));
  });
}


const AIMove = () => {
  let fields: HTMLButtonElement[] = []
  elementCells.forEach(element => {
    if((element.children[0] as HTMLButtonElement).disabled !== true)
    {
      fields.push((element.children[0] as HTMLButtonElement))
    }
  });
  let random = Math.floor(Math.random()*fields.length)
  fields[random].innerHTML = "X"
  fields[random].disabled = true;
  counter++
}



const fillCell = (element: Element) => {
  if (counter % 2 === 0) {
    currentSign = Sign.O;
    element.children[0].innerHTML = currentSign.toString();
    (element.children[0] as HTMLButtonElement).disabled = true;
    ( document.getElementById("playerTurn") as HTMLElement).innerHTML = `It's player 2's turn ( X )`;
  } else {
    currentSign = Sign.X;

    element.children[0].innerHTML = currentSign.toString();
    (element.children[0] as HTMLButtonElement).disabled = true;
    element as HTMLElement;
    (
      document.getElementById("playerTurn") as HTMLElement
    ).innerHTML = `It's player 1's turn ( O )`;
  }
  counter++;
  let x = element.attributes[1].value as unknown as number;
  cells[x] = currentSign.toString();
  checkWinner();
};

const checkWinner = () => {
  if (
    (cells[0] === "X" && cells[1] === "X" && cells[2] === "X") ||
    (cells[0] === "O" && cells[1] === "O" && cells[2] === "O")
  )
    endGame(currentSign);
  else if (
    (cells[3] === "X" && cells[4] === "X" && cells[5] === "X") ||
    (cells[3] === "O" && cells[4] === "O" && cells[5] === "O")
  )
    endGame(currentSign);
  else if (
    (cells[6] === "X" && cells[7] === "X" && cells[8] === "X") ||
    (cells[6] === "O" && cells[7] === "O" && cells[8] === "O")
  )
    endGame(currentSign);
  else if (
    (cells[0] === "X" && cells[3] === "X" && cells[6] === "X") ||
    (cells[0] === "O" && cells[3] === "O" && cells[6] === "O")
  )
    endGame(currentSign);
  else if (
    (cells[1] === "X" && cells[4] === "X" && cells[7] === "X") ||
    (cells[1] === "O" && cells[4] === "O" && cells[7] === "O")
  )
    endGame(currentSign);
  else if (
    (cells[2] === "X" && cells[5] === "X" && cells[8] === "X") ||
    (cells[2] === "O" && cells[5] === "O" && cells[8] === "O")
  )
    endGame(currentSign);
  else if (
    (cells[0] === "X" && cells[4] === "X" && cells[8] === "X") ||
    (cells[0] === "O" && cells[4] === "O" && cells[8] === "O")
  )
    endGame(currentSign);
  else if (
    (cells[2] === "X" && cells[4] === "X" && cells[6] === "X") ||
    (cells[2] === "O" && cells[4] === "O" && cells[6] === "O")
  )
    endGame(currentSign);
  else {
    if (counter > 8) remis();
  }
};

const remis = () => {
  (document.getElementById("playerTurn") as HTMLElement).innerHTML = "";
  (document.getElementById("winnerInfo") as HTMLElement).innerHTML = `DRAW!`;
  elementCells.forEach((element) => {
    (element.children[0] as HTMLButtonElement).disabled = true;
  });
  counter = 0;
};
const endGame = (player: Sign) => {
  (document.getElementById("playerTurn") as HTMLElement).innerHTML = "";
  (
    document.getElementById("winnerInfo") as HTMLElement
  ).innerHTML = `The winner is ( ${player.toString()} )!`;
  elementCells.forEach((element) => {
    (element.children[0] as HTMLButtonElement).disabled = true;
  });
};

const reset = () => {
  (document.getElementById("playerTurn") as HTMLElement).innerHTML =
    "Wybierz tryb!";
  cells = new Array(9);
  counter = 0;
  (document.getElementById("winnerInfo") as HTMLElement).innerHTML = "";
  elementCells.forEach((element) => {
    element.children[0].innerHTML = "";
    (element.children[0] as HTMLButtonElement).disabled = false;
  });
  elementCells.forEach(element => {
    element.replaceWith(element.cloneNode(true))
  });
  (playWithAIButton as HTMLButtonElement).disabled = false;
  (playOtherPlayerButton as HTMLButtonElement).disabled = false;
};


/// GuessTheNumber

const RandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

let inputField: number = 0;
let guessButton = document.getElementById("check")
let minButton = document.getElementById("setMin")
let maxButton = document.getElementById("setMax")
let minNumber: number = 0
let maxNumber: number = 0
let minNumberInput = document.getElementById("minNumber")
let maxNumberInput = document.getElementById("maxNumber")
let isMinReady: boolean = false
let isMaxReady: boolean = false
let random: number =  0;
let resetGuessingButton = document.getElementById("resetGuessing");
let tries: number = 0;


(guessButton as HTMLInputElement).disabled = true;
(maxButton as HTMLInputElement).disabled = true

resetGuessingButton.addEventListener("click", () => resetGuessing());
ticTacToeButton.addEventListener("click", () => DisplayTicTacToe());
minButton.addEventListener("click", () => SetMinNumber());
maxButton.addEventListener("click", () => SetMaxNumber());
guessButton.addEventListener("click", () => checkIfClose())

const SetMinNumber = () => {
  if ( ((document.getElementById("minNumber") as HTMLInputElement).value) === "" )
  {
alert("Minimum numbet must be set!")
  }
  else {
    (maxNumberInput as HTMLInputElement).disabled = false;
minNumber = ((document.getElementById("minNumber") as HTMLInputElement).value) as unknown as number
minNumberInput.style.fontSize = '30px';
(minNumberInput as HTMLInputElement).disabled = true
isMinReady = true;
(minButton as HTMLButtonElement).disabled = true;
(maxButton as HTMLButtonElement).disabled = false
if ( isMinReady === true && isMaxReady === true)
{
  (document.getElementById("isReady") as HTMLElement).innerHTML = `Random number from ${minNumber} to ${maxNumber} has been generated!`;
  random =  RandomNumber(minNumber, maxNumber)
  // console.log(random);
  
}
}
}


const SetMaxNumber = () => {
 // maxNumber = ((document.getElementById("maxNumber") as HTMLInputElement).value) as unknown as number
 if ( ((document.getElementById("maxNumber") as HTMLInputElement).value) === "" )
 {
alert("Maximum numbet must be set!")
 }
 else {
  maxNumber = ((document.getElementById("maxNumber") as HTMLInputElement).value) as unknown as number
  if(minNumber > maxNumber)
 {
alert("Minimum number can't be bigger than maximum number!")
 }
 else {
  maxNumberInput.style.fontSize = '30px';
  (maxNumberInput as HTMLInputElement).disabled = true
  isMaxReady = true;
  (maxButton as HTMLButtonElement).disabled = true
  if ( isMinReady === true && isMaxReady === true)
{
  (document.getElementById("isReady") as HTMLElement).innerHTML = `Random number from ${minNumber} to ${maxNumber} has been generated!`;
  random =  RandomNumber(minNumber, maxNumber);
  // console.log(random);
  (guessButton as HTMLInputElement).disabled = false
}
}
 }
}


const checkIfClose = () => {
  inputField = ((document.getElementById("guessingField") as HTMLInputElement).value) as unknown as number
tries++
 if( inputField > random)
 {
   (document.getElementById("howClose") as HTMLInputElement).innerHTML = `Number is too big!`
   document.getElementById("howClose").style.display = "flex";
   (document.getElementById("numberOfTries") as HTMLInputElement).innerHTML = `Number of tries : ${tries}`
 }
 if( inputField < random)
 {
   (document.getElementById("howClose") as HTMLInputElement).innerHTML = `Number is too small!`
   document.getElementById("howClose").style.display = "flex";
   (document.getElementById("numberOfTries") as HTMLInputElement).innerHTML = `Number of tries : ${tries}`
 }
 if( inputField == random)
 {
   (document.getElementById("howClose") as HTMLInputElement).innerHTML = `Congratulations! Your generated number was ${random}`;
   document.getElementById("howClose").style.display = "flex";
   (document.getElementById("numberOfTries") as HTMLInputElement).innerHTML = `Number of tries : ${tries}`;
   (guessButton as HTMLInputElement).disabled = true;
   document.getElementById("numberOfTries").style.backgroundColor = "chartreuse"
   document.getElementById("numberOfTries").style.backgroundColor = "chartreuse"
 }
}


const resetGuessing = () => {
  tries = 0;
  document.getElementById("numberOfTries").style.backgroundColor = "white";
  (document.getElementById("numberOfTries") as HTMLInputElement).innerHTML = ``;
  document.getElementById("howClose").style.display = "none"
  random = 0
  inputField = 0
  minNumber = 0
  maxNumber = 0
  isMaxReady = false
  isMinReady = false;
  (guessButton as HTMLInputElement).disabled = true;
  (maxButton as HTMLButtonElement).disabled = true;
  (minButton as HTMLButtonElement).disabled = false;
  (maxNumberInput as HTMLInputElement).disabled = true;
  (minNumberInput as HTMLInputElement).disabled = false;
  (document.getElementById("isReady") as HTMLElement).innerHTML = ``;
}