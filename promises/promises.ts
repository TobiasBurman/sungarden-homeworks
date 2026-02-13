export
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

const randomMusicGenre = (id: number): Promise<void> => {
  return fetch(`https://binaryjazz.us/wp-json/genrenator/v1/genre/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};



const flipCoin = () => {
    return new Promise((resolve, reject) => {
        let result = Math.random();
        if(result > 0.5){
            resolve("You Win!")
        }
        else{
            reject("You Lose!")
        }
    })
}

flipCoin()
  .then(result => {
    console.log(result);
    return randomMusicGenre(2);
  })
  .catch(error => {
    console.log(error);
  });
