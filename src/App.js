import { useState, useEffect } from "react";
import "./App.css";
import AiBtn from "./components/AiBtn";
import Box from "./components/Box";
import FdBtn from "./components/FdBtn";
import JcBtn from "./components/JcBtn";

const App = () => {
  const [flexDir, setFlexDir] = useState("row");
  const [justifyCon, setJustifyCon] = useState("stretch");
  const [alignItm, setAlignItm] = useState("stretch");

  const flexDirection = (newValue) => {
    setFlexDir(newValue);
  };

  const justifyContent = (newValue) => {
    setJustifyCon(newValue);
  };

  const alignItems = (newValue) => {
    setAlignItm(newValue);
  };

  useEffect(() => {
    const container = document.querySelector(".container");
    container.setAttribute(
      "style",
      `flex-direction: ${flexDir};
      justify-content: ${justifyCon};
      align-items: ${alignItm};`
    );
  }, [flexDir, justifyCon, alignItm]);

  return (
    <div className="main">
      <h1>Flexbox Visualizer</h1>
      <div className="container">
        <Box text={1} />
        <Box text={2} />
        <Box text={3} />
        <Box text={4} />
        <Box text={5} />
      </div>
      <div className="footer">
        <div className="flex-direction">
          Flex Direction
          <FdBtn
            text={"row"}
            isActive={flexDir === "row" ? true : false}
            newButton={flexDirection}
          />
          <FdBtn
            text={"column"}
            isActive={flexDir === "column" ? true : false}
            newButton={flexDirection}
          />
          <FdBtn
            text={"row-reverse"}
            isActive={flexDir === "row-reverse" ? true : false}
            newButton={flexDirection}
          />
          <FdBtn
            text={"column-reverse"}
            isActive={flexDir === "column-reverse" ? true : false}
            newButton={flexDirection}
          />
        </div>
        <div className="justify-content">
          Justify Content
          <JcBtn
            text={"stretch"}
            isActive={justifyCon === "stretch" ? true : false}
            newButton={justifyContent}
          />
          <JcBtn
            text={"flex-start"}
            isActive={justifyCon === "flex-start" ? true : false}
            newButton={justifyContent}
          />
          <JcBtn
            text={"flex-end"}
            isActive={justifyCon === "flex-end" ? true : false}
            newButton={justifyContent}
          />
          <JcBtn
            text={"center"}
            isActive={justifyCon === "center" ? true : false}
            newButton={justifyContent}
          />
          <JcBtn
            text={"space-around"}
            isActive={justifyCon === "space-around" ? true : false}
            newButton={justifyContent}
          />
          <JcBtn
            text={"space-evenly"}
            isActive={justifyCon === "space-evenly" ? true : false}
            newButton={justifyContent}
          />
          <JcBtn
            text={"space-between"}
            isActive={justifyCon === "space-between" ? true : false}
            newButton={justifyContent}
          />
        </div>
        <div className="align-items">
          Align Items
          <AiBtn
            text={"stretch"}
            isActive={alignItm === "stretch" ? true : false}
            newButton={alignItems}
          />
          <AiBtn
            text={"flex-start"}
            isActive={alignItm === "flex-start" ? true : false}
            newButton={alignItems}
          />
          <AiBtn
            text={"flex-end"}
            isActive={alignItm === "flex-end" ? true : false}
            newButton={alignItems}
          />
          <AiBtn
            text={"center"}
            isActive={alignItm === "center" ? true : false}
            newButton={alignItems}
          />
          <AiBtn
            text={"baseline"}
            isActive={alignItm === "baseline" ? true : false}
            newButton={alignItems}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
