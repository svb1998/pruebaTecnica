import React from "react";

interface RowProps {
    name: string;
    date: Date;
}

export default function Row({ name, date }: RowProps) {
    return (
        <tr>
            <td>{name}</td>
            <td>{date.toLocaleDateString()}</td>
            <td></td>
        </tr>
    );
}
