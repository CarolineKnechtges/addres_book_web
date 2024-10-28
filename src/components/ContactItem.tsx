import React, { useState } from 'react';
import { Contact } from '../types';

interface ContactItemProps {
    contact: Contact;
    updateContact: (id: number, updatedContact: Contact) => void;
    deleteContact: (id: number) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, updateContact, deleteContact }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [tel, setTel] = useState(contact.tel);

    const handleUpdate = () => {
        updateContact(contact.id, { ...contact, name, email, tel });
        setIsEditing(false);
    };

    return (
        <tr className="contact-row">
            {isEditing ? (
                <>
                    <td>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="tel"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />
                    </td>
                    <td>
                        <button onClick={handleUpdate}>保存</button>
                        <button onClick={() => setIsEditing(false)}>取消</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.tel}</td>
                    <td>
                        <button onClick={() => setIsEditing(true)}>编辑</button>
                        <button onClick={() => deleteContact(contact.id)}>删除</button>
                    </td>
                </>
            )}
        </tr>
    );
};

export default ContactItem;
