import "./MainButton.css";

import React, { type ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

export default function MainButton({ children }: ButtonProps) {
    return <button className="">{children}</button>;
}
