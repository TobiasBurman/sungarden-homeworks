import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.userLanguage.createMany({
    data: [
      { name: "Alice", email: "alice@mail.com", languages: ["English", "Spanish"], age: 25 },
      { name: "Bob", email: "bob@mail.com", languages: ["English", "French"], age: 30 },
      { name: "Carlos", email: "carlos@mail.com", languages: ["Spanish", "Portuguese"], age: 22 },
      { name: "Diana", email: "diana@mail.com", languages: ["English", "German"], age: 28 },
      { name: "Erik", email: "erik@mail.com", languages: ["Swedish", "English"], age: 35 },
      { name: "Fatima", email: "fatima@mail.com", languages: ["Arabic", "French"], age: 19 },
      { name: "George", email: "george@mail.com", languages: ["English"], age: 45 },
      { name: "Hannah", email: "hannah@mail.com", languages: ["English", "Japanese"], age: 27 },
      { name: "Ivan", email: "ivan@mail.com", languages: ["Russian", "English"], age: 16 },
      { name: "Julia", email: "julia@mail.com", languages: ["Italian", "English"], age: 31 },
    ],
  });
  console.log("Seeded!");
}

seed().then(() => prisma.$disconnect)