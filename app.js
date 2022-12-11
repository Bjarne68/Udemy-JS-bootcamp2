let home = {
  rooms: 4,
  apartment: false,
  color: "brown",
  swimmingPool: true,
  state: "WA",
  City: "Seattle",
};
function Home(rooms, apartment, color, swimmingPool, state, City) {
  this.rooms = rooms;
  this.apartment = apartment;
  this.color = color;
  this.swimmingPool = swimmingPool;
  this.state = state;
  this.City = City;
}

let home1 = new Home(3, false, "blue", true, "CA", "Atlanta");

console.log(home1);
let home2 = new Home(4, true, "white", false, "no", "Uppsala");
let home3 = new Home(5, false, "blue", true, "no", "Stockholm");
let home4 = new Home(2, true, "white", false, "MG", "Formiga");
console.log(home2, home3, home4);

let book = {
  författare: "Pelle Svensson",
  titel: "Sagan om Ringen",
  utgivningsår: 2021,
};

function Library(författare, titel, utgivningsår) {
  (this.författare = författare),
    (this.titel = titel),
    (this.utgivningsår = utgivningsår);
}

let book1 = new Library("August Stringberg", "dkffjfjkgf", 1930);
let book2 = new Library("Bo Bosson", "ddkfjffjgfkgf", 2011);
let book3 = new Library("Erik Eriksson", "sklfkfjf kkfjfjfi", 2010);
let book4 = new Library("Sven Svensson", "ddmkffnfkjnf", 2011);
let book5 = new Library("Lars Larsson", "slddfjdfdfj", 2005);

console.log(book1, book2, book3, book4, book5);

let baseballTeams = ["Dodgers", "Giant", "Mets", "Yankees", "Astros"];

baseballTeams.push("Sirius");

console.log(baseballTeams);
baseballTeams[1] = "AIK";
console.log(baseballTeams);
let myFavoriteTeam = baseballTeams[0];

let shoppingList = [
  "apples",
  "pizza",
  "chicken",
  "mushrooms",
  "oranges",
  "beef",
];

let colors = ["red", "orange", "green", "blue", "indigo", "violet"];
let numbers = [2, 3, 6, 9, 20, 1000];
let sammanslagen = colors.concat(numbers);
let nyArray = [4, 5, 66667, 77777, 888888];
let nySammanslagen = sammanslagen.concat(nyArray);

nySammanslagen.reverse();
nySammanslagen.sort();

let weather = [
  "rainy",
  "cold",
  "chilly",
  "snowy",
  "cloudy",
  "hot",
  "warm",
  "humid",
];

let winter = weather.slice(-8, -3);
let summer = weather.slice(-3);

let randomBodyParts = ["huvud", "arm", "fötter", "tår", "höfter"];
let randomAdjectives = ["ful", "tjock", "fet", "spinkig"];
let randomWords = ["hus", "sko", "ko", "älg", "lejon"];

function showWords() {
  let randomBodyPart =
    randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
  let randomAdjective =
    randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
  let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
  console.log(
    `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}`
  );
}

function goodEveningNeighbor(name, task) {
  return `Good evening ${name} thanks for ${task}!`;
}

let knacka = function () {
  return "Who's there?";
};

let dogWalker = (function (person, dog) {
  return `${person} is taking ${dog} for a walk`;
})("Pelle", "Fido");

let galloons = 12;
let mpg = 34;

function roadTrip() {
  return galloons * mpg;
}

let height = 10;

function volume() {
  let width = 10;
  let length = 10;

  let volumeOfObject = function () {
    return length * width * height;
  };
  return volumeOfObject();
}

function getUserChoice(userInput) {
  userChoice = userInput.toLowerCase();

  if (userInput === "bear" || userInput === "gun" || userInput == "human") {
    return userChoice;
  } else {
    return "Felaktigt val";
  }
}

let computerChoice = function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "bear";
      break;
    case 1:
      return "human";
      break;
    case 2:
      return "gun";
      break;
  }
};

function determineWinner(userChoice, computerChoice) {
  if (getUserChoice === computerChoice) {
    return "Det blev oavgjort";
  }
  if (userChoice === "human") {
    if (computerChoice === "bear") {
      return "Datorn vann!";
    } else {
      return "User vann!";
    }
  }
  if (userChoice === "bear") {
    if (computerChoice === "gun") {
      return "Datorn vann!";
    } else {
      return "User vann!";
    }
  }
  if (userChoice === "gun") {
    if (computerChoice === "human") {
      return "Datorn vann!!";
    } else {
      return "User vann!!!";
    }
  }
}

function playGame() {
  let promptUserChoice = prompt("Välj bear, human eller gun");
  let userChoice = getUserChoice(promptUserChoice);

  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

function inputCaloriesByDay(day) {
  switch (day) {
    case "Måndag":
      return 3500;
      break;
    case "Tisdag":
      return 1500;
      break;
    case "Onsdag":
      return 1800;
      break;
    case "Torsdag":
      return 2300;
      break;
    case "Fredag":
      return 2400;
      break;
    case "Lördag":
      return 1500;
      break;
    case "Söndag":
      return 1500;
      break;
    default:
      return "Välj en giltig dag!!";
      break;
  }
}

function getTotalCalories() {
  return (
    inputCaloriesByDay("Måndag") +
    inputCaloriesByDay("Tisdag") +
    inputCaloriesByDay("Onsdag") +
    inputCaloriesByDay("Torsdag") +
    inputCaloriesByDay("Fredag") +
    inputCaloriesByDay("Lördag") +
    inputCaloriesByDay("Söndag")
  );
}

function getIdealCalories() {
  let idealDailyCalories = 2000;
  return idealDailyCalories * 7;
}

function calculateHealthPlan() {
  let actualCalories = getTotalCalories();
  let idealCalories = getIdealCalories();

  if(actualCalories===idealCalories){
    return "du åt rätt mängd mat."
  }
  else if (actualCalories>idealCalories){
    return "Dags att gå till gymmet"
  }
  else "Ät lite till."
}
console.log(calculateHealthPlan())
