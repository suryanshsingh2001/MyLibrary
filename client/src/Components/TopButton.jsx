import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Show button when the page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
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
                    backgroundColor: isHovered ? '#523f1b ' : 'black',
                    color: '#fff',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease', // Add box-shadow transition
                    transform: isHovered ? 'scale(1.07)' : 'scale(1)',
                    boxShadow: isHovered
                        ? '0 4px 6px rgba(0, 0, 0, 0.1)' // Add shadow when hovered
                        : 'none', // No shadow by default
                }}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
            >
                <ArrowUpwardIcon />
            </div>
        </div>
    );
};
