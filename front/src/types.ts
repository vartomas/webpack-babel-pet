export interface User {
  name: string;
  userId: string;
  socketId: string;
}

export type NameFormInputs = {
  name: string;
};

export interface PostMessage {
  body: string;
  date: Date;
  socketId: string;
  username: string;
  userId: string;
}

export interface Message {
  _id: string;
  body: string;
  date: string;
  socketId: string;
  username: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
