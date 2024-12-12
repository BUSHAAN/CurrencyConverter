import { CircularProgress, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import ArrowsExchanged from "../assets/images/arrows-exchange.png";
import ButtonAppBar from "../components/ButtonAppBar";
import Dropdown from "../components/Dropdown";
import InputTextField from "../components/InputTextField";
import convertCurrency, { ConversionResult } from "../services/convertCurrency";
import currencyStore from "../services/currencyStore";
import getSymbols from "../services/getSymbols";
import getRates from "../services/getRates";
import Logo from "../assets/images/Logo.png";

const Home = () => {
  const { amount, toCurrency, fromCurrency, setToCurrency, setFromCurrency } =
    currencyStore();
  const [result, setResult] = useState<ConversionResult | null>({
    fromToRate: 0,
    toFromRate: 0,
    convertedAmount: 0,
  });
  const [currencies, setCurrencies] = useState();
  const [rates, setRates] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  const getCurrencyName = (label: string | null): string | null => {
    if (label && currencies) {
      return currencies[label];
    }
    return null;
  };

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  useEffect(() => {
    if (fromCurrency && toCurrency && rates) {
      const result = convertCurrency(amount, fromCurrency, toCurrency, rates);
      setResult(result);
    } else {
      console.log("Please select currencies");
    }
  }, [fromCurrency, toCurrency, amount]);

  useEffect(() => {
    const getCurrencies = async () => {
      const response = await getSymbols();
      setCurrencies(response);
    };
    const getExchangeRates = async () => {
      const response = await getRates();
      setRates(response.rates);
    };
    const fetchData = async () => {
      setLoading(true);
       await getCurrencies();
       await getExchangeRates();
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "primary.dark",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <ButtonAppBar />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: "15px",
              backgroundColor: "primary.main",
              width: "50vw",
              minWidth: "300px",
              height: { xs: "80vh", sm: "80vh", md: "70vh" },
              minHeight: { xs: "525px", sm: "525px", md: "450px" },
              boxShadow: 6,
              borderRadius: 5,
              padding: 2,
              display: "flex",
              position: "relative",
              flexDirection: "column",
              justifyContent: loading ? "start" : "center",
              alignItems: "center",
            }}
          >
            {loading ? (
              <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                <CircularProgress color="secondary" />
              </Box>
            ) : (
              <>
                <InputTextField />
                <Box
                  sx={{
                    position: "relative",
                    bottom: "10px",
                    marginBottom: "40px",
                    display: "flex",
                    width: "80%",
                    gap: "10px",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Dropdown
                    heading={"From"}
                    onCurrencySelect={setFromCurrency}
                    swappedValue={{
                      label: fromCurrency || "",
                      Name: getCurrencyName(fromCurrency) || "",
                    }}
                  />
                  <Box
                    sx={{
                      cursor: "pointer",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "10%",
                      height: "50px",
                    }}
                  >
                    <Box
                      onClick={handleSwap}
                      sx={{
                        position: "relative",
                        top: "25px",
                        transform: {
                          xs: "rotate(90deg)",
                          sm: "rotate(90deg)",
                          md: "rotate(0deg)",
                        },
                      }}
                    >
                      <img src={ArrowsExchanged} />
                    </Box>
                  </Box>
                  <Dropdown
                    heading="To"
                    onCurrencySelect={setToCurrency}
                    swappedValue={{
                      label: toCurrency || "",
                      Name: getCurrencyName(toCurrency) || "",
                    }}
                  />
                </Box>
                <Box>
                  <img src={Logo} alt="" />
                </Box>
                <Box
                  sx={{
                    marginTop: "20px",
                    width: "80%",
                    height: { xs: "60px", sm: "60px", md: "120px", lg: "80px" },
                    border: "1px solid",
                    borderColor: "info.main",
                    backgroundColor: "primary.main",
                    borderRadius: "10px",
                    padding: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "space-between",
                    },
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "primary.contrastText",
                        fontSize: "20px",
                      }}
                    >
                      {amount}{" "}
                      <Typography
                        sx={{
                          display: {
                            fontSize: "20px",
                            xs: "none",
                            sm: "none",
                            md: "inline",
                          },
                        }}
                        component="span"
                      >
                        {getCurrencyName(fromCurrency)} =
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          display: { xs: "inline", sm: "inline", md: "none" },
                        }}
                        component="span"
                      >
                        {`${fromCurrency} =`}
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        color: "secondary.main",
                        fontSize: "24px",
                        fontWeight: "600",
                      }}
                    >
                      {result?.convertedAmount.toFixed(4)}{" "}
                      <Typography
                        sx={{
                          color: "primary.contrastText",
                          fontSize: "24px",
                          display: { xs: "none", sm: "none", md: "inline" },
                        }}
                        component="span"
                      >
                        {getCurrencyName(toCurrency)}
                      </Typography>
                      <Typography
                        sx={{
                          color: "primary.contrastText",
                          fontSize: "24px",
                          display: { xs: "inline", sm: "inline", md: "none" },
                        }}
                        component="span"
                      >
                        {toCurrency}
                      </Typography>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "none", md: "block" },
                      width: "1px",
                      height: "120%",
                      backgroundColor: "info.main",
                    }}
                  />
                  <Box
                    sx={{
                      width: "30%",
                      display: { xs: "none", sm: "none", md: "block" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "primary.contrastText",
                        fontSize: { md: "14px", lg: "16px" },
                      }}
                    >
                      {`${
                        result?.fromToRate == 0 ? "0" : "1"
                      } ${fromCurrency}  = ${result?.fromToRate.toFixed(
                        4
                      )} ${toCurrency}`}
                    </Typography>
                    <Typography
                      sx={{
                        color: "primary.contrastText",
                        fontSize: { md: "14px", lg: "16px" },
                      }}
                    >
                      {`${
                        result?.toFromRate == 0 ? "0" : "1"
                      } ${toCurrency} = ${result?.toFromRate.toFixed(
                        4
                      )} ${fromCurrency}`}
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
