import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Monitor, Code, Rocket, CheckCircle, Layout, Star, Zap, Shield, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => {
    const processSteps = [
        { step: "01", title: "Discovery", desc: "Understand your vision and goals." },
        { step: "02", title: "Strategy", desc: "Plan technical architecture." },
        { step: "03", title: "Development", desc: "Build with clean, scalable code." },
        { step: "04", title: "Launch", desc: "Test, deploy, and support." }
    ];

    const testimonials = [
        { name: "Sarah Johnson", role: "CEO, TechStart Inc.", text: "Delivered ahead of schedule. Expertise is unmatched.", rating: 5 },
        { name: "Michael Chen", role: "Founder, RetailFlow", text: "Transformed our digital presence. Highly recommended!", rating: 5 },
        { name: "Aisha Patel", role: "CTO, HealthBridge", text: "True understanding of enterprise needs.", rating: 5 }
    ];

    return (
        <Motion.div
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="container hero-container">
                    <Motion.div
                        className="hero-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="hero-badge">
                            <span className="pulse-dot"></span> Available for new projects
                        </span>
                        <h1>Building Digital Excellence for Modern Businesses.</h1>
                        <p>A team of Software Engineers and Creative Technologists building premium web applications that scale.</p>
                        <div className="hero-cta">
                            <Link to="/contact" className="btn-primary btn-lg">
                                Start a Project
                            </Link>
                            <Link to="/portfolio" className="btn-outline btn-lg">
                                View Work
                            </Link>
                        </div>
                    </Motion.div>

                    <Motion.div
                        className="scroll-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <span>Scroll</span>
                    </Motion.div>
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="section services-preview">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Expertise</h2>
                        <p>High-touch solutions for ambitious brands.</p>
                    </div>
                    <div className="services-grid">
                        <ServiceCard
                            icon={Monitor}
                            title="Web Development"
                            description="Custom, high-performance websites built with modern technologies."
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={Code}
                            title="Software Solutions"
                            description="Robust, scalable software tailored to business operations."
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={Rocket}
                            title="Digital Consulting"
                            description="Strategic advice to navigate the digital landscape."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="section why-us-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Us?</h2>
                        <p>It's not just about code. It's about solving real problems.</p>
                    </div>

                    <div className="features-grid">
                        <Motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="feature-icon"><Zap size={28} /></div>
                            <h3>Performance First</h3>
                            <p>Blazing fast load times and optimized core web vitals.</p>
                        </Motion.div>

                        <Motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="feature-icon"><Layout size={28} /></div>
                            <h3>Mobile Adaptive</h3>
                            <p>Seamless designs from 4K desktops to smartphones.</p>
                        </Motion.div>

                        <Motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="feature-icon"><Shield size={28} /></div>
                            <h3>Enterprise Logic</h3>
                            <p>Robust architecture and clean code that scales.</p>
                        </Motion.div>

                        <Motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="feature-icon"><CheckCircle size={28} /></div>
                            <h3>Reliable Delivery</h3>
                            <p>Transparent communication and on-time delivery.</p>
                        </Motion.div>
                    </div>
                </div>
            </section>

            <section className="section process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>How We Work</h2>
                        <p>A proven process for delivering excellence.</p>
                    </div>
                    <div className="process-grid">
                        {processSteps.map((p, index) => {
                            const icons = [Monitor, Code, Rocket, ShieldCheck];
                            const StepIcon = icons[index];
                            return (
                                <div
                                    key={index}
                                    className="process-step"
                                >
                                    <div className="process-icon"><StepIcon size={28} /></div>
                                    <span className="step-number">{p.step}</span>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2>What Clients Say</h2>
                        <p>Trusted by teams who value quality.</p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="testimonial-card"
                            >
                                <div className="testimonial-stars">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                                <div className="testimonial-author">
                                    <strong>{t.name}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to elevate your online presence?</h2>
                        <p>Let's turn your vision into a high-performing reality.</p>
                        <Link to="/contact" className="btn-primary btn-lg">
                            Get in Touch <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </Motion.div>
    );
};

export default Home;