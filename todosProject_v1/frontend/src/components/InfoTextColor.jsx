import React from "react";

function InfoTextColor({ children, color }) {
    return <div className={`bg-${color}-400 rounded py-[2px] px-[5px]`}>{children}</div>;
}

export default InfoTextColor;
