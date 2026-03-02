interface Student {
  name: string;
  age: number;
  grade: number;
  studiesBackend: boolean;
}

const students: Student[] = [
  { name: "Alice", age: 20, grade: 85, studiesBackend: true },
  { name: "Bob", age: 22, grade: 72, studiesBackend: false },
  { name: "Charlie", age: 19, grade: 90, studiesBackend: true },
  { name: "Diana", age: 21, grade: 68, studiesBackend: false },
  { name: "Eve", age: 20, grade: 95, studiesBackend: true },
];

interface Product {
  name: string;
  price: number;
  inStock: boolean;
  rating: number;
}

const worksheetProducts: Product[] = [
  { name: "Laptop", price: 6500, inStock: true, rating: 4.5 },
  { name: "Phone", price: 4995, inStock: false, rating: 4.8 },
  { name: "Tablet", price: 6000, inStock: true, rating: 4.2 },
  { name: "Watch", price: 30999, inStock: true, rating: 4.7 },
];

interface User {
  username: string;
  email: string;
  isActive: boolean;
  lastLogin: string;
}

const users: User[] = [
  {
    username: "john_doe",
    email: "john@example.com",
    isActive: true,
    lastLogin: "2024-01-15",
  },
  {
    username: "jane_smith",
    email: "jane@test.com",
    isActive: false,
    lastLogin: "2023-12-01",
  },
  {
    username: "bob_wilson",
    email: "bob@example.com",
    isActive: true,
    lastLogin: "2024-01-10",
  },
  {
    username: "alice_brown",
    email: "alice@demo.com",
    isActive: true,
    lastLogin: "2024-01-14",
  },
];

// Your code here:
// Question 1: Filter students who have a scholarship

const filterScholarShip = students.filter((student) => student.studiesBackend);
console.log(filterScholarShip);

// Question 2: Filter products that are in stock
// Use worksheetProducts instead of products
// Your code here:
const inStock = worksheetProducts.filter((product) => product.inStock);
console.log(inStock);
// Question 3: Filter students who are 20 years old
// Your code here:
const isTwenty = students.filter((student) => student.age === 20);
console.log(isTwenty);

// Question 4: Filter users who are active
// Your code here:
const studentIsActive = users.filter((user) => user.isActive);
console.log(studentIsActive);

// Question 5: Filter products with price less than 500
// Your code here:
const filterPrice = worksheetProducts.filter((product) => product.price < 5000);
console.log(filterPrice);

// Question 6: Filter students who have a scholarship AND grade above 85
// Your code here:
const topScholarshipStudents = students.filter(
  (student) => student.studiesBackend && student.grade > 85,
);
console.log({ topScholarshipStudents });

// Question 7: Filter products that are in stock AND have rating above 4.5
// Your code here:
const stockAndRating = worksheetProducts.filter(product => product.inStock && product.rating > 4.5);
console.log(stockAndRating);

// Question 8: Filter users with email ending in "example.com" AND are active
// Hint: Use .endsWith() method
// Your code here:
const exampleUsers = users.filter(user => user.isActive && user.email.endsWith("example.com"))
console.log(exampleUsers);

// Question 9: Filter students who are either 19 OR 20 years old
// Your code here:
const students19or20 = students.filter(student => student.age === 19 || student.age === 20);
console.log(students19or20);

// Question 10: Filter products that are either out of stock OR priced above 600
// Your code here:
const randomProduct = worksheetProducts.filter(product => !product.inStock && product.price > 600);
console.log(randomProduct);
