const moneyCheck = (balance: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (balance > 0) {
        resolve("Yay I have money!!");
      } else {
        reject("I am broke :(");
      }
    });
  };
  
  moneyCheck(0)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


    const moneyCheck = async (balance: number): Promise<string> => {
        if (balance > 0) {
          return "Yay I have money!!";
        }
        throw new Error("I am broke :(");
      };
      
      try {
        const result = await moneyCheck(100);
        console.log(result);
      } catch (error) {
        console.log((error as Error).message);
      }



    const fetchDogImg = async (): Promise<string> => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        return data.message;
      } catch (error) {
        throw new Error("Could not fetch dog image :(");
      }
    };
      
      fetchDogImg();   


      const flipCoin = (): Promise<string> => {
        return new Promise((resolve, reject) => {
          const outcome = Math.random() > 0.5;
          outcome ? resolve("You win!") : reject("You lose!");
        });
      };

      const coinFlipDogImg = async (): Promise<void> => {
        try {
          const result = await flipCoin();
          console.log(result);
          
          const dog = await fetchDogImg();
          console.log("Here's your dog:", dog);
        } catch (error) {
            console.log(error);
          console.log("Better luck next time!");
        }
      };
      
      coinFlipDogImg();
export { };

