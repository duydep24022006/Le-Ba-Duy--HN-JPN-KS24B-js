const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
}
car.color = "red";
car.year = 2022;
for (let keys in car) {
    console.log(`${keys}:${car[keys]}`)
}