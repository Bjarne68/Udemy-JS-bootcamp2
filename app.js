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
