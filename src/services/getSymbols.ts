import axios from "axios";

const getSymbols = async () => {
  try {
    const response = await axios.get(
      `https://api.exchangeratesapi.io/v1/symbols`,
      {
        params: {
          access_key: import.meta.env.VITE_API_KEY,
        },
      }
    );
    return response.data.symbols;
  } catch (error) {
    console.error("Error fetching symbols", error);
    alert("Failed to fetch currency symbols. Please try again later.");
    // alert(`Failed to fetch currency symbols. Error-code: ${error.code} Error message: ${error.message}.`);
  }
};

export default getSymbols;
