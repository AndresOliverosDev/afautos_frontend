import React, { useState } from "react";

export interface TabLinks {
    id: number;
    name : string;
}

interface TabNavigatorProps {
    taps: TabLinks[];
    activeTap: number;
    handleActiveTap: (id: number) => void;
}

const TabNavigator: React.FC<TabNavigatorProps> = ({ taps, activeTap, handleActiveTap }) => {
    return (
        <div className="flex border-b dark:border-dark-border border-light-border">
            {
                taps.map(item => (
                    <p
                        className={`${activeTap === item.id ? "border-b-2 dark:border-dark-brand border-light-brand" : ""} text-sm font-semibold cursor-pointer px-14 hover:bg-gray-100 dark:hover:bg-gray-700 py-1.5 rounded-t-default`}
                        key={item.id}
                        onClick={() => handleActiveTap(item.id)}
                        >
                        {item.name}
                    </p>
                ))
            }
        </div>
    );
}
 
export default TabNavigator;    