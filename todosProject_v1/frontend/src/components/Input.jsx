import React from "react";

function Input({ type = "text", placeholder, value, onChange, options }) {
    return (
        <>
            {type == "text" && (
                <div className="flex items-center w-full">
                    <input
                        type="text"
                        className="bg-white px-4 py-2 border-2 focus:border-amber-900/50 border-black rounded-lg focus:outline-none w-full text-xl"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                    <div className="absolute pl-2 font-bold text-xl">|</div>
                </div>
            )}
            {type == "password" && (
                <div className="flex items-center w-full">
                    <input
                        type="password"
                        className="bg-white px-4 py-2 border-2 focus:border-amber-900/50 border-black rounded-lg focus:outline-none text-xl"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                    <div className="absolute pl-2 font-bold text-xl">|</div>
                </div>
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
                <div className="flex w-full">
                    <textarea
                        className="bg-white px-4 py-[6px] border-2 focus:border-amber-900/50 border-black rounded-lg focus:outline-none w-full min-h-40 text-xl"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        rows={5}
                    />
                    <div className="absolute mt-2 pl-2 font-bold text-xl">|</div>
                </div>
            )}
            {type == "select" && (
                <select
                    className="bg-white px-4 py-2 border-2 focus:border-amber-900/50 border-black rounded-lg focus:outline-none text-xl"
                    onChange={onChange}
                    value={value}
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
