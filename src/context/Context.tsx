import React from "react";
import { CountryApllicationEnum } from "../common/CountryApplication";

export type PropsGlobalValue = {
  accountId: string;
  interactionId: string;
  campaignId: string;
  country: CountryApllicationEnum;
  ready: boolean
};

export const defaultGlobalValue = {
  accountId: "",
  interactionId: "",
  campaignId: "",
  country: CountryApllicationEnum.US,
  ready: false
};

export const GlobalValue = React.createContext({
  value: defaultGlobalValue,
  setValue: (value: PropsGlobalValue) => {},
});
