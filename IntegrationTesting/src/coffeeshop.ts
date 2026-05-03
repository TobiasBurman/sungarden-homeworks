export function createDrink(type: string) {
    const menu: Record<string, number> = {
      latte: 45,
      espresso: 30,
      cappuccino: 50,
    };
    return { type, price: menu[type] };
  }
  
  export function prepareOrder(drink: { type: string }) {
    console.log(`Preparing ${drink.type}...`);
    return Math.floor(Math.random() * 1000);
  }
  
  export function processPayment(ticketNumber: number, amount: number) {
    if (!ticketNumber && ticketNumber !== 0) throw new Error("No ticket number provided");
    console.log(`Payment of ${amount} received for ticket #${ticketNumber}`);
    return true;
  }
  
  export function orderDrink(drinkType: string) {
    const drink = createDrink(drinkType);
    const ticketNumber = prepareOrder(drink);
    return processPayment(ticketNumber, drink.price);
  }