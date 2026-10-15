import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
    return (
        <div className="skeleton-loader">
            <div className="skeleton-hero" />
            <div className="skeleton-grid">
                <div className="skeleton-item" />
                <div className="skeleton-item" />
                <div className="skeleton-item" />
            </div>
            <div className="skeleton-footer" />
        </div>
    );
};

export default SkeletonLoader;