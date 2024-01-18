import * as React from 'react';
import Radio from '@mui/material/Radio';
import { Box, FormControlLabel, } from '@mui/material';

type RadioPropsType = {
    value: string;
    label: string;
    selectedRadioValue: string;
    setSelectedRadioValue: React.Dispatch<React.SetStateAction<string>>
}
export default function RadioBtn({ value, label, selectedRadioValue, setSelectedRadioValue }: RadioPropsType) {

    function handleChangeRadio(event: React.ChangeEvent<HTMLInputElement>): void {
        setSelectedRadioValue(event.target.value)
        console.log(event.target.value)
    }

    return (
        <>
            <FormControlLabel
                sx={{
                    '& .MuiFormControlLabel-label': {
                        fontSize: '.7rem'
                    }
                }}
                label={label}
                control={
                    <Radio
                        size='small'
                        sx={{
                            color: 'whiteSmoke',
                            '&.Mui-checked': {
                                color: '#ED7D31',
                            },
                        }}
                        checked={selectedRadioValue === `${value}`}
                        onChange={handleChangeRadio}
                        value={value}
                    />
                }
            />
        </>
    );
}