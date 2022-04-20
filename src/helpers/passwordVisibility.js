import React, { useState } from 'react';

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(True);
    const [rightIcon, setRightIcon] = useState('eye');

    const handleVisibility = () => {
        if(rightIcon == 'eye'){
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        }
        else if(rightIcon == 'eye-off'){
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    return {
        passwordVisibility,
        rightIcon,
        handleVisibility
    };
};