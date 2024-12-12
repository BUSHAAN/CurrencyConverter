import axios from "axios";

const getRates = async () => {
    try {
        const response = await axios.get(
            "https://api.exchangeratesapi.io/v1/latest",
            {
                params: {
                    access_key: import.meta.env.VITE_API_KEY,
                },
            },
        );
        //console.log(response);
        return response.data;
    }catch(error){
        console.error("Error fetching symbols", error);
        alert("Failed to fetch currency symbols. Please try again later.");
        alert(`Failed to fetch currency symbols. 
               Error: ${error.response ? error.response.data.error : error.message}.
               Please check your internet connection or try again later.`);
    }
}

export default getRates;