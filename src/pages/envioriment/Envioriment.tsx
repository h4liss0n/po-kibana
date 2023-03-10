import { Box, Button, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { GlobalValue } from '../../context/Context';

type FormValues = {
    accountId: string;
    interactionId: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.accountId ? values : {},
        errors: !values.accountId
            ? {
                accountId: {
                    type: 'required',
                    message: 'This is required.',
                },
            }
            : {},
    };
};



export const Envioriment = () => {
    const globalValue = useContext(GlobalValue);
    const { value, setValue } = globalValue


    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
    const onSubmit = handleSubmit((data) => {
        setValue(
            {
                accountId: data.accountId,
                interactionId: data.interactionId
            }
        )


    });

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <TextField
                fullWidth
                margin='normal'
                label="Account ID"
                helperText={errors?.accountId && errors.accountId.message}
                {...register("accountId")}
            />
            <TextField
                fullWidth
                margin='normal'
                label="Interaction ID"
                {...register("interactionId")}
            />
            <Button variant="contained" type="submit">Acesss</Button>
            {JSON.stringify(value)}
        </Box>

    );
}