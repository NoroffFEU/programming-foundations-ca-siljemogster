const camperVan = {
  id: 18779,
  make: "volkswagen",
  model: "caravelle t3",
  year: 1986,
  color: "blue",
  isOld: true,
  numberofWheels: 4,
  datesOfService: [1988, 1990, 1992, 1994, 1996, 1998, 2000],
  printDatesOfService: function () {
    this.datesOfService.forEach(function (serviceDates) {
      console.log(serviceDates);
    });
  },
};

console.log(camperVan.printDatesOfService());
