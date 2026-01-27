//1
type MessageFunc = (message: string) => void;

const messageCallback = (printMessage: MessageFunc): void => {
  printMessage("Hello from callback!");
};

messageCallback((msg) => {
  console.log(msg);
});

//2
type PrintMessageFunc = (message: string) => void;

const sayHelloLater = (printMessage: PrintMessageFunc): void => {
  setTimeout(() => {
    printMessage("Hi, I am late!");
  }, 2000);
};

sayHelloLater((msg) => {
  console.log(msg);
});

//3
type printResultFunc = (result: number) => void;
const addNumber = (a: number, b: number, printResult: printResultFunc) => {
  const result = a + b;
  printResult(result);
};

const printResult = (result: number) => {
  console.log("Result is:", result);
};

addNumber(45, 92, printResult);

//4
type UppercaseFunction = (text: string) => string;

const printUppercase = (text: string, convertToUpper: UppercaseFunction) => {
  const result = convertToUpper(text);
  console.log(result);
};

const toUpperCase = (text: string) => {
  return text.toUpperCase();
};

printUppercase("hej på dig!", toUpperCase);

//5
type orderStatusFunc = (message: string) => void;

const orderPizza = (orderStatus: orderStatusFunc): void => {
  console.log("Ordering pizza...");
  setTimeout(() => {
    const message = "Pizza is ready!";
    orderStatus(message);
  }, 3000);
};

const orderStatus = (message: string): void => {
  console.log(message);
};

orderPizza(orderStatus);

//6
type MessageFunction = (message: string) => void;

const sendMessages = (prinstMessage: MessageFunc): void => {
  prinstMessage("1st message");
  prinstMessage("2nd message");
  prinstMessage("3rd message");
};

const prinstMessage = (message: string): void => {
  console.log(message);
};

sendMessages(prinstMessage);

//7
type ShowDataFunc = (data: string) => void;

const handleDownload = (url: string, showData: ShowDataFunc) => {
  console.log("Downloading...", url);
  setTimeout(() => {
    showData(url);
  }, 4000);
};

const showData = (data: string) => {
  console.log("Downloaded data from : ", data);
};

handleDownload(
  "https://sundsgarden.se/utbildningar-kurser/langa-kurser/yrkesutbildningar/it-back-end-developer/",
  showData,
);

//8
type SuccessFunc = (message: string) => void;
type ErrorFunc = (message: string) => void;

const randomizer = (showSucess: SuccessFunc, showError: ErrorFunc) => {
  const randomMsg = Math.round(Math.random());

  if (randomMsg === 1) {
    showSucess("Sucess :)");
  } else {
    showError("Error :(");
  }
};

const successCallback = (succsessMsg: string) => {
  console.log(succsessMsg);
};
const errorCallback = (errorMsg: string) => {
  console.log(errorMsg);
};

randomizer(successCallback, errorCallback);

//9
type ShowResultFunc = (result: number) => void;

const calculator = (
  a: number,
  b: number,
  operation: string,
  showResult: ShowResultFunc,
) => {
  let result: number;

  if (operation === "add") {
    result = a + b;
  } else if (operation === "subtract") {
    result = a - b;
  } else if (operation === "multiply") {
    result = a * b;
  } else if (operation === "divide") {
    result = a / b;
  } else {
    console.log("error operation");
    return;
  }
  showResult(result);
};
const showResult = (result: number) => {
  console.log(result);
};

calculator(100, 25, "add", showResult);
calculator(133, 121, "subtract", showResult);
calculator(120, 53, "multiply", showResult);
calculator(120, 51, "divide", showResult);

//10
type stepFunc = () => void;

const stepOne = (handleComplete: stepFunc) => {
    console.log("Step 1 ...")
  setTimeout(() => {
    console.log("Step 1 done");
    handleComplete();
  }, 1000);
};

const stepTwo = (handleComplete: stepFunc) => {
    console.log("Step 2 ...")
  setTimeout(() => {
    console.log("Step 2 done");
    handleComplete();
  }, 1000);
};

const stepThree = (handleComplete: stepFunc) => {
  setTimeout(() => {
    console.log("Step 3 ...")
    console.log("Step 3 done");
    handleComplete();
  }, 1000);
};

const finalStep = () => {
  console.log("All steps completed!!!");
};

stepOne(() => {
  stepTwo(() => {
    stepThree(finalStep);
  });
});
