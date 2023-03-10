import React from 'react';


export type PropsGlobalValue = {
    accountId: string,
    interactionId: string
}


export const defaultGlobalValue = {
    accountId: "",
    interactionId: "",
}

export const GlobalValue = React.createContext({
    value: defaultGlobalValue,
    setValue: (value: PropsGlobalValue) => { }
});