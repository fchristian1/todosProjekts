import React from "react";

function NormalBox({ children, p }) {
    return <div className={`mb-1 w-full p-${p}`}>{children}</div>;
}

export default NormalBox;
