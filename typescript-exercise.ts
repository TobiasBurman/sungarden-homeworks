export{}

//1
type IDType = number | string;
const showId = (id: IDType) => {
  console.log(`Your id is: ${id}`);
};
showId("12345");
showId(123);

//2
type Fruit = "apple" | "banana" | "orange";
const eatFruit = (fruit: Fruit) => {
  console.log(`You at an ${fruit}`);
};
eatFruit("apple");
eatFruit("orange");

//3
type Result = boolean;

const printResult = (result: Result) => {
  if (result) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
};

printResult(true);
printResult(false);

//4
interface Book {
  title: string;
  pages: number;
}

const describeBook = (book: Book) => {
    console.log(`The book ${book.title} has ${book.pages} pages.`)
}
describeBook({title: "Robin Hood", pages: 321})

//5

interface Teacher {
  name: string;
  subject: string;
}
interface Employee {
  id: number;
  email: string;
}
type SchoolTeacher = Teacher & Employee;

const printTeacherInfo = (teacher: SchoolTeacher): void => {
  console.log(`
    Name: ${teacher.name}
    Subject: ${teacher.subject}
    ID: ${teacher.id}
    Email: ${teacher.email}
  `);
};

printTeacherInfo({
  name: "Tobias Burman",
  subject: "backend",
  id: 1337,
  email: "tobiasFrontend@gmail.com"
});

//6

interface Car {
  brand: string;
  year: number;
}

const printCar = (car: Car): void => {
  console.log(`My favorit Brand & Car is: Brand: ${car.brand}, Year: ${car.year}`);
};
printCar({ brand: "BMW", year: 2024 });

// 7
enum Color {
  Red,
  Green,
  Blue
}
const showColor = (color: Color) => {
  console.log(`You chose ${Color[color]}`);
};
showColor(Color.Red);

//8

enum PizzaSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large"
}
const orderPizza = (size: PizzaSize) => {
  console.log(`You ordered a ${size} pizza.`);
};
orderPizza(PizzaSize.Medium);

//9
enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest"
}
const printRole = (role: Role) => {
  if (role === Role.Admin) {
    console.log("You have full access");
  } else if (role === Role.User) {
    console.log("You have limited access");
  } else if (role === Role.Guest) {
    console.log("You have guest access");
  }
};
printRole(Role.Admin)
printRole(Role.User)
printRole(Role.Guest)

//10
const wrapInArray = <T>(item: T): T[] => {
  return [item];
};

console.log(wrapInArray("cat"));
console.log(wrapInArray(true));
console.log(wrapInArray(1337));

//11
const firstItem = <T>(array: T[]): T => array[0];
console.log(firstItem([22,26,28]))
console.log(firstItem(["hej","hejsan","halloj"]))

//12
const swap = <T>(item1: T, item2: T): T[] => [item2, item1];

console.log(swap("hello", "world"));