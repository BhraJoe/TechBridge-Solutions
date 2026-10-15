import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Laptop, ShoppingCart, Code, Smartphone, Wrench, Palette, RefreshCw, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const process = [
        { step: "01", title: "Discovery", desc: "Understand your business goals." },
        { step: "02", title: "Strategy", desc: "Plan technical architecture." },
        { step: "03", title: "Development", desc: "Build with clean, scalable code." },
        { step: "04", title: "Launch", desc: "Test, deploy, and support." }
    ];

    const whatWeBuild = [
        { icon: Laptop, title: "Website Development", desc: "Professional, responsive websites for strong online presence." },
        { icon: ShoppingCart, title: "E-commerce Development", desc: "Online stores for showcasing products and accepting orders." },
        { icon: Code, title: "Custom Web Applications", desc: "Business-focused apps designed around specific workflows." },
        { icon: Smartphone, title: "Mobile App Development", desc: "Modern applications for Android and iOS." },
        { icon: Wrench, title: "Custom Software", desc: "Solutions for specific business problems." },
        { icon: Palette, title: "UI/UX Design", desc: "Clean, intuitive interfaces focused on usability." },
        { icon: RefreshCw, title: "Website Redesign", desc: "Modernize outdated sites with better design and performance." },
        { icon: ShieldCheck, title: "Maintenance & Support", desc: "Ongoing updates, fixes, and technical support." }
    ];

    const technologies = [
        "React", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js",
        "MySQL", "PostgreSQL", "Firebase", "Supabase", "Python"
    ];

    const features = [
        { title: "Modern Technology", desc: "Built with reliable and scalable technologies." },
        { title: "Business Focused", desc: "Solutions designed around real business needs." },
        { title: "Mobile First", desc: "Experiences that work beautifully across devices." },
        { title: "Personal Support", desc: "Direct communication throughout the project." }
    ];

    const faqs = [
        { 
            question: "What type of websites do you build?", 
            answer: "We build responsive, modern websites using React, Next.js, and other modern tech stacks tailored to business needs." 
        },
        { 
            question: "Can you build a website from scratch?", 
            answer: "Yes, we build custom websites from scratch based on your design and functionality requirements." 
        },
        { 
            question: "Can you redesign an existing website?", 
            answer: "Yes, we modernize outdated websites with better design, performance, and responsiveness." 
        },
        { 
            question: "Can you build mobile applications?", 
            answer: "Yes, we develop mobile applications for Android and iOS using modern frameworks." 
        },
        { 
            question: "Can you connect my website to a backend?", 
            answer: "Yes, we integrate websites with custom backends, databases, and third-party APIs." 
        },
        { 
            question: "Can you integrate WhatsApp?", 
            answer: "Yes, we can integrate WhatsApp messaging and chat functionality into websites and apps." 
        },
        { 
            question: "How much does a website cost?", 
            answer: "Cost depends on scope and complexity. Contact us for a free quote." 
        },
        { 
            question: "How long does a project take?", 
            answer: "Timeline varies by project size. We provide a detailed schedule during discovery." 
        },
        { 
            question: "Do you provide maintenance?", 
            answer: "Yes, we offer ongoing maintenance, updates, fixes, and technical support for all projects." 
        }
    ];

    return (
        <Motion.div
            className="services-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="services-hero-section">
                <div className="container">
                    <Motion.div
                        className="hero-content-centered"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Our <span className="text-gradient">Services</span></h1>
                        <p className="hero-tagline">Comprehensive Technical Solutions</p>
                        <p className="hero-description">
                            Engineering forward-thinking digital experiences that drive business growth.
                        </p>
                    </Motion.div>
                </div>
            </section>

            <section className="section what-we-build-section">
                <div className="container">
                    <div className="section-header">
                        <h2>What We Build</h2>
                        <p>Comprehensive digital solutions designed to support business goals</p>
                    </div>
                    <div className="what-we-build-grid">
                        {whatWeBuild.map((service, index) => (
                            <Motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className="service-icon-wrapper"><service.icon size={32} /></div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </Motion.div>
                        ))}
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
                        {process.map((p, index) => (
                            <div key={index} className="process-step">
                                <span className="step-number">{p.step}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section technologies-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Technologies We Use</h2>
                        <p>Built with modern, reliable, and scalable technology stacks</p>
                    </div>
                    <div className="technologies-grid">
                        {technologies.map((tech, index) => (
                            <div key={index} className="tech-item">
                                <h3>{tech}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section features-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Us</h2>
                        <p>What sets us apart.</p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <Motion.div
                                key={index}
                                className="feature-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Common questions about our services and process</p>
                    </div>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <Motion.div
                                key={index}
                                className="faq-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Have a project in mind?</h2>
                        <Link to="/contact" className="btn-primary">
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </Motion.div>
    );
};

export default Services;