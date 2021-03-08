const { kitties } = require("./datasets/kitties");
const { clubs } = require("./datasets/clubs");
const { mods } = require("./datasets/mods");
const { cakes } = require("./datasets/cakes");
const { classrooms } = require("./datasets/classrooms");
const { breweries } = require("./datasets/breweries");
const { nationalParks } = require("./datasets/nationalParks");
const { books } = require("./datasets/books");
const { weather } = require("./datasets/weather");
const { instructors, cohorts } = require("./datasets/turing");
const { bosses, sidekicks } = require("./datasets/bosses");
const { constellations, stars } = require("./datasets/astronomy");
const { weapons, characters } = require("./datasets/ultima");
const { dinosaurs, humans, movies } = require("./datasets/dinosaurs");

// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.reduce((orangeKitties, kitty) => {
      if (kitty.color === "orange") {
        orangeKitties.push(kitty.name);
      }
      return orangeKitties;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((kittyA, kittyB) => {
      return kittyB.age - kittyA.age;
    });
    return result;

    // Annotation:
    // I know that i have an array of kitty objects
    // I know i need to sort them by age
    // each kitty has an age property
    // I know i can use the sort prototype
    // my result needs to be decending order
    // in my sort I need my B value first
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties
      .sort((kittyA, kittyB) => {
        return kittyB.age - kittyA.age;
      })
      .map((kitty) => {
        kitty.age += 2;
        return kitty;
      });
    return result;

    // Psuedocode
    // I know I have an array of kitten objects
    // I know I need an array of kitten objects of the same length
    // I can use map to create a same length array
    // At each kitty i need to just add 2 to the age
    // After I age the kitty i need to return it to the map
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((students, club) => {
      club.members.forEach((member) => {
        if (students[member]) {
          students[member].push(club.club);
        } else {
          students[member] = [club.club];
        }
      });
      return students;
    }, {});
    return result;

    // Annotation:
    // I know i have an array of club objects with a members array of people
    // I know I need an object where the key is the name of people and the value is and arry of their clubs
    // As I am building an object i can use reduce to go over the clubs
    // at each club i can forEach the members array
    // at each member I will need to check if they are already a key
    // If not make  key with value of an array with that club
    // If already a key push the club to the array
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map((module) => {
      return {
        mod: module.mod,
        studentsPerInstructor: module.students / module.instructors,
      };
    });
    return result;

    // Annotation:
    /*
    I know I have an array of mod objects
    Each mod has a mod, students and instructors property
    I know I need an array of objects with mod and studentsPerInstructor
    I know my answer is the same length as my original
    I can use map
    At each mod I can return an object with a mod number and use division to get the students per
    */
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(({ cakeFlavor, inStock }) => {
      return { flavor: cakeFlavor, inStock };
    });
    return result;

    // Annotation:
    /*
    I know i have an array of cake objects
    Each cake object has a cakeFlavor and inStock property
    I know i need an array of objects
    Each object will need a flavor and inStock property
    I can use map to get a same number array
    At each cake I return an object with the flavor and the stock
    */
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter((cake) => {
      return cake.inStock;
    });
    return result;

    // Annotation:
    /*
    I know I have an array of cake objects with an inStock property
    I need an array of cake objects but just the ones where inStock > 0
    I can use filter to get a new array of the cake objects
    At each cake check the stock
    */
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((count, cake) => {
      count += cake.inStock;
      return count;
    }, 0);
    return result;

    // Annotation:
    /*
    I know I have an array of cakes with inStock props
    I know I need an integer of total cakes in Stock
    I can use reduce to go over my cakes array
    At each cake add the inStock value
    */
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((allToppings, cake) => {
      cake.toppings.forEach((topping) => {
        !allToppings.includes(topping) && allToppings.push(topping);
      });
      return allToppings;
    }, []);
    return result;

    // Annotation:
    /**
     * I know I have an array of cakes with a toppings property that is also an array
     * I know I need a new array of just the non-duplicate toppings
     * I can use a reduce to make my new array
     * At each cake i need to loop over the toppings array
     * At each topping I can use includes to check if that topping already exist in my array
     * If not then push it to my toppings array
     */
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((shoppingList, cake) => {
      cake.toppings.forEach((topping) => {
        if (shoppingList[topping]) {
          shoppingList[topping]++;
        } else {
          shoppingList[topping] = 1;
        }
      });
      return shoppingList;
    }, {});
    return result;

    // Annotation:
    /**
     * I know I have an array of objects that have a toppings property
     * I know I need an object that has each unique topping as a key and the number of times it occurs at a value
     * I can use reduce to build the object as a go over my cakes array
     * At each cake I need to go into the toppings array
     * At each topping I can check if the topping is already a key
     * If it is add one to its value
     * If not add the key with a value of 1
     */
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter((classroom) => {
      return classroom.program === "FE";
    });
    return result;

    // Annotation:
    /**
     * I know I have an array of classroom objects
     * I know I need an array of the classroom objects where the program property is "FE"
     * I can use filter to go through the array and get just the FE classrooms
     */
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce(
      (capacityTracker, classroom) => {
        if (classroom.program === "FE") {
          capacityTracker.feCapacity += classroom.capacity;
        } else {
          capacityTracker.beCapacity += classroom.capacity;
        }
        return capacityTracker;
      },
      { feCapacity: 0, beCapacity: 0 },
    );
    return result;

    // Annotation:
    /**
     * I have an array of classroom objects with program and capacity properties
     * I know I need an object with two properties feCapacity and beCapacity
     * I can use reduce to create my new object
     * At each classroom I will add to the correct program with a conditional
     */
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((classroomA, classroomB) => {
      return classroomA.capacity - classroomB.capacity;
    });
    return result;

    // Annotation:
    /**
     * I know I have an array of classroom objects with a capacity property
     * I know I need that array but in order of capcity (least to greatest)
     * I can use sort and as I am doing a incrementing order I will use A-B
     */
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    let starsInConstellations = Object.keys(constellations).reduce(
      (starsInConstellations, constellationName) => {
        return starsInConstellations.concat(
          constellations[constellationName].stars,
        );
      },
      [],
    );
    const result = stars.filter((star) => {
      return starsInConstellations.includes(star.name);
    });
    return result;

    // Annotation:
    /**
     * I know I have an object of constilation objects with a stars array property
     * I know I also have an array of star objects with a name property.
     * I know I need an array of star objects that only has the ones that exist as stars withing my constilation array
     * I want to go through my stars array and at each star check if it is in my constilations arrays
     * I can combine my constilations star arrays with a concat by looping over it with a reduce
     * Then I can use a filter on my stars checking against the name of the star included in my constilation stars array
     *
     */
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((starsByColor, star) => {
      if (starsByColor[star.color]) {
        starsByColor[star.color].push(star);
      } else {
        starsByColor[star.color] = [star];
      }
      return starsByColor;
    }, {});
    return result;

    // Annotation:
    /**
     * I know I have an array of star objects that have a color property
     * I know I need an object with keys of colors of stars and values of array sof the star objects that match
     * I am building an object as I go through my stars array
     * I can use reduce for this
     * At each star I need to check if the color is already a key
     * If it is push the star object into the array value
     * If not create a key value with the color and star object in an array
     */
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]

    let starsByMagnitude = stars.sort((starA, starB) => {
      return starA.visualMagnitude - starB.visualMagnitude;
    });
    const result = starsByMagnitude.reduce(
      (constellationsStarsExistIn, star) => {
        star.constellation &&
          constellationsStarsExistIn.push(star.constellation);
        return constellationsStarsExistIn;
      },
      [],
    );
    return result;

    // Annotation:
    /**
     * I know I have an array of star objects with a constellation and visualMagnitude property
     * I know I need an array of strings that are constellation names in order of the stars magnitude but only if the star is in a constellation
     * I will need to sort the stars by magnitude
     * I need to build a different length array and make it just the constellation names
     * I can use reduce to do both at once
     * Or i could use filter and then map
     */
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {
    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113
    let totalDamage = characters.reduce((totalDamage, character) => {
      let damageOfCharacter = character.weapons.reduce(
        (totalDamageOfCharacter, weapon) => {
          totalDamageOfCharacter += weapons[weapon].damage;
          return totalDamageOfCharacter;
        },
        0,
      );
      totalDamage += damageOfCharacter;
      return totalDamage;
    }, 0);
    const result = totalDamage;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    /**
     * I know I have an array of character objects with a key weapons that is an array of weapon names
     * I also have an object of weapons with keys that are the weapon names and have an object value that has a damage key
     * I know I need a single number that represents the total damage of all of the weapons the characters can use
     * I need to loop over the characters array and at each character loop over my weapons array
     * At each weapon I can use bracket and dot notation to get to the damage
     * I will add this value to a counter
     * As I have a counter I can use the array prototype reduce
     */
  },

  charactersByTotal() {
    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}git

    let damageRangeSum = (givenWeapons) => {
      return givenWeapons.reduce(
        (damageAndRange, weapon) => {
          damageAndRange.damage += weapons[weapon].damage;
          damageAndRange.range += weapons[weapon].range;
          return damageAndRange;
        },
        { damage: 0, range: 0 },
      );
    };

    const result = characters.map(({ name, weapons }) => {
      return { [name]: damageRangeSum(weapons) };
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
    /**
     * I know I have an array of character objects that each have a weapons property that is an array of strings
     * I have a weapons object that has keys of weapon names and values of objects with damage and range properties
     * I need an array of objects that are characters and the total damage and total range
     * My result is an array of equal length so I can use map
     * At each iteration I can build an object with the key of the char name and the value an object
     * I need to use reduce at each character weapons array building an object that is the accumulitive damage and range
     */
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const numberAwesome = (dinoList) => {
      return dinoList.reduce((totalAwesome, dino) => {
        dinosaurs[dino].isAwesome && totalAwesome++;
        return totalAwesome;
      }, 0);
    };

    const result = movies.reduce((answer, { title, dinos }) => {
      answer[title] = numberAwesome(dinos);
      return answer;
    }, {});
    return result;

    // Annotation:
    /**
     * I know I have an object called dinosaurs that has keys of the dinosaur name and then a value object with an isAwesome property
     * I know I also have an array of movie objects each with a title and a dinos property
     * The dinos property is an array of dino names
     * I know I need to make an object that has keys of the name of movies and values of the number of dinos in that movie with the isAwesome property being true
     * I am making an object out of my movies array so I should use reduce building my object
     * At each itteration I will need to use the title to create my key and then get the dinos number
     * To get the dinos number I can create a helper function that takes in the dinos array
     * I will use reduce to get a number from the array checking at each dino if bracket name dot isAwesome is true
     */
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const averageAge = (actors, year) => {
      // console.log(actors.length);
      // console.log(year);
      let totalAge = actors.reduce((total, actor) => {
        return total + (year - humans[actor].yearBorn);
      }, 0);
      // console.log(totalAge);
      return parseInt(totalAge / actors.length);
    };

    const result = movies.reduce(
      (directors, { title, director, cast, yearReleased }) => {
        directors[director]
          ? (directors[director][title] = averageAge(cast, yearReleased))
          : (directors[director] = { [title]: averageAge(cast, yearReleased) });

        return directors;
      },
      {},
    );
    return result;

    // Annotation:
    /**
     * I know I have an array of movies that have a properties director , title, and yearReleases
     * I know I also have a humans object that has keys of actor names with a value of an object that has their birth year
     * I know I need to make an object that has keys of the director names values of an object
     * Each of these objects have keys of their movies and the average age of the actors when the movie was released
     * I will start with a helper function that takes in a list of actors, and a year and uses the humans object to return an average age at that year
     * I can use reduce starting with no initial value
     * At each iteration I will subtract the given year and the actors yearBorn then add it to a total
     * Then the helper function will take this total and devide it by the lenght of the given actors array
     *
     * Now I can build my object of directors
     * I can go through my movies array and at each movie use bracket notation to get the direcotr as the key
     * Then use bracket notation again to set the value of the director to an object that has a key of the title and call my helper function to get the average
     */
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */
    let allActorsInMovies = movies.reduce((allActorsInMovies, movie) => {
      return allActorsInMovies.concat(allActorsInMovies, movie.cast);
    }, []);

    let humansNotCast = Object.keys(humans).reduce((humansNotCast, human) => {
      !allActorsInMovies.includes(human) &&
        humansNotCast.push({
          name: human,
          nationality: humans[human].nationality,
          imdbStarMeterRating: humans[human].imdbStarMeterRating,
        });

      return humansNotCast;
    }, []);

    const result = humansNotCast.sort((actorA, actorB) => {
      if (actorA.nationality > actorB.nationality) {
        return 1;
      } else {
        return -1;
      }
    });
    return result;

    // Annotation:
    /**
     * I know I have a humans object where each key is an actor name and the value is an ojbect with a nationality and an imdbRating
     * I know I also have a movies array of movie objects each object has a cost property
     * I know I need to make an array of objects that have name nationality and imbdStarMeterRating properties
     * I think it is best to first get a full array with the needed format for all humans
     * To do this I can use use map over humans.keys and at each iteration return an object based on my needed params
     * I can build a list of all the cast in all the dinoMovies by reducing over the movies array and concating the cast to my accumulator
     */
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
};
