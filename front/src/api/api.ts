import axios, { AxiosResponse } from 'axios';
import { Message, PostMessage } from '../types';

export const baseUrl = 'http://localhost:5000';

const client = axios.create({
  baseURL: baseUrl
});

export const sendMessage = (message: PostMessage) => client.post('/message', message);

export const getMessages = async (skip: number = 0): Promise<AxiosResponse<Message[]>> => client.get(`/messages/${skip}`);
