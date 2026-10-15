import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Monitor, Code, Rocket, CheckCircle, Layout, Star, Zap, Shield, ShieldCheck, Users, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => {
    const processSteps = [
        { step: "01", title: "Discovery", desc: "Understand your vision, goals, and requirements through deep collaboration.", icon: Globe },
        { step: "02", title: "Strategy", desc: "Architect technical solutions with scalable architecture and modern tech stacks.", icon: Layout },
        { step: "03", title: "Development", desc: "Build with clean, maintainable code following industry best practices.", icon: Code },
        { step: "04", title: "Launch", desc: "Deploy, monitor, and provide ongoing support for long-term success.", icon: Rocket }
    ];

    const stats = [
        { number: "50+", label: "Projects Delivered", icon: Award },
        { number: "5+", label: "Years Experience", icon: Users },
        { number: "100%", label: "Client Satisfaction", icon: ShieldCheck },
        { number: "24/7", label: "Ongoing Support", icon: Zap }
    ];

    const testimonials = [
        { name: "Sarah Johnson", role: "CEO, TechStart Inc.", text: "TechBridge delivered our platform ahead of schedule with exceptional quality. Their expertise in modern web technologies is unmatched.", rating: 5 },
        { name: "Michael Chen", role: "Founder, RetailFlow", text: "Transformed our digital presence completely. The team's attention to detail and communication throughout the project was outstanding.", rating: 5 },
        { name: "Aisha Patel", role: "CTO, HealthBridge", text: "True understanding of enterprise needs. They built a scalable solution that grew with our business. Highly recommended!", rating: 5 }
    ];

    const features = [
        { title: "Performance First", desc: "Blazing fast load times and optimized core web vitals.", icon: Zap },
        { title: "Mobile Adaptive", desc: "Seamless designs from 4K desktops to smartphones.", icon: Layout },
        { title: "Enterprise Logic", desc: "Robust architecture and clean code that scales.", icon: Shield },
        { title: "Reliable Delivery", desc: "Transparent communication and on-time delivery.", icon: CheckCircle }
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
                <div className="hero-background">
                    <div className="hero-gradient-orb orb-1"></div>
                    <div className="hero-gradient-orb orb-2"></div>
                    <div className="hero-grid-pattern"></div>
                </div>
                <div className="container hero-container">
                    <Motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <Motion.span
                            className="hero-badge"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <span className="pulse-dot"></span>
                            <span>Ghana-based · Globally minded</span>
                        </Motion.span>
                        
                        <Motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Digital products
                            <br />
                            <span className="text-gradient">built to move you forward.</span>
                        </Motion.h1>

                        <Motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            We design and build thoughtful websites, software, and digital experiences that help ambitious businesses grow.
                        </Motion.p>

                        <Motion.div
                            className="hero-cta"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <Link to="/contact" className="btn-primary btn-lg">
                                <span>Start a Project</span>
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/portfolio" className="btn-outline btn-lg">
                                View Our Work
                            </Link>
                        </Motion.div>

                        <Motion.div
                            className="hero-trust"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <div className="trust-logos">
                                <span className="trust-label">The right tools for what comes next</span>
                                <div className="trust-badges">
                                    <span className="badge">React</span>
                                    <span className="badge">TypeScript</span>
                                    <span className="badge">Node.js</span>
                                    <span className="badge">AWS</span>
                                    <span className="badge">PostgreSQL</span>
                                </div>
                            </div>
                        </Motion.div>
                    </Motion.div>

                    <Motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        aria-label="A glimpse into TechBridge's digital product work"
                    >
                        <div className="hero-visual-image" aria-hidden="true"></div>
                        <div className="hero-visual-shade" aria-hidden="true"></div>
                        <div className="hero-visual-topline">
                            <span className="visual-status"><span></span> Product engineering</span>
                            <span className="visual-index">01 <i>/</i> 04</span>
                        </div>
                        <div className="hero-visual-caption">
                            <span>BUILT FOR WHAT'S NEXT</span>
                            <strong>Good ideas deserve<br />great technology.</strong>
                        </div>
                        <div className="hero-float-card">
                            <span className="hero-float-icon"><Code size={19} /></span>
                            <span className="hero-float-copy">
                                <small>From first sketch</small>
                                <strong>to your next big thing</strong>
                            </span>
                            <ArrowUpRight size={18} />
                        </div>
                        <div className="hero-visual-mark" aria-hidden="true">
                            <span>IDEA</span><i></i><span>IMPACT</span>
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
                        <span>Scroll to explore</span>
                    </Motion.div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="stats-section">
                <div className="container">
                    <Motion.div
                        className="stats-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {stats.map((stat, index) => (
                            <Motion.div
                                key={index}
                                className="stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="stat-icon">
                                    <stat.icon size={28} />
                                </div>
                                <div className="stat-content">
                                    <span className="stat-number">{stat.number}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="section services-preview">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">What We Do</span>
                        <h2>Our Expertise</h2>
                        <p>High-touch solutions for ambitious brands.</p>
                    </Motion.div>

                    <Motion.div
                        className="services-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <ServiceCard
                            icon={Monitor}
                            title="Web Development"
                            description="Custom, high-performance websites built with modern technologies like React, Next.js, and TypeScript."
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={Code}
                            title="Software Solutions"
                            description="Robust, scalable software tailored to business operations with clean architecture."
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={Rocket}
                            title="Digital Consulting"
                            description="Strategic advice to navigate the digital landscape and accelerate growth."
                            delay={0.3}
                        />
                    </Motion.div>

                    <Motion.div
                        className="services-cta"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/services" className="btn-outline btn-lg">
                            View All Services
                            <ArrowRight size={20} />
                        </Link>
                    </Motion.div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="section why-us-section">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Why TechBridge</span>
                        <h2>Why Choose Us?</h2>
                        <p>It's not just about code. It's about solving real problems.</p>
                    </Motion.div>

                    <Motion.div
                        className="features-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {features.map((feature, index) => (
                            <Motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="feature-icon">
                                    <feature.icon size={28} />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="section process-section">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Our Process</span>
                        <h2>How We Work</h2>
                        <p>A proven process for delivering excellence.</p>
                    </Motion.div>

                    <Motion.div
                        className="process-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {processSteps.map((p, index) => (
                            <Motion.div
                                key={index}
                                className="process-step"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="process-icon">
                                    <p.icon size={28} />
                                </div>
                                <span className="step-number">{p.step}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="section testimonials-section">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Client Voices</span>
                        <h2>What Clients Say</h2>
                        <p>Trusted by teams who value quality and partnership.</p>
                    </Motion.div>

                    <Motion.div
                        className="testimonials-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {testimonials.map((t, index) => (
                            <Motion.div
                                key={index}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
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
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta-section">
                <div className="container">
                    <Motion.div
                        className="cta-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="cta-background">
                            <div className="cta-gradient-orb"></div>
                        </div>
                        <div className="cta-content">
                            <h2>Ready to elevate your online presence?</h2>
                            <p>Let's turn your vision into a high-performing reality.</p>
                            <Link to="/contact" className="btn-primary btn-lg cta-btn">
                                <span>Get in Touch</span>
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </Motion.div>
                </div>
            </section>
        </Motion.div>
    );
};

export default Home;