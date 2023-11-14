import { CountryType } from '@/types/models';
import { Autocomplete, TextField, Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type CountrySelectProps = {
    register: any;
    countries: CountryType[];
}

export default function CountrySelect({ register, countries }: CountrySelectProps) {
    return (
        <>
            <Autocomplete
                size='small'
                id="countrySelect"
                sx={{

                }}
                options={countries}
                getOptionLabel={(option) => option.label}
                renderOption={(props, option, index) => (
                    <Box
                        component="li"
                        sx={{
                            '& > img': { mr: 2, flexShrink: 0 },

                            '& .MuiFormLabel-root': {
                                fontSize: '.8rem',
                            },
                            '& label.Mui-focused': {
                                color: '#1c2437',
                            },
                            '& .MuiOutlinedInput-root': {
                                fontSize: 14,
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1c2437',
                                    borderWidth: '1px'
                                },
                                '& fieldset span': {
                                    paddingRight: '6px',
                                },
                                '&.Mui-focused fieldset span': {
                                    paddingRight: '6px',
                                },
                            },

                        }} {...props}>
                        <Image
                            style={{ width: 'auto' }}
                            height={15}
                            width={15}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label} ({option.code})
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose a country"
                        inputProps={{
                            ...params.inputProps
                        }}
                        {...register('country',
                            {
                                required: {
                                    value: true,
                                    message: 'Counry is required',
                                }
                            })}
                    />
                )}
            />
        </>
    )
}
