export type ConversionResult = {
  fromToRate: number;
  toFromRate: number;
  convertedAmount: number;
};

const convertCurrency = (
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: Record<string, number>
): ConversionResult => {
  if (!rates[fromCurrency] || !rates[toCurrency]) {
    throw new Error("Invalid currency code.");
  }

  const fromToRate = rates[toCurrency] / rates[fromCurrency];
  const toFromRate = rates[fromCurrency] / rates[toCurrency];
  const convertedAmount = amount * fromToRate;

  return { fromToRate, toFromRate, convertedAmount };
};

export default convertCurrency;
