export const formatCurrency = (price) => {
  const { amount, currency, decimals } = price;
  const countryCurrency = {
    COP: {
      integerDivider: ".",
      decimalsDivider: ",",
      currencySymbol: "$",
    },
    ARS: {
      integerDivider: ".",
      decimalsDivider: ",",
      currencySymbol: "$",
    },
  };

  function formmatter(priceAmount, precision) {
    const { integerDivider, decimalsDivider, currencySymbol } = countryCurrency[
      currency
    ];
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    let numberValue = priceAmount.toString();

    const [integer, decimals = ""] = numberValue.split(".");
    numberValue = integer.replace(regex, integerDivider);

    if (priceAmount % 1 !== 0 && precision > 0) {
      numberValue += `${decimalsDivider}${decimals.slice(0, precision)}`;
    }
    return `${currencySymbol} ${numberValue}`;
  }

  return formmatter(Math.abs(amount), decimals);
};
