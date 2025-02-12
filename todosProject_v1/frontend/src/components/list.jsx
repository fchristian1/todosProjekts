import React from "react";

function List({ children, cols = 1, gap = 4, title = "" }) {
    return (
        <div className="w-full">
            {title && <div className="mb-1 w-full">{title}</div>}
            <div className={"w-full grid grid-cols-" + cols + " gap-" + gap / 2 + ""}>{children}</div>
        </div>
    );
}

export default List;
