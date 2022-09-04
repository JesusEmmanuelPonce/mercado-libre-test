export const currencyFormat = (amount: number | string ) => {

    let amountNumber = 0;

    if(typeof amount === 'string'){
        amountNumber = parseFloat(amount);
    } else{
        amountNumber = amount
    }

    const currency = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return currency.format(amountNumber);
};
