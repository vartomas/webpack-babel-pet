import axios, { AxiosResponse } from 'axios';
import { Message, PostMessage } from '../types';

const client = axios.create({
  baseURL: 'http://localhost:5000/'
});

export const sendMessage = (message: PostMessage) => client.post('/message', message);

export const getMessages = async (skip: number = 0): Promise<AxiosResponse<Message[]>> => client.get(`/messages/${skip}`);
