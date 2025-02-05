import React, { useEffect, useState } from "react";
import Greetings from "../components/Greetings";
import List from "../components/list";
import InfoButton from "../components/InfoButton";
import ArrowRepead from "../components/symbols/ArrowRepeat";
import Clock from "../components/symbols/Clock";
import FileEarmarkCheck from "../components/symbols/FileEarmarkCheck";
import FileEarmarkX from "../components/symbols/FileEarmarkX";
import Container from "../components/container";
import MenuButton from "../components/MenuButton";
import InfoProjectsListItem from "../components/InfoProjectsListItem";
import HomeIcon from "../components/symbols/HomeIcon";
import PlusIcon from "../components/symbols/PlusIcon";
import CalenderIcon from "../components/symbols/CalenderIcon";
import PersonIcon from "../components/symbols/PersonIcon";

function StartPage({ maxHeightPosBottom, setMaxHeightPosBottom }) {
    const [width, setWidth] = useState(window.innerWidth);
    window.onresize = () => {
        resize();
    };
    useEffect(() => {
        resize();
    }, []);
    function resize() {
        setWidth(window.innerWidth);
    }
    return (
        <div className="flex flex-col max-h-full">
            <div className="m-1">
                <Greetings></Greetings>
            </div>
            <div className="mb-1 px-1 w-full">
                <List cols={2} gap={4}>
                    <InfoButton mainText="On Going" color="blue" icon={<ArrowRepead />}></InfoButton>
                    <InfoButton mainText="In Process" color="amber" icon={<Clock />}></InfoButton>
                    <InfoButton mainText="Completed" color="green" icon={<FileEarmarkCheck />}></InfoButton>
                    <InfoButton mainText="Canceled" color="red" icon={<FileEarmarkX />}></InfoButton>
                </List>
            </div>

            <div
                className={
                    "w-full  flex flex-col mb-1 px-1 rounded-2xl overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100"
                }
            >
                <div>Recent Tasks</div>
                <div className="w-full pe-1">
                    <List cols={1} gap={4}>
                        <Container>
                            <InfoProjectsListItem
                                id="123"
                                mainText="MainText"
                                firstText="FirstText"
                                secondText="SecondText"
                                percent={27}
                                color="blue-400"
                            ></InfoProjectsListItem>
                        </Container>
                        <Container>
                            <InfoProjectsListItem
                                id="123"
                                mainText="MainText"
                                firstText="FirstText"
                                secondText="SecondText"
                                percent={12}
                                color="amber-400"
                            ></InfoProjectsListItem>
                        </Container>
                        <Container>
                            <InfoProjectsListItem
                                id="123"
                                mainText="MainText"
                                firstText="FirstText"
                                secondText="SecondText"
                                percent={3}
                                color="green-400"
                            ></InfoProjectsListItem>
                        </Container>
                        <Container>
                            <InfoProjectsListItem
                                id="123"
                                mainText="MainText"
                                firstText="FirstText"
                                secondText="SecondText"
                                percent={5}
                                color="red-400"
                            ></InfoProjectsListItem>
                        </Container>
                        <Container>
                            <InfoProjectsListItem
                                id="123"
                                mainText="MainText"
                                firstText="FirstText"
                                secondText="SecondText"
                                color="blue-400"
                                percent={10}
                            ></InfoProjectsListItem>
                        </Container>
                        <Container>
                            <InfoProjectsListItem
                                id="123"
                                mainText="MainText"
                                firstText="FirstText"
                                secondText="SecondText"
                                percent={30}
                                color="amber-400"
                            ></InfoProjectsListItem>
                        </Container>
                        <Container>
                            <InfoProjectsListItem
                                id="123"
                                mainText="MainText"
                                firstText="FirstText"
                                secondText="SecondText"
                                percent={78}
                                color="green-400"
                            ></InfoProjectsListItem>
                        </Container>
                        <Container>
                            <InfoProjectsListItem
                                id="123"
                                mainText="MainText"
                                firstText="FirstText"
                                secondText="SecondText"
                                percent={25}
                                color="red-400"
                            ></InfoProjectsListItem>
                        </Container>
                    </List>
                </div>
            </div>

            <div className="bottom-0 w-full">
                <div className="bg-black mb-2 h-[2px]"></div>
                <div className="flex flex-row flex-wrap justify-evenly w-full">
                    <MenuButton>
                        <HomeIcon></HomeIcon>
                    </MenuButton>
                    <MenuButton>
                        <CalenderIcon number={new Date(Date.now()).getDate()}></CalenderIcon>
                    </MenuButton>
                    <MenuButton inverted={false}>
                        <PlusIcon></PlusIcon>
                    </MenuButton>
                    <MenuButton>
                        <FileEarmarkCheck></FileEarmarkCheck>
                    </MenuButton>
                    <MenuButton>
                        <PersonIcon></PersonIcon>
                    </MenuButton>
                </div>
            </div>
        </div>
    );
}

export default StartPage;
