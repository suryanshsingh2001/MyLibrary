import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '999',
                display: isVisible ? 'block' : 'none',
                cursor: 'pointer',
            }}
            onClick={scrollToTop}
        >
            <div
                style={{
                    backgroundColor: 'black',
                    color: '#fff',
                    width: '40px', // Set width and height to make it circular
                    height: '40px', // Same value for width and height
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    transition: 'background-color 0.3s ease',
                }}
            >
                <ArrowUpwardIcon />
            </div>
        </div>
    );
};
