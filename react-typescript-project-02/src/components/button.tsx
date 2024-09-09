import React, { useState } from "react";

type Color = "red" | "green" | "blue";

type props = {
    // backgroundColor: string;
    // backgroundColor: "red" | "green" | "blue";
    backgroundColor: Color;
    fontSize: any;
    pillShape?: boolean; // optional
    // padding: number[];
    padding: [number, number, number, number];
};

export default function Button({
    backgroundColor,
    fontSize,
    pillShape,
}: props) {

    const [count, setCount] = useState(0);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('clicked');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}
