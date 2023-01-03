export const convertCurrency = (value: number) => {
  const toUSDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 4,
  });
  return toUSDollar.format(value);
};
