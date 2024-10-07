import React from "react";

interface CircleAvatarProps {
    firstWord: string;
    secondWord: string;
}

const CircleAvatar: React.FC<CircleAvatarProps> = ({ firstWord, secondWord }) => {
    const letterUser = `${firstWord.charAt(0)}${secondWord.charAt(0)}`;
    return (
        <span className="dark:bg-blue-600 bg-blue-500 rounded-full font-semibold text-slate-100 w-7 h-7 flex justify-center items-center">
            {letterUser}
        </span>
    );
}

export default CircleAvatar;
