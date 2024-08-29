import React, { useState } from "react";

function generatePassword(includeNumbers, length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let characters = charset;

    if (includeNumbers) {
        characters += numbers; // Add numbers to the character set if includeNumbers is true
    }

    let retVal = "";
    for (let i = 0, n = characters.length; i < length; ++i) {
        retVal += characters.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function PasswordGenerator() {
    const [password, setPassword] = useState(() => generatePassword(true, 7));
    const [length, setLength] = useState(7);
    const [number, setNumber] = useState(true);
    const [character, setCharacter] = useState(true);

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(number, length);
        setPassword(newPassword);
    };

    return (
        <div>
            <input type="text" placeholder="password" value={password} readOnly />
            <br />
            <label>Length</label>
            <input
                type="range"
                min="1"
                max="20"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <br />
            <label>Include Numbers</label>
            <input
                type="checkbox"
                checked={number}
                onChange={(e) => setNumber(e.target.checked)}
            />
            <br />
            <label>Special Character</label>
            <input
                type="checkbox"
                checked={character}
                onChange={(e) => setCharacter(e.target.checked)}
            />
            <br />
            <button onClick={handleGeneratePassword}>Generate Password</button>
        </div>
    );
}

export default PasswordGenerator;
