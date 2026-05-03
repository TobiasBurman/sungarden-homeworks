"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var showId = function (id) {
    console.log("Your id is: ".concat(id));
};
showId("12345");
showId(123);
var eatFruit = function (fruit) {
    console.log("You at an ".concat(fruit));
};
eatFruit("apple");
eatFruit("orange");
var printResult = function (result) {
    if (result) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }
};
printResult(true);
printResult(false);
var describeBook = function (book) {
    console.log("The book ".concat(book.title, " has ").concat(book.pages, " pages."));
};
describeBook({ title: "Robin Hood", pages: 321 });
var printTeacherInfo = function (teacher) {
    console.log("\n    Name: ".concat(teacher.name, "\n    Subject: ").concat(teacher.subject, "\n    ID: ").concat(teacher.id, "\n    Email: ").concat(teacher.email, "\n  "));
};
printTeacherInfo({
    name: "Tobias Burman",
    subject: "backend",
    id: 1337,
    email: "tobiasFrontend@gmail.com"
});
var printCar = function (car) {
    console.log("My favorit Brand & Car is: Brand: ".concat(car.brand, ", Year: ").concat(car.year));
};
printCar({ brand: "BMW", year: 2024 });
// 7
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var showColor = function (color) {
    console.log("You chose ".concat(Color[color]));
};
showColor(Color.Red);
//8
var PizzaSize;
(function (PizzaSize) {
    PizzaSize["Small"] = "Small";
    PizzaSize["Medium"] = "Medium";
    PizzaSize["Large"] = "Large";
})(PizzaSize || (PizzaSize = {}));
var orderPizza = function (size) {
    console.log("You ordered a ".concat(size, " pizza."));
};
orderPizza(PizzaSize.Medium);
//9
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
var printRole = function (role) {
    if (role === Role.Admin) {
        console.log("You have full access");
    }
    else if (role === Role.User) {
        console.log("You have limited access");
    }
    else if (role === Role.Guest) {
        console.log("You have guest access");
    }
};
printRole(Role.Admin);
printRole(Role.User);
printRole(Role.Guest);
//10
var wrapInArray = function (item) {
    return [item];
};
console.log(wrapInArray("cat"));
console.log(wrapInArray(true));
console.log(wrapInArray(1337));
//11
var firstItem = function (array) { return array[0]; };
console.log(firstItem([22, 26, 28]));
console.log(firstItem(["hej", "hejsan", "halloj"]));
//12
var swap = function (item1, item2) { return [item2, item1]; };
console.log(swap("hello", "world"));
