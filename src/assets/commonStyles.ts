

export const textFieldStyle = () => {
  return {
    "& .MuiInputBase-root": {
      height: "70px",
      borderRadius: "10px",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "2px solid",
        borderColor: "secondary.main",
      },
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "secondary.main",
        },
        backgroundColor: "primary.light",
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        border: "2px solid",
        borderColor: "secondary.main", // Orange focus border
      },
    },
    "& input": {
      position: "relative",
      top: "12px",
      textAlign: "left",
      fontSize: "22px",
      fontFamily: "Poppins, sans-serif",
      color: "primary.contrastText",
      fontWeight: "medium",
    },
  };
};
