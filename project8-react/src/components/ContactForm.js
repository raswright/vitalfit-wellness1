import React, { useState } from 'react';
import '../styles/About.css'; 

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState(null); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: '1e6479b5-6604-4cbc-b29d-ac281be3a8f1', 
                }),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' }); 
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('error');
        }
    };

    return (
        <section className="contact-section">
            <h2>Contact Us</h2>
            <p>Feel free to reach out with any questions. We're here to support your wellness journey.</p>
            <br></br>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                />

                <button type="submit" className="submit-button">Send Message</button>

                {formStatus === 'success' && (
                    <p className="form-success">Thank you! Your message was sent successfully.</p>
                )}
                {formStatus === 'error' && (
                    <p className="form-error">Error! Please try again.</p>
                )}
            </form>
        </section>
    );
};

export default ContactForm;