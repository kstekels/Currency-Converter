import React, { createContext } from "react";
import { useState } from "react";

export const conversionContext = createContext();

// ConversionContext.Provider
// ConversionContext.Consumer

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("EUR");

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
  };

  return (
    <conversionContext.Provider value={contextValue}>
      {children}
    </conversionContext.Provider>
  );
};
