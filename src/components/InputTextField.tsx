import TextField from "@mui/material/TextField";
import { textFieldStyle } from "../assets/commonStyles";
import Typography from "@mui/material/Typography";
import currencyStore from "../services/currencyStore";


const InputTextField = () => {
  const { amount, setAmount } = currencyStore();
  return (
    <>
      <TextField
        value={amount}
        variant="outlined"
        autoComplete="off"
        onChange={(e) => setAmount(Number(e.target.value))}
        sx={{
          ...textFieldStyle(),
          mt: "30px",
          width: "250px",
        }}
      ></TextField>
      <Typography
        variant="body1"
        sx={{
          position: "relative",
          top: "-65px",
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
