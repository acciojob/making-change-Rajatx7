const makeChange = (c) => {
  // your name here
	 // Define the values of coins
    const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;

    // Parse the input as an integer
    const amount = parseInt(c);

    // Calculate the number of quarters
    const q = Math.floor(amount / quarterValue);
    amount %= quarterValue;

    // Calculate the number of dimes
    const d = Math.floor(amount / dimeValue);
    amount %= dimeValue;

    // Calculate the number of nickels
    const n = Math.floor(amount / nickelValue);
    amount %= nickelValue;

    // The remaining amount is in pennies
    const p = amount;

    // Create and return the result object
    const result = {
        q: q,
        d: d,
        n: n,
        p: p
    };

    return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
