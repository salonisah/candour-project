import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Image as ImageIcon, Send } from 'lucide-react';

const ChatCard = ({ name, time, message, onClick }) => (
  <div className="flex items-center p-2 hover:bg-gray-200 cursor-pointer" onClick={onClick}>
    <div className="flex flex-col ml-2">
      <span className="font-semibold">{name}</span>
      <span className="text-sm text-gray-500">{message}</span>
    </div>
    <span className="ml-auto text-xs text-gray-400">{time}</span>
  </div>
);

export default function ChatInterface() {
  const [users, setUsers] = useState([
    { name: 'Devraj Bastola', messages: ['Hey'], time: '1h ago' },
    { name: 'Anamika Brown', messages: ['I suggested the edit but...'], time: '1h ago' },
    { name: 'Sirin Sherpa', messages: ['Please check your p...'], time: '1h ago' },
    { name: 'Manjari Singh Thakuri', messages: ['Thank you for reach...'], time: '1h ago' },
    { name: 'Khil Bahadur Basnet', messages: ['Hey'], time: '1h ago' }
  ]);

  const [activeUser, setActiveUser] = useState(null);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() && activeUser) {
      const updatedUsers = users.map((user) => {
        if (user.name === activeUser.name) {
          return { ...user, messages: [...user.messages, input] };
        }
        return user;
      });

      setUsers(updatedUsers);
      setActiveUser({ ...activeUser, messages: [...activeUser.messages, input] });
      setInput('');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r">
        <div className="p-4 font-bold">Chat</div>
        <div className="space-y-4">
          {users.map((user, index) => (
            <ChatCard
              key={index}
              name={user.name}
              time={user.time}
              message={user.messages.slice(-1)}
              onClick={() => setActiveUser(user)}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {activeUser ? (
          <>
            <div className="flex items-center p-4 border-b">
              <span className="font-semibold flex-1">{activeUser.name}</span>
              <X className="cursor-pointer" onClick={() => setActiveUser(null)} />
            </div>

            <ScrollArea className="flex-1 p-4 space-y-2 overflow-y-auto">
              {activeUser.messages.map((msg, index) => (
                <div key={index} className="bg-gray-200 p-2 rounded-md w-fit">
                  {msg}
                </div>
              ))}
            </ScrollArea>

            <div className="flex items-center p-4 border-t">
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Message" className="flex-1" />
              <Button variant="ghost" onClick={sendMessage}><Send className="w-5 h-5" /></Button>
              <Button variant="ghost"><ImageIcon className="w-5 h-5" /></Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-500">Select a chat to view messages.</div>
        )}
      </div>
    </div>
  );
}
