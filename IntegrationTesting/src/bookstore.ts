export function findBook(title: string) {
    const catalogue: Record<string, number> = {
      dune: 89,
      neuromancer: 79,
      foundation: 75,
    };
    return { title, price: catalogue[title] };
  }
  
  export function reserveStock(book: { title: string }) {
    console.log(`Reserving stock for ${book.title}`);
    return Math.floor(Math.random() * 9000) + 1000;
  }
  
  export function confirmPurchase(reservationCode: number, price: number) {
    if (!reservationCode) throw new Error("Invalid reservation");
    console.log(`Purchase confirmed. Reservation: ${reservationCode}, Amount: ${price}`);
    return { success: true, code: reservationCode };
  }
  
  export function buyBook(title: string) {
    const book = findBook(title);
    const reservationCode = reserveStock(book);
    return confirmPurchase(reservationCode, book.price);
  }