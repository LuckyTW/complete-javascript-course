'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered!`
    );
  },

  orderPaster: function (ing1, ing2, ing3) {
    console.log(`here is ur delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sola, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //default values
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// //mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // Spread Operators

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables: arr, strings, maps, sets, Not objects

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// // const ingredients = [
// //   prompt(`Let's make pasta ingredients 1?`),
// //   prompt(`Let's make pasta ingredients 2?`),
// //   prompt(`Let's make pasta ingredients 3?`),
// // ];
// // console.log(ingredients);

// // restaurant.orderPaster(...ingredients);

// //objects
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Rome';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //Rest Parameter
// // 스프레드와 반대. 스프레드가 unpack를 하는 반면, REST는 array화 시켜주는 역할
// // 스프레드는 =는 오른쪽, 레스트는 왼쪽에 위치

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// //rest는 중간에 생략된 내용들을 포함하지 않음!
// //그래서 항상 마지막에 써줘야함

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     //pack the values into arrs
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(6, 4, 3, 2, 3, 6, 8);

// const x = [23, 5, 7];
// add(...x); // unpack the values

// Short Circuiting

// console.log(3 || 'jonas'); // 만약 처음 값이 truthy라면 다음 값에 상관없이 처음값을 리턴
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10; // short-circuiting 을 사용하는 방법!
// console.log(guest2);

// console.log('--------And--------');

// console.log(0 && 'Jonas'); // 첫 값이 falsy라면 다음 값에 상관없이 처음 값을 리턴!모두 truthy 일경우 마지막 값 리턴
// console.log(7 && 'Jonas');

// console.log('hello' && 23 && null && 'jonas');

// //nullish: null and undefined(Not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///////////////////////////////////////////////////////

// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// //1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2
// const [goalkeeper, ...fieldPlayers] = players1;
// console.log(goalkeeper);

// //3
// const allPlayers = [...players1, ...players2];

// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5
// // const { team1, x: draw, team2 } = game.odds;
// // 다른 방법
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);

// //6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored!`);
// };

// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log('Team 1 is more likely to win!');

//optional chaining

console.log(restaurant.openingHours.mon?.open); //-> restaurant.openingHours.mon 존재하는 경우에만 .open 실행
// console.log(restaurant.openingHours.mon.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  restaurant.openingHours[day]; // 만약 variable(day)를 쓰려면 bracket notation를 사용해야함! .day로 못씀
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`on ${day}. we open at ${open}`);
}

console.log('for testing ');
