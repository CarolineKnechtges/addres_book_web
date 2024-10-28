import React from 'react';
import ContactItem from './ContactItem';
import { Contact } from '../types';

interface ContactListProps {
    contacts: Contact[];
    updateContact: (id: number, updatedContact: Contact) => void;
    deleteContact: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, updateContact, deleteContact }) => {
    return (
        <div className="contact-table">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <ContactItem
                        key={contact.id}
                        contact={contact}
                        updateContact={updateContact}
                        deleteContact={deleteContact}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;
