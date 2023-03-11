import React from "react";
import {
  CountryApllicationEnum,  
} from "../common/CountryApplication";

export type PropsGlobalValue = {
  accountId: string;
  interactionId: string;
  country: CountryApllicationEnum;
};

export const defaultGlobalValue = {
  accountId: "",
  interactionId: "",
  country: CountryApllicationEnum.US,
};

export const GlobalValue = React.createContext({
  value: defaultGlobalValue,
  setValue: (value: PropsGlobalValue) => {},
});
