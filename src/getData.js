export default () => {

  const nameGrid = "GDP of some countries";

  const arr = [];

  arr.push({
    id: 1,
    name: "Russia",
    population: 140,
    GDP: 9000
  });

  arr.push({
    id: 2,
    name: "USA",
    population: 330,
    GDP: 57000
  });

  arr.push({
    id: 80,
    name: "Switzerland",
    population: 7.5,
    GDP: 80000
  });

  arr.push({
    id: 40,
    name: "Iceland",
    population: 0.3,
    GDP: 60000
  });

  arr.push({
    id: 55,
    name: "Norway",
    population: 5,
    GDP: 70000
  });

  return {nameGrid, arr};
}
