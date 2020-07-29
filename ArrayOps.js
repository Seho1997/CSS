let towns = ['Auckland', 'Wellington', 'Dunedin', 'ChCh', 'Hamilton']
const greet = name => alert("Hello " + name)

for (let i = 0; i < towns.length; ++i) {
   greet(towns[i]);
}

for (let element of towns) {
   greet(element);
}

towns.forEach(greet);

const someTowns = towns.filter((element) => element.length == 8)
someTowns.forEach(greet);

towns
   .filter((element) => element.length == 8)
   .forEach(greet)

const addHello = name => ("Hello " + name)

towns
   .map(addHello)
   .forEach((element) => alert(element))

towns
   .filter((element) => element.length == 8)
   .map(addHello)
   .forEach((element) => alert(element))
