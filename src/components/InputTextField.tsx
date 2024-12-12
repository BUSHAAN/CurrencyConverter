import TextField from "@mui/material/TextField";
import { textFieldStyle } from "../assets/commonStyles";
import Typography from "@mui/material/Typography";
import currencyStore from "../services/currencyStore";
import { useState } from "react";

const MAX_VALUE = 100000000;

const InputTextField = () => {
  const { amount, setAmount } = currencyStore();
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const input = e.target.value;

    if (/^\d*\.?\d*$/.test(input)) {
      const numericValue = Number(input);

      if (numericValue > MAX_VALUE) {
        setError(`Value cannot exceed ${MAX_VALUE}.`);
      } else {
        setError("");
        setAmount(numericValue);
      }
    } else {
      setError("Invalid input: Please enter a valid number.");
    }
  };
  return (
    <>
      <TextField
        value={amount}
        variant="outlined"
        autoComplete="off"
        onChange={handleInputChange}
        sx={{
          ...textFieldStyle(),
          mt: "30px",
          width: "250px",
        }}
        error={!!error}
        helperText={
          error && (
            <Typography
              sx={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "red",
                fontSize: "12px",
              }}
            >
              {error}
            </Typography>
          )
        }
      ></TextField>
      <Typography
        variant="body1"
        sx={{
          position: "relative",
          top: error ? "-90px" : "-65px",
          right: "80px",
          color: "primary.contrastText",
          fontSize: "16px",
        }}
      >
        Amount
      </Typography>
    </>
  );
};

export default InputTextField;
