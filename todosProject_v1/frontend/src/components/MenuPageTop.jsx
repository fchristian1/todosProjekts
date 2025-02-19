import React from "react";
import NormalBox from "../pages/layout/NormalBox";
import List from "./list";
import ButtonSquare from "./ButtonSquare";

function MenuPageTop({ children }) {
    return (
        <NormalBox p={2}>
            <List cols={1} gap={2}>
                <div className="flex justify-between">{children}</div>
            </List>
        </NormalBox>
    );
}

export default MenuPageTop;
