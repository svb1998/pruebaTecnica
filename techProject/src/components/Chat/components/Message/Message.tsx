import "./Message.css";
import React from "react";
import type { Message } from "../../../../models/Message";

export default function Message(message: Message) {
    return (
        <div
            className={`${
                message.sender === "me" ? "sender-message" : "receiver-message"
            } message-container`}
        >
            <div className="message-content">{message.message}</div>
        </div>
    );
}
