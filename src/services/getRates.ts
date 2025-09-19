import axios from "axios";

const getRates = async () => {
  try {
    const response = await axios.get(
      "https://api.exchangeratesapi.io/v1/latest",
      {
        params: {
          access_key: import.meta.env.VITE_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching Rates", error);
    console.error("Failed to fetch currency Rates. Please try again later.");
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      "message" in error
    ) {
      const err = error as { code?: string; message?: string };
      console.error(
        `Failed to fetch currency Rates. Error-code: ${err.code} Error message: ${err.message}.`
      );
    }
  }
};

export default getRates;
