import React, { useState } from 'react';
import clsx from "clsx";

interface CheckButtonProps {
    data: { label: string; key: string }[];
    onChange: (key: string | null) => void;
}

const checkButton: React.FC<CheckButtonProps> = ({ data, onChange }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleCheckboxClick = (index: number) => {
        if (selectedIndex === index) {
            setSelectedIndex(null);
            onChange(null);
        } else {
            setSelectedIndex(index);
            onChange(data[index]?.key || null);
        }
    };

    return (
        <div className="p-6 space-y-4">
            {data.map((item, index) => (
                <button
                    key={item.key}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => handleCheckboxClick(index)}
                >
                    <div
                        className={clsx(
                            'w-6 h-6 rounded-md border-2',
                            selectedIndex === index ? 'bg-orange-700 border-transparent' : 'bg-white border-orange-700'
                        )}
                    />
                    <span className={clsx(
                        'text-[12px]',
                        selectedIndex === index ? 'text-orange-700' : 'text-gray-800'
                    )}>
                        {item.label}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default checkButton;