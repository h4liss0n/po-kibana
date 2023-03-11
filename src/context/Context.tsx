import React from "react";
import { CountryApllicationEnum } from "../common/CountryApplication";

export type PropsGlobalValue = {
  accountId: string;
  interactionId: string;
  campaignId: string;
  country: CountryApllicationEnum;
};

export const defaultGlobalValue = {
  accountId: "",
  interactionId: "",
  campaignId: "",
  country: CountryApllicationEnum.US,
};

export const GlobalValue = React.createContext({
  value: defaultGlobalValue,
  setValue: (value: PropsGlobalValue) => {},
});
