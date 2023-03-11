import React, { useContext } from "react";
import { useForm, Resolver } from "react-hook-form";
import { GlobalValue } from "../../context/Context";
import { Box, Button, Grid, TextField } from "@mui/material";
import {
  CountryApplicationEnumKeys,
  stringToCountryApllicationEnum,
} from "../../common/CountryApplication";
import { ComboBox, ComboBoxOptions } from "../combobox/ComboBox";

type FormValues = {
  accountId: string;
  interactionId: string;
  country: CountryApplicationEnumKeys;
  campaignId: string
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.accountId ? values : {},
    errors: !values.accountId
      ? {
          accountId: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export const Envioriment = () => {
  const globalValue = useContext(GlobalValue);
  const { setValue } = globalValue;

  const options: ComboBoxOptions[] = [
    { key: "US", value: "US", label: "US" },
    { key: "EU", value: "EU", label: "EU" },
    { key: "CA", value: "CA", label: "CA" },
  ];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    defaultValues: {
      accountId: "61c5d7d196ebb0e483f81659",
      country: "US",
      campaignId: "13698"
    },
  });
  const onSubmit = handleSubmit((data) => {
    setValue({
      accountId: data.accountId,
      interactionId: data.interactionId,
      country: stringToCountryApllicationEnum(data.country),
      campaignId: data.campaignId
    });
  });

  return (
    <Box
      component="form"
      noValidate
      mt={2}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <TextField
            fullWidth
            label="Account ID"
            helperText={errors?.accountId && errors.accountId.message}
            {...register("accountId")}
          />
        </Grid>
        <Grid item xs={6} md={12}>
          <TextField
            fullWidth
            label="Interaction ID"
            {...register("interactionId")}
          />
        </Grid>
        <Grid item xs={6} md={12}>
          <ComboBox
            control={control}
            name="country"
            label="Country"
            options={options}
          />
        </Grid>
        <Grid item xs={6} md={12}>
          <TextField
            fullWidth
            label="Campaign ID"
            {...register("campaignId")}
          />
        </Grid>
        <Grid item xs={6} md={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button variant="contained" type="submit">
              Build 
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
