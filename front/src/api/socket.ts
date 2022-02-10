import { io } from 'socket.io-client';
import { baseUrl } from './api';

export const socket = io(baseUrl);
