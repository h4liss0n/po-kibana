import React from "react";
import {  
  MenuItem,
  Select,  
  TextFieldProps,
} from "@mui/material";
import {
  Controller,  
  FieldValues,
  Control,  
  Path,
} from "react-hook-form";

export type ComboBoxOptions = {
  key: string;
  value: any;
  label: string;
};

type PropsCombobox<T extends FieldValues> = Omit<TextFieldProps, "name"> & {
  control: Control<T, object>;  
  name: Path<T>;  
  label: string,
  options: ComboBoxOptions[];
};

export const ComboBox = <T extends FieldValues>({
  control,
  options,  
  name,  
  label
}: PropsCombobox<T>) => {
  return (
    <Controller
      name={name}
      control={control}            
      render={({ field: { value, onChange} }) => (
        <Select          
          label={label}
          variant="outlined"          
          value={value}
          onChange={(e) => onChange(e.target.value)}
          fullWidth                    
        >          
          
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};
