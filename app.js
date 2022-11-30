let snowMan = {
  isSnowman: true,
  color: "white",
  madeOfSnowballs: 3,
  "first name": "Frosty",
};

console.log(snowMan.isSnowman);
console.log(snowMan.color);
console.log(snowMan.madeOfSnowballs);
console.log(snowMan["first name"]);

let house = {};
house.doors = 2;
house.name = "big";
house.nice = true;
house.color = "red";

console.log(house);
house["swimming pool"] = false;
house["first owner"] = 'Bjarne Andersson';
house["typeof"] = 'apartment';

console.log(house);
