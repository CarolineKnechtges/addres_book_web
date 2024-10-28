// src/App.tsx
import React, { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Contact } from './types';
import {
    fetchContacts,
    createContact,
    updateContact,
    deleteContact
} from './api/contactApi';

const App: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        const loadContacts = async () => {
            const data = await fetchContacts();
            console.log("Fetched users:", data); // 检查获取的数据格式

            setContacts(data);
        };

        loadContacts();
    }, []);

    const handleAddContact = async (contact: Contact) => {
        const newContact = await createContact(contact);
        setContacts([...contacts, newContact]);
    };

    const handleUpdateContact = async (id: number, updatedContact: Contact) => {
        const contact = await updateContact(id, updatedContact);
        setContacts(contacts.map((c) => (c.id === id ? contact : c)));
    };

    const handleDeleteContact = async (id: number) => {
        await deleteContact(id);
        setContacts(contacts.filter((c) => c.id !== id));
    };

    return (
        <div className="App">
            <h1>通讯录</h1>
            <ContactForm addContact={handleAddContact} />
            <ContactList
                contacts={contacts}
                updateContact={handleUpdateContact}
                deleteContact={handleDeleteContact}
            />
        </div>
    );
};

export default App;
