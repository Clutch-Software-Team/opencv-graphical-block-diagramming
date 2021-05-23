import React from "react";
import CustomHandle from "./custom-handle";

const FinishNodeComponent = (node) => {
  const containerStyle = {
    width: 250,
    backgroundColor: "#414141",
    height: 350,
    borderRadius: 5,
    border: node.selected ? "2px solid white" : "2px solid black",
  };

  const canvasStyle = {
    width: 220,
    height: 250,
    borderWidth: 2,
    marginTop: 20,
  };

  const titleContainerStyle = {
    padding: 5,
    color: "white",
    backgroundColor: "#4A87AE",
  };

  const innerContainerStyle = {
    padding: 15,
  };

  return (
    <div style={containerStyle}>
      <div style={titleContainerStyle}>Output</div>
      <div style={innerContainerStyle}>
        <CustomHandle
          key={node.data.parameters[0].name}
          node={node}
          parameter={node.data.parameters[0]}
          position="left"
          type="target"
          isFunctionReturn={false}
          localIndex={1}
        />
        <canvas id={node.id} style={canvasStyle}></canvas>
      </div>
    </div>
  );
};

export default FinishNodeComponent;
