import React from "react";

function List({ children, cols = 1, gap = 4, title = "" }) {
    return (
        <div className="w-full">
            {title && <div className="w-full mb-1">{title}</div>}
            <div className={"w-full grid grid-cols-" + cols + " gap-" + gap + ""}>{children}</div>
        </div>
    );
}

export default List;
