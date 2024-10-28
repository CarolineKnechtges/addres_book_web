// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { Contact } from '../types';

interface ContactFormProps {
    addContact: (contact: Contact) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ addContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel , setTel] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) return;

        const newContact: { name: string; email: string ;tel : string} = {
            name,
            email,
            tel
        };

        addContact(newContact);
        setName('');
        setEmail('');
        setTel('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type={'tel'}
                placeholder={'电话'}
                pattern={'[0-9]{11}'}
                value={tel}
                onChange={(e) => setTel(e.target.value)}
            />


            <button type="submit">添加联系人</button>
        </form>
    );
};

export default ContactForm;
