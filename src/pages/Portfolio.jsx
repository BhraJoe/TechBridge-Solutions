import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';

import projectFintech from '../assets/project-fintech.png';
import projectEcommerce from '../assets/project-ecommerce.png';
import projectHealth from '../assets/project-health.png';
import projectBanking from '../assets/project-banking.png';

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
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            category: "E-commerce",
            description: "Full-stack e-commerce solution with custom cart and payment gateway integration.",
            tags: ["Next.js", "Stripe", "PostgreSQL"],
            image: projectEcommerce,
            link: "#",
        },
        {
            id: 3,
            title: "HealthTech Mobile App",
            category: "Mobile",
            description: "Patient management system with appointment scheduling and telemedicine features.",
            tags: ["React Native", "Firebase", "Redux"],
            image: projectHealth,
            link: "#",
        },
        {
            id: 4,
            title: "Corporate Banking Portal",
            category: "Fintech",
            description: "Secure enterprise portal for managing assets and liquidity.",
            tags: ["TypeScript", "React", "Java Spring"],
            image: projectBanking,
            link: "#",
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
                    <Motion.div
                        className="hero-content-centered"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
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
                    <div className="filter-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <Motion.div layout className="portfolio-grid">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <Motion.div
                                    layout
                                    key={project.id}
                                    className="project-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="project-image-wrapper">
                                        <img src={project.image} alt={project.title} loading="lazy" />
                                        <div className="project-overlay">
                                            <div className="project-links">
                                                <a href={project.link} aria-label="Github"><Github size={24} /></a>
                                                <a href={project.link} aria-label="Live Demo"><ExternalLink size={24} /></a>
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
                        </AnimatePresence>
                    </Motion.div>
                </div>
            </section>
        </Motion.div>
    );
};

export default Portfolio;