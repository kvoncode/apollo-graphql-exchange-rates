import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const ExchangeRates = () => {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      {currency} : {rate}
    </div>
  ));
};
