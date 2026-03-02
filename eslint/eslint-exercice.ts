import fs from "fs";

//1
const greet = (firstName: string) => {
  return `Hello ${firstName}`;
};
greet("Tobias");

console.log(greet("Tobias"));

//2
const double = (n: number) => {
  return n * 2;
};
console.log(`The result is: ${double(5)}`);

//3
const isEven = (num: number) => {
  return num % 2 === 0;
};
console.log(isEven(4));

//4
const square = (x: number) => {
  return x * x;
};
console.log(`Square of 5 is: ${square(5)}`);

//5
const getAge = (year: number) => {
  return 2026 - year;
};
console.log(`Age: ${getAge(1997)}`);

//6
const prices = [10, 20, 30];
let total = 0;
prices.forEach((p) => {
  total += p;
});
console.log(`Total: ${total}`);

//7
const user = { name: "John" };
const sayHi = () => {
  return console.log("Hi " + user.name);
};
sayHi();
//8
const colors = ["red", "blue"];
colors.forEach((c) => {
  console.log("Color: " + c);
});

//9
const items = [1, 2, 3];
const doubled = items.map((i) => {
  return i * 2;
});
console.log(`Doubled: ${doubled}`);

//10
const checkAuth = (user: { isAdmin: boolean }) => {
  return user.isAdmin;
};
console.log(checkAuth({ isAdmin: true }));

//11
const read = async (path: string) => {
  try {
    const data = await fs.promises.readFile(path, "utf-8");
    console.log(`Data: ${data}`);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

//12
const getData = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = res.json;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//13
const process = (data: number[]) => {
    return data
      .filter((n) => {
        return n > 10;
      })
      .map((n) => {
        return n * 2;
      });
  };

  //14
  const timer = (ms: number) => {
    return new Promise((res) => {
      return setTimeout(res, ms);
    });
  };
  
  const testTimer = async () => {
    console.log(`Starting timer...`);
    await timer(4000);
    console.log(`Timer finished after 2 seconds!`);
  };
  
  testTimer();

  //15
  const logErr = (m: string) => {
    console.error(`Error: ${m}`);
  };