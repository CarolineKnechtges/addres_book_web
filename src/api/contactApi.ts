// src/api/contactApi.ts
import axios from 'axios';
import { Contact } from '../types';

const BASE_URL = 'http://localhost:8888'; // 后端 API 地址

export const fetchContacts = async (): Promise<Contact[]> => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
};

export const createContact = async (contact: Contact): Promise<Contact> => {
    const response = await axios.post(`${BASE_URL}/users`, contact);
    return response.data;
};

export const updateContact = async (id: number, contact: Contact): Promise<Contact> => {
    const response = await axios.put(`${BASE_URL}/users/${id}`, contact);
    return response.data;
};

export const deleteContact = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/users/${id}`);
};
