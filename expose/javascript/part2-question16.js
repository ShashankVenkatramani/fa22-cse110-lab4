let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const property in statistics) {
    if (property.substring(0,1) === 'r' || statistics[property] % 2 === 1) {
        console.log(property);
    }
}