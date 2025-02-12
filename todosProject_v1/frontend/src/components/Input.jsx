import React from "react";

function Input({ type = "text", placeholder, value, onChange, options }) {
    return (
        <>
            {type == "text" && (
                <input
                    type="text"
                    className="bg-white px-2 py-2 border-2 focus:border-amber-900/50 border-black rounded-lg focus:outline-none text-xl"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
            {type == "password" && (
                <input
                    type="password"
                    className="bg-white px-2 py-2 border-2 focus:border-amber-900/50 border-black rounded-lg focus:outline-none text-xl"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
            {type == "color" && (
                <input
                    type="color"
                    className="bg-white px-1 py-1 border-2 focus:border-amber-900/50 border-black rounded-lg focus:outline-none w-full h-12 text-xl"
                    value={value}
                    onChange={onChange}
                />
            )}
            {type == "textarea" && (
                <textarea
                    className="bg-white px-2 py-2 border-2 focus:border-amber-900/50 border-black rounded-lg focus:outline-none min-h-40 text-xl"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={5}
                />
            )}
            {type == "select" && (
                <select
                    className="bg-white px-2 py-2 border-2 focus:border-amber-900/50 border-black rounded-lg focus:outline-none text-xl"
                    onChange={onChange}
                    value={options.selected}
                >
                    {options.list.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
        </>
    );
}

export default Input;
