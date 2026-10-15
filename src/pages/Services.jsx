import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Laptop, ShoppingCart, Code, Smartphone, Wrench, Palette, RefreshCw, ShieldCheck, Globe, Layout, Zap, Target, Layers, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const process = [
        { step: "01", title: "Discovery", desc: "Understand your business goals, challenges, and vision through collaborative workshops.", icon: Globe },
        { step: "02", title: "Strategy", desc: "Architect technical solutions with scalable architecture and modern tech stacks.", icon: Layout },
        { step: "03", title: "Development", desc: "Build with clean, maintainable code following industry best practices and standards.", icon: Code },
        { step: "04", title: "Launch", desc: "Deploy, monitor, optimize, and provide ongoing support for long-term success.", icon: RefreshCw }
    ];

    const whatWeBuild = [
        { icon: Laptop, title: "Website Development", desc: "Professional, responsive websites built with React, Next.js, and TypeScript for strong online presence." },
        { icon: ShoppingCart, title: "E-commerce Development", desc: "Online stores with custom cart, payment integration, and inventory management." },
        { icon: Code, title: "Custom Web Applications", desc: "Business-focused applications designed around specific workflows and user needs." },
        { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform apps for Android and iOS with seamless UX." },
        { icon: Wrench, title: "Custom Software", desc: "Tailored solutions for specific business problems and process automation." },
        { icon: Palette, title: "UI/UX Design", desc: "User-centered design creating intuitive, accessible, and visually stunning interfaces." },
        { icon: ShieldCheck, title: "Maintenance & Support", desc: "Ongoing updates, security patches, performance optimization, and technical support." }
    ];

    const technologies = [
        "React", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js",
        "MySQL", "PostgreSQL", "Firebase", "Supabase", "Python",
        "AWS", "Docker", "Kubernetes", "GraphQL"
    ];

    const features = [
        { title: "Performance First", desc: "Blazing fast load times and optimized core web vitals.", icon: Zap },
        { title: "Business Focused", desc: "Solutions designed around real business needs and measurable outcomes.", icon: Target },
        { title: "Scalable Architecture", desc: "Built to grow with your business using modular, maintainable code.", icon: Layers },
        { title: "Personal Support", desc: "Direct communication and dedicated project management throughout.", icon: Users }
    ];

    const faqs = [
        { 
            question: "What type of websites do you build?", 
            answer: "We build responsive, modern websites using React, Next.js, and other modern tech stacks tailored to your specific business requirements and goals." 
        },
        { 
            question: "Can you build a website from scratch?", 
            answer: "Yes, we specialize in building custom websites from scratch based on your unique design and functionality requirements." 
        },
        { 
            question: "Can you redesign an existing website?", 
            answer: "Absolutely. We modernize outdated websites with better design, improved performance, enhanced accessibility, and mobile responsiveness." 
        },
        { 
            question: "Can you build mobile applications?", 
            answer: "Yes, we develop both native and cross-platform mobile applications for Android and iOS using React Native, Flutter, and other modern frameworks." 
        },
        { 
            question: "Can you connect my website to a backend?", 
            answer: "Yes, we integrate websites with custom backends, databases (SQL/NoSQL), and third-party APIs using REST and GraphQL." 
        },
        { 
            question: "Can you integrate WhatsApp?", 
            answer: "Yes, we can integrate WhatsApp Business API for customer communication, notifications, and chat functionality into your applications." 
        },
        { 
            question: "How much does a website cost?", 
            answer: "Cost varies based on scope, complexity, and features. We provide detailed, transparent quotes after our discovery phase." 
        },
        { 
            question: "How long does a project take?", 
            answer: "Timelines depend on project scope and complexity. We establish clear milestones and delivery schedules during project planning." 
        },
        { 
            question: "Do you provide maintenance and support?", 
            answer: "Yes, we offer ongoing maintenance plans including security updates, performance monitoring, bug fixes, and technical support." 
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
            {/* SERVICES HERO SECTION */}
            <section className="services-hero-section">
                <div className="container">
                    <div className="services-hero-bg">
                        <div className="hero-gradient-orb orb-1"></div>
                        <div className="hero-gradient-orb orb-2"></div>
                        <div className="hero-grid-pattern"></div>
                    </div>
                    <Motion.div
                        className="hero-content-centered"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h1>Our <span className="text-gradient">Services</span></h1>
                        <p className="hero-tagline">Comprehensive Technical Solutions</p>
                        <p className="hero-description">
                            Engineering forward-thinking digital experiences that drive business growth and innovation.
                        </p>
                    </Motion.div>
                </div>
            </section>

            {/* WHAT WE BUILD SECTION */}
            <section className="section what-we-build-section">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">What We Create</span>
                        <h2>What We Build</h2>
                        <p>Comprehensive digital solutions designed to support business goals</p>
                    </Motion.div>

                    <Motion.div
                        className="what-we-build-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.08 }}
                    >
                        {whatWeBuild.map((service, index) => (
                            <Motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <div className="service-icon-wrapper">
                                    <service.icon size={36} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </Motion.div>
                        ))}
                    </Motion.div>
                    
                    <Motion.div
                        className="what-we-build-cta"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/portfolio" className="btn-outline btn-lg">
                            View Our Portfolio
                            <ArrowRight size={20} />
                        </Link>
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
                        <span className="section-tag">Our Workflow</span>
                        <h2>How We Work</h2>
                        <p>A proven process for delivering excellence and predictability.</p>
                    </Motion.div>

                    <Motion.div
                        className="process-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {process.map((p, index) => (
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

            {/* TECHNOLOGIES SECTION */}
            <section className="section technologies-section">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Our Stack</span>
                        <h2>Technologies We Use</h2>
                        <p>Built with modern, reliable, and scalable technology stacks</p>
                    </Motion.div>

                    <Motion.div
                        className="technologies-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.05 }}
                    >
                        {technologies.map((tech, index) => (
                            <Motion.div
                                key={index}
                                className="tech-item"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <h3>{tech}</h3>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="section features-section">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Why Choose Us</span>
                        <h2>Why Choose Us?</h2>
                        <p>What sets us apart from the competition.</p>
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
                                className="feature-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="feature-icon">
                                    <feature.icon size={24} />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="section faq-section">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Common Questions</span>
                        <h2>Frequently Asked Questions</h2>
                        <p>Get answers to your most common questions.</p>
                    </Motion.div>

                    <Motion.div
                        className="faq-list"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.05 }}
                    >
                        {faqs.map((faq, index) => (
                            <Motion.div
                                key={index}
                                className="faq-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <div className="cta-background">
                            <div className="cta-gradient-orb"></div>
                        </div>
                        <div className="cta-content">
                            <h2>Ready to start your project?</h2>
                            <p>Let's discuss how we can help you achieve your digital goals.</p>
                            <Link to="/contact" className="btn-primary btn-lg cta-btn">
                                <span>Get Started Today</span>
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Motion.div>
    );
};

export default Services;