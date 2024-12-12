import { create } from "zustand";

interface CurrencyState {
  toCurrency: string | null;
  fromCurrency: string | null;
  amount: number;
  setToCurrency: (toCurrency: string | null) => void;
  setFromCurrency: (fromCurrency: string | null) => void;
  setAmount: (amount: number) => void;
}

const currencyStore = create<CurrencyState>((set) => ({
  toCurrency: "USD",
  fromCurrency: "EUR",
  amount: 0,
  setToCurrency: (toCurrency: string | null) => set({ toCurrency }),
  setFromCurrency: (fromCurrency: string | null) => set({ fromCurrency }),
  setAmount: (amount: number) => set({ amount }),
}));

export default currencyStore;
