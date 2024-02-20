"use server";
import React from "react";

const countryData = (null);

const CountryContext = async () => {
  const cResponse = await fetch("https://restcountries.com/v3.1/all");
  const cData = await cResponse.json();
  return countryData.push(cData);
};

export default CountryContext;
