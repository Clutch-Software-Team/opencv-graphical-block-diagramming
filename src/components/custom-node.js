import React from "react";

import CustomHandle from "./custom-handle";

import getHeaderColor from "../helpers/get-header-color";

import info from "../assets/img/info.png";

import "../assets/css/infoBox.css";

const CustomNodeComponent = (node) => {
  const [infoBox, setInfoBox] = React.useState(true);
  let local_index = 0;

  const containerStyle = {
    width: 200,
    backgroundColor: "#414141",
    height: node.data.parameters.length * 45,
    borderRadius: 5,
    border: node.selected ? "2px solid grey" : "2px solid black",
  };

  const titleContainerStyle = {
    padding: 5,
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: getHeaderColor(node.data.functionName),
  };

  let inputStyle;
  if (infoBox) {
    inputStyle = { visibility: "hidden" };
  } else {
    inputStyle = {
      backgroundColor: "#320838",
    };
  }

  return (
    <div style={containerStyle}>
      <div style={titleContainerStyle}>
        {node.data.label}
        <span
          title="Information"
          style={{
            cursor: "help",
          }}
        >
          <img
            src={info}
            alt="info"
            style={{ height: "20px", width: "20px" }}
            onClick={() => {
              setInfoBox(!infoBox);
              console.log(infoBox);
            }}
          />
        </span>
        <div className="infoBox" style={inputStyle}>
          <span
            style={{
              height: "200px",
              width: "250px",
              paddingTop: "10px",
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingBottom: "15px",
            }}
          >
            <span>
              <b>{node.data.label}</b>
            </span>
            <br /> <span>{node.data.infoNodes}</span>
          </span>
        </div>
      </div>
      {node.data.parameters.map((parameter, index) => (
        <CustomHandle
          key={parameter.name}
          node={node}
          parameter={parameter}
          position={parameter.isOutput ? "right" : "left"}
          type={parameter.isOutput ? "source" : "target"}
          localIndex={index + 1}
        />
      ))}

      {node.data.returnType !== "void" && (
        <CustomHandle
          key={node.data.returnType}
          node={node}
          parameter={{
            name: node.data.functionName,
            type: node.data.returnType,
          }}
          position="right"
          type="source"
          isFunctionReturn={true}
        />
      )}
    </div>
  );
};

export default CustomNodeComponent;
