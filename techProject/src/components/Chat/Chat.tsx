import "./Chat.css";
import React, { useState } from "react";
import type { Message as MessageModel } from "../../models/Message";
import Message from "./components/Message/Message";

export default function Chat() {
    const [input, setInput] = useState("");

    const [messagesList, setMessagesList] = useState<MessageModel[]>([]);

    function sendMessage() {
        const newMessage: MessageModel = {
            sender: "Me",
            message: input,
        };

        setMessagesList((prev) => [...prev, newMessage]);

        setTimeout(() => mockResponse(), 1000);
    }

    function mockResponse() {
        const echoMessage: MessageModel = {
            sender: "Bot",
            message: "echo",
        };

        setMessagesList((prev) => [...prev, echoMessage]);
    }

    return (
        <div className="chat-page">
            <div className="chat-container">
                <div className="chat-conversation">
                    {messagesList.map((message) => (
                        <Message
                            message={message.message}
                            sender={message.sender}
                        />
                    ))}
                </div>

                <div className="chat-input-section">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}
