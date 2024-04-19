const flavorsInput = prompt("Please enter all of your Froyo Flavors seperated by commas:");{

const flavorsArray = flavorsInput.split(",");

const flavorCount = {};
flavorsArray.forEach(function(flavor) {
  flavor = flavor.trim();
  if (flavorCount[flavor]) {
    flavorCount[flavor]++;
  } else {
    flavorCount[flavor] = 1;
  }
});
console.log("Froyo Flavor Counts:");
console.table(flavorCount);
}
