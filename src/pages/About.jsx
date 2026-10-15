import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Code, Server, CheckCircle, Settings, Lightbulb, Shield, Users, RefreshCw, Award, Layout, Briefcase, Globe, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
        { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL"] },
        { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "Vercel"] }
    ];

    const values = [
        { title: "Simplicity", description: "Clean solutions that work." },
        { title: "Quality", description: "Attention to detail in every project." },
        { title: "Innovation", description: "Modern technologies and forward-thinking approaches." },
        { title: "Reliability", description: "Solutions you can depend on." },
        { title: "Partnership", description: "Working closely with your team." },
        { title: "Continuous Improvement", description: "Always learning and evolving." }
    ];

    const team = [
        { name: "Joe Mensah", role: "Lead Engineer & Founder", bio: "10+ years in full-stack development." },
        { name: "Akua Asante", role: "Creative Director", bio: "Award-winning UI/UX designer." },
        { name: "Kwame Osei", role: "DevOps Lead", bio: "Cloud infrastructure expert." }
    ];

    return (
        <Motion.div
            className="about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* UNIFIED HERO SECTION */}
            <section className="about-hero-section">
                <div className="container about-container">
                    <Motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h1>About <span className="text-gradient">Us</span></h1>

                        <Motion.div
                            className="about-bio-text"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <p>
                                We are TechBridge Solutions, a passionate team of Software Engineers based in Ghana with a global mindset.
                            </p>
                            <p>
                                We founded this company with a singular mission: to bridge the gap between complex technology and real-world business outcomes.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="about-stats-wrapper"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="about-stats-row">
                                <div className="stat">
                                    <span className="stat-num">5+</span>
                                    <span className="stat-label">Years Exp.</span>
                                </div>
                                <div className="stat-divider-vertical"></div>
                                <div className="stat">
                                    <span className="stat-num">100%</span>
                                    <span className="stat-label">Client Satisfaction</span>
                                </div>
                            </div>
                        </Motion.div>

                        <div className="signature">
                            <p>- The TechBridge Team</p>
                        </div>
                    </Motion.div>
                </div>
            </section>

            <section className="section skills-section">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Technical Arsenal</span>
                        <h2>Technical Arsenal</h2>
                        <p>The tools we use to bring ideas to life.</p>
                    </Motion.div>

                    <Motion.div
                        className="skills-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {skills.map((skillGroup, index) => (
                            <Motion.div
                                key={index}
                                className="skill-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3>{skillGroup.category}</h3>
                                <div className="skill-tags">
                                    {skillGroup.items.map(item => (
                                        <span key={item} className="skill-tag">{item}</span>
                                    ))}
                                </div>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            <section className="section values-section">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Our Principles</span>
                        <h2>Built on Good Technology and Good Principles</h2>
                        <p>The values that guide our work</p>
                    </Motion.div>

                    <Motion.div
                        className="values-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {values.map((value, index) => (
                            <Motion.div
                                key={index}
                                className="value-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="value-icon">
                                    <CheckCircle size={28} />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            <section className="section team-section">
                <div className="container">
                    <Motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Our Team</span>
                        <h2>Meet Our Team</h2>
                        <p>The minds behind TechBridge Solutions.</p>
                    </Motion.div>

                    <Motion.div
                        className="team-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {team.map((member, index) => (
                            <Motion.div
                                key={index}
                                className="team-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="team-avatar">
                                    <Globe size={32} />
                                </div>
                                <h3>{member.name}</h3>
                                <div className="team-role">{member.role}</div>
                                <p className="team-bio">{member.bio}</p>
                            </Motion.div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Check out our work</h2>
                        <p>See how we've helped others succeed.</p>
                        <Link to="/portfolio" className="btn-primary">
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </Motion.div>
    );
};

export default About;