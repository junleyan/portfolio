import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

export const TypewriterTypography = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index));
            index++;
            if (index > text.length) {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <Typography variant="body">{displayedText}</Typography>
    );
};
