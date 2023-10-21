import { features } from "./features.js";
import { km } from "./function.js";


const camperVan = {
    id: 18779,
    make: "volkswagen",
    model: "caravelle t3",
    year: "1986", 
    firstName: "alfred",
    color: "blue", 
    isOld: true,
    numberOfWheels: 4
    
    
};

console.log(camperVan.id)
console.log(camperVan.make)
console.log(camperVan.model)
console.log(camperVan.year)
console.log(camperVan.firstName)
console.log(camperVan.color)
console.log(camperVan.isOld)
console.log(camperVan.numberOfWheels)


const age = 2023 - 1986; 
console.log(age); 


if (age >= 30) {
    console.log("it is a vintage car"); 
}

else {
    console.log("it is not a vinatage car");
};
