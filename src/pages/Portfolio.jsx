import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe, Palette, Rocket, ShieldCheck, Code, Smartphone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectFintech from '../assets/project-fintech.png';
import projectEcommerce from '../assets/project-ecommerce.png';
import projectHealth from '../assets/project-health.png';
import projectBanking from '../assets/project-banking.png';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "FinTech Dashboard",
            category: "Fintech",
            description: "Financial analytics dashboard with real-time data visualization and transaction processing.",
            tags: ["React", "D3.js", "Node.js"],
            image: projectFintech,
            link: "#",
            github: "techbridge/fintech-dashboard",
            demo: "https://demo.techbridge.com/fintech",
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            category: "E-commerce",
            description: "Full-stack e-commerce solution with custom cart and payment gateway integration.",
            tags: ["Next.js", "Stripe", "PostgreSQL"],
            image: projectEcommerce,
            link: "#",
            github: "techbridge/ecommerce-platform",
            demo: "https://demo.techbridge.com/ecommerce",
        },
        {
            id: 3,
            title: "HealthTech Mobile App",
            category: "Mobile",
            description: "Patient management system with appointment scheduling and telemedicine features.",
            tags: ["React Native", "Firebase", "Redux"],
            image: projectHealth,
            link: "#",
            github: "techbridge/healthtech-app",
            demo: "https://demo.techbridge.com/health",
        },
        {
            id: 4,
            title: "Corporate Banking Portal",
            category: "Fintech",
            description: "Secure enterprise portal for managing assets and liquidity.",
            tags: ["TypeScript", "React", "Java Spring"],
            image: projectBanking,
            link: "#",
            github: "techbridge/corporate-banking",
            demo: "https://demo.techbridge.com/banking",
        }
    ];

    const categories = ["All", "Fintech", "E-commerce", "Mobile"];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <Motion.div
            className="portfolio-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="portfolio-hero-section">
                <div className="container">
                    <div className="hero-gradient-orb orb-1"></div>
                    <div className="hero-gradient-orb orb-2"></div>
                    <Motion.div
                        className="hero-content-centered"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h1>Selected <span className="text-gradient">Works</span></h1>
                        <p className="hero-tagline">Innovation in every pixel</p>
                        <p className="hero-description">
                            A curated selection of projects demonstrating our ability to solve complex problems with elegant code.
                        </p>
                    </Motion.div>
                </div>
            </section>

            <section className="section portfolio-section">
                <div className="container">
                    <Motion.div
                        className="portfolio-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Featured Projects</span>
                        <h2>Featured Projects</h2>
                        <p>A curated selection showcasing our capabilities and design excellence</p>
                    </Motion.div>

                    <Motion.div
                        className="filter-tabs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </Motion.div>

                    <Motion.div
                        layout
                        className="portfolio-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        {filteredProjects.map((project) => (
                            <Motion.div
                                layout
                                key={project.id}
                                className="project-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <a href={project.github} aria-label="Github" target="_blank" rel="noopener noreferrer">
                                                <Globe size={22} />
                                            </a>
                                            <a href={project.demo} aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={22} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <div className="project-header">
                                        <span className="category-tag">{project.category}</span>
                                        <h3>{project.title}</h3>
                                    </div>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>
        </Motion.div>
    );
};

export default Portfolio;