const userInputString = prompt("Enter a list of comma-separated froyo flavors");

function countFlavorOrders(flavorString) {
  const flavorArray = flavorString.split(",");
  const flavorCounts = {};

  for (const flavor of flavorArray) {
    const trimmedFlavor = flavor.trim();
    if (flavorCounts[trimmedFlavor]) {
      flavorCounts[trimmedFlavor]++;
    } else {
      flavorCounts[trimmedFlavor] = 1;
    }
  }
  return flavorCounts;
}

const flavorOrder = countFlavorOrders(userInputString);

const tableData = [];
for (const flavor in flavorOrder) {
  tableData.push({ Flavor: flavor, Count: flavorOrder[flavor] });
}

console.table(tableData);
