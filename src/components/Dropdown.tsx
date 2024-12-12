import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import  currencies  from "../constants/symbols";
import { useEffect, useState } from "react";
import currencyStore from "../services/currencyStore";

interface DropdownProps {
  heading: string;
  swappedValue?: Currency | null;
  onCurrencySelect: (currency: string | null) => void; // Updated to accept null
}

interface Currency {
  label: string; // Currency code
  Name: string; // Currency name
}

const Dropdown = ({
  heading,
  swappedValue,
  onCurrencySelect,
}: DropdownProps) => {
  const [value, setValue] = useState<Currency | null>(swappedValue ?? null);
  const [inputValue, setInputValue] = useState("");

  // Convert currencies object to an array of Currency objects
  const mapCurrencies = (currencies: Record<string, string>): Currency[] => {
    return Object.entries(currencies).map(([label, Name]) => ({ label, Name }));
  };

  const symbolsMap: Currency[] = mapCurrencies(currencies);

  useEffect(() => {
    setValue(swappedValue);
  }, [swappedValue]);

  return (
    <>
      <Box
        sx={{
          borderRadius: "10px",
          width: "80%",
          height: "50px",
        }}
      >
        <Typography
          sx={{
            position: "relative",
            left: "5px",
            bottom: "5px",
            color: "primary.contrastText",
          }}
        >
          {heading}
        </Typography>
        <Autocomplete
          disablePortal
          options={symbolsMap}
          getOptionLabel={(option) => `${option.label} - ${option.Name}`}
          renderOption={(props, option) => (
            <li {...props} key={option.label}>
              {option.label} - {option.Name}
            </li>
          )}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "10px",
              backgroundColor: "primary.main",
            },
          }}
          renderInput={(params) => <TextField {...params} />}
          value={value}
          onChange={(event, newValue: Currency | null) => {
            setValue(newValue);
            onCurrencySelect(newValue?.label || null); // Send the currency code (label) to parent
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
        />
      </Box>
    </>
  );
};

export default Dropdown;
