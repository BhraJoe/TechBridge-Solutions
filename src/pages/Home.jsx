import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Code, Monitor, Rocket, CheckCircle, MousePointer2, Shield, Zap, Layout, Clock, Layers, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const processSteps = [
        { step: "01", title: "Discovery", desc: "We dig deep to understand your goals.", icon: Layers },
        { step: "02", title: "Strategy", desc: "Crafting the blueprint for success.", icon: Code },
        { step: "03", title: "Development", desc: "Building with precision and care.", icon: Rocket },
        { step: "04", title: "Launch", desc: "Going live with ongoing support.", icon: Clock }
    ];

    const testimonials = [
{name: "Sarah Johnson", role: "CEO, TechStart Inc.", text: "TechBridge Solutions delivered a stunning platform ahead of schedule. Their expertise is unmatched.", rating: 5},
                        {name: "Michael Chen", role: "Founder, RetailFlow", text: "Working with TechBridge Solutions transformed our digital presence. Highly recommended!", rating: 5},
        { name: "Aisha Patel", role: "CTO, HealthBridge", text: "Exceptional engineering and communication. They truly understand enterprise needs.", rating: 5 }
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
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Motion.span className="hero-badge" variants={itemVariants}>
                            <span className="pulse-dot"></span> Available for new projects
                        </Motion.span>
                        <Motion.h1 variants={itemVariants}>
                            Building <span className="text-gradient">Digital Excellence</span> for Modern Businesses.
                        </Motion.h1>
                        <Motion.p className="hero-subtitle" variants={itemVariants}>
                            We are TechBridge Solutions. A team of Software Engineers and Creative Technologists. We build premium web applications and digital solutions that scale.
                        </Motion.p>
                        <Motion.div className="hero-cta" variants={itemVariants}>
                            <Link to="/contact" className="btn-primary btn-lg">
                                Start a Project
                            </Link>
                            <Link to="/portfolio" className="btn-outline btn-lg">
                                View Work
                            </Link>
                        </Motion.div>

                        <Motion.div
                            className="hero-stats"
                            variants={itemVariants}
                        >
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                        </Motion.div>
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
                        <Motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Our Expertise
                        </Motion.h2>
                        <Motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            High-touch solutions for ambitious brands.
                        </Motion.p>
                    </div>
                    <div className="services-grid">
                        <ServiceCard
                            icon={Monitor}
                            title="Web Development"
                            description="Custom, high-performance websites built with modern technologies like React and Next.js."
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={Code}
                            title="Software Solutions"
                            description="Robust, scalable software tailored to your specific business operations and needs."
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={Rocket}
                            title="Digital Consulting"
                            description="Strategic technical advice to help your startup or business navigate the digital landscape."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US - UPGRADED */}
            <section className="section why-us-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why TechBridge Solutions?</h2>
                        <p>It's not just about code. It's about solving real problems.</p>
                    </div>

                    <div className="features-grid">
                        <Motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="feature-icon"><Zap size={28} /></div>
                            <h3>Performance First</h3>
                            <p>Blazing fast load times and optimized core web vitals for maximum conversion.</p>
                        </Motion.div>

                        <Motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="feature-icon"><Layout size={28} /></div>
                            <h3>Mobile Adaptive</h3>
                            <p>Designs that flow seamlessly across every device, from 4K desktops to smartphones.</p>
                        </Motion.div>

                        <Motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="feature-icon"><Shield size={28} /></div>
                            <h3>Enterprise Logic</h3>
                            <p>Robust architecture and clean code that scales with your business needs.</p>
                        </Motion.div>

                        <Motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="feature-icon"><CheckCircle size={28} /></div>
                            <h3>Reliable Delivery</h3>
                            <p>Transparent communication and on-time delivery. No ghosting, no excuses.</p>
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
                            const StepIcon = p.icon;
                            return (
                                <Motion.div
                                    key={index}
                                    className="process-step"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="process-icon"><StepIcon size={28} /></div>
                                <span className="step-number">{p.step}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </Motion.div>
                            )}
                        )}
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
                            <Motion.div
                                key={index}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
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
