import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BaudSelector = ({ value, onChange }) => {
  return (
    <Box sx={{ minWidth: 10 }}>
      <Select
        value={value}
        onChange={onChange}
        sx={{
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black'
          },
          maxHeight: 37,
          minWidth: 100
        }}
      >
        <MenuItem value={9600}>9600</MenuItem>
        <MenuItem value={19200}>19200</MenuItem>
        <MenuItem value={38400}>38400</MenuItem>
        <MenuItem value={57600}>57600</MenuItem>
        <MenuItem value={115200}>115200</MenuItem>
      </Select>
    </Box>
  );
};

export default BaudSelector;
