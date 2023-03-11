export enum CountryApllicationEnum {
  EU = "EU",
  US = "US",
  CA = "CA",
}

export type CountryApplicationEnumKeys = keyof typeof CountryApllicationEnum;



export const  stringToCountryApllicationEnum = (key: CountryApplicationEnumKeys): CountryApllicationEnum => {
  return CountryApllicationEnum[key]
}