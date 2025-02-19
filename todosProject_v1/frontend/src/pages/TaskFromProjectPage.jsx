import React from "react";
import ChevronLeft from "../components/symbols/ChevronLeft";
import MenuPageTop from "../components/MenuPageTop";
import ButtonSquare from "../components/ButtonSquare";
import InfoTextGray from "../components/InfoTextGray";

function TaskFromProjectPage({ selectedTask, setSelectedTask }) {
    const onClickButtonBack = () => {
        setSelectedTask(null);
    };
    return (
        <div className="flex flex-col gap-1 item-center">
            <MenuPageTop>
                <ButtonSquare p={2} onClick={onClickButtonBack}>
                    <ChevronLeft></ChevronLeft>
                </ButtonSquare>
                <InfoTextGray>{selectedTask.title}</InfoTextGray>
            </MenuPageTop>
        </div>
    );
}

export default TaskFromProjectPage;
