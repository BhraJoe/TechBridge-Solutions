import React from 'react';
import './Logo.css';

const Logo = ({ size = 40, showText = true, className = '' }) => {
    return (
        <div className={`logo-container ${className}`}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="logo-svg"
            >
                <defs>
                    <linearGradient id="logoGrad1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="logoGrad2" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1e40af" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                </defs>
                <path
                    d="M8 44V14H20L22 4H32L30 14H40V44H30V26H18V44H8Z"
                    fill="url(#logoGrad1)"
                    opacity="0.9"
                />
                <path
                    d="M18 44V26H30V44H40V14H30V26H18Z"
                    fill="url(#logoGrad2)"
                />
                <circle cx="24" cy="8" r="3" fill="#fff" />
            </svg>
            {showText && (
                <span className="logo-text">
                    TechBridge<span className="logo-highlight">Solutions</span>
                </span>
            )}
        </div>
    );
};

export default Logo;