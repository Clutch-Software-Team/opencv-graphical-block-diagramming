import React, { useContext, useRef, useState } from "react";
import ReactFlow, {
  addEdge,
  removeElements,
  Controls,
  Background,
} from "react-flow-renderer";

import initialNodes from "./constants/initial-nodes";
import NodeSidebar from "./components/node-sidebar";
import nodeTypes from "./constants/node-types";

import { NodeStateContext } from "./provider/node-state-provider";
import setInputValue from "./helpers/set-input-value";
import getId from "./helpers/get-id";

import pyLogo from "./assets/file.png"
import ocrLogo from "./assets/ocr.png"

//const cv = require("./assets/js/opencv");

import cv from "./assets/js/opencv";
import { engine_run } from "./engine/engine";

import "./assets/css/dnd.css";

export default function DnDFlow() {
  const reactFlowWrapper = useRef(null);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialNodes);
  const { assignValue } = useContext(NodeStateContext);

  const onLoad = (_reactFlowInstance) => {
    setReactFlowInstance(_reactFlowInstance);
  };

  const onElementsRemove = (elementsToRemove) => {
    setElements((els) => removeElements(elementsToRemove, els));
  };
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onConnect = (params) => {
    let { target, targetHandle, source } = params;

    let parameterName = targetHandle.split("-")[1];

    assignValue(target, parameterName, `ref:${source}`);

    let input = document.getElementById(`${target}-${parameterName}`);

    if (input) {
      setInputValue(input, `ref:${source}`);
    }

    params.animated = true;
    params.type = "smoothstep";
    setElements((els) => addEdge(params, els));
  };

  const onDrop = (event) => {
    event.preventDefault();

    let eventData = event.dataTransfer.getData("application/reactflow");
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

    if (eventData === "") {
      return;
    }

    const node = JSON.parse(eventData);
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const newNode = {
      id: getId(node.type),
      position,
      sourcePosition: "right",
      targetPosition: "left",
      ...node,
    };

    setElements((es) => es.concat(newNode));
  };

  const run = () => {
    let _elements = reactFlowInstance.getElements();
    console.log(_elements);
    engine_run(_elements, cv);
  };

  return (
    <div className="dndflow">
      <NodeSidebar />
      
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
      <div style={{display:"flex"}}>
        <span style={{ zIndex:5, position:"absolute",bottom:"20px",right:"20px", cursor:"pointer"}} title="Python Format">
         <img src={pyLogo} alt="myimage" style={{height:"50px",width:"50px"}} />
        </span>
        <span style={{ zIndex:5, position:"absolute",bottom:"20px",right:"90px", cursor:"pointer"}}  title="OCR Format">
         <img src={ocrLogo} alt="myimage" style={{height:"50px",width:"50px"}}   />
        </span>
        <button className="run_btn" onClick={run}>
          Run
        </button>
        </div>
        <ReactFlow
          nodeTypes={nodeTypes}
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onLoad={onLoad}
          onDrop={onDrop}
          onDragOver={onDragOver}
          deleteKeyCode={46}
          multiSelectionKeyCode={17}
          onlyRenderVisibleElements={false}
        >
          <Background
            variant="lines"
            gap={24}
            size={1}
            color="#292929"
            style={{
              backgroundColor: "#393939",
            }}
          />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
