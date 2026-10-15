import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
    }, [location]);

    useEffect(() => {
        if (!isOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
        const handleResize = () => {
            if (window.innerWidth > 840) setIsOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleResize);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" aria-label="TechBridge Solutions home">
                    <Logo size={28} />
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-desktop">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ''}
                                    aria-current={location.pathname === link.path ? 'page' : undefined}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact" className="btn-primary">
                        Start a Project
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggle"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="navbar-mobile" id="mobile-navigation">
                        <p className="mobile-menu-label">Navigate</p>
                        <ul className="mobile-nav-links">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={location.pathname === link.path ? 'active' : ''}
                                        aria-current={location.pathname === link.path ? 'page' : undefined}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/contact" className="btn-primary mobile-btn">
                                    Start a Project
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;