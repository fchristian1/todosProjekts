import React from "react";
import Greetings from "../components/greetings";
import List from "../components/list";
import InfoButton from "../components/infoButton";
import ArrowRepead from "../components/symbols/ArrowRepeat";
import Clock from "../components/symbols/Clock";
import FileEarmarkCheck from "../components/symbols/FileEarmarkCheck";
import FileEarmarkX from "../components/symbols/FileEarmarkX";
import Container from "../components/container";
import MenuButton from "../components/MenuButton";

function StartPage({ maxHeightPosBottom, setMaxHeightPosBottom }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full m-5 px-5">
                <Greetings></Greetings>
            </div>
            <div className="w-full  mb-5 px-5">
                <List cols={2} gap={4}>
                    <InfoButton mainText="On Going" color="blue" icon={<ArrowRepead />}></InfoButton>
                    <InfoButton mainText="In Process" color="amber" icon={<Clock />}></InfoButton>
                    <InfoButton mainText="Completed" color="green" icon={<FileEarmarkCheck />}></InfoButton>
                    <InfoButton mainText="Canceled" color="red" icon={<FileEarmarkX />}></InfoButton>
                </List>
            </div>
            <div style={{ height: maxHeightPosBottom - 330 + "px" }} className={"w-full h-full flex flex-col mb-5 px-5 rounded-2xl"}>
                <div className="w-full h-full overflow-auto">
                    <List cols={1} gap={4} title="Recent Tasks">
                        <Container>
                            Container
                            <hr />
                            Container
                            <hr />
                            Container
                        </Container>
                        <Container>
                            Container
                            <hr />
                            Container
                            <hr />
                            Container
                        </Container>
                        <Container>
                            Container
                            <hr />
                            Container
                            <hr />
                            Container
                        </Container>
                        <Container>
                            Container
                            <hr />
                            Container
                            <hr />
                            Container
                        </Container>
                        <Container>
                            Container
                            <hr />
                            Container
                            <hr />
                            Container
                        </Container>
                        <Container>
                            Container
                            <hr />
                            Container
                            <hr />
                            Container
                        </Container>
                        <Container>
                            Container
                            <hr />
                            Container
                            <hr />
                            Container
                        </Container>
                        <Container>
                            Container
                            <hr />
                            Container
                            <hr />
                            Container
                        </Container>
                    </List>
                </div>
            </div>
            <div className="w-full">
                <div className="bg-black h-[2px] mb-2"></div>
                <div className="w-full flex flex-row justify-evenly flex-wrap">
                    <MenuButton>1</MenuButton>
                    <MenuButton>2</MenuButton>
                    <MenuButton inverted={false}>3</MenuButton>
                    <MenuButton>4</MenuButton>
                    <MenuButton>5</MenuButton>
                </div>
            </div>
        </div>
    );
}

export default StartPage;
