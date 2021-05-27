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
import setSelectValue from "./helpers/set-select-value";
import setInputValue from "./helpers/set-input-value";
import getId from "./helpers/get-id";

import pyLogo from "./assets/img/file.png";
import ocrExport from "./assets/img/ocrExport.png";
import ocrImport from "./assets/img/ocrImport.png";

// Python modal için react-boostrap import
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import cv from "./assets/js/opencv";
import { engine_run } from "./engine/engine";

import "./assets/css/dnd.css";

export default function Playground() {
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

  const exportToOcr = () => {
    let _elements = reactFlowInstance.getElements();

    let data =
      "text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(_elements));

    let a = document.createElement("a");
    a.href = "data:" + data;
    a.download = new Date().toISOString() + ".ocr";
    a.innerHTML = "download JSON";

    a.click();
  };

  const importOcr = () => {
    document.getElementById("ocrfile").click();
  };

  const handleOcrFileChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      let uploaded_nodes = JSON.parse(e.target.result);

      setElements(uploaded_nodes);

      setTimeout(() => {
        for (const n of uploaded_nodes) {
          if (n.id.startsWith('start') || n.source) {
            continue;
          }
          for (const parameter of n.data.parameters) {
            let input = document.getElementById(`${n.id}-${parameter.name}`)
            if (parameter.choices) {
              setSelectValue(input, parameter.currentValue)
            }
            else {
              setInputValue(input, parameter.currentValue)
            }
          }
        }
      }, 1000)
    };
  };

  const run = () => {
    let _elements = reactFlowInstance.getElements();
    engine_run(_elements, cv);
  };

  // Python modal için değişken tanımlamaları
  const [showPython, setShowPython] = useState(false);
  const handleClosePython = () => setShowPython(false);
  const handleShowPython = () => setShowPython(true);

  return (
    <div className="dndflow">
      <NodeSidebar />
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
        <div style={{ display: "flex" }}>
          <span
            style={{
              zIndex: 5,
              position: "absolute",
              bottom: "20px",
              right: "20px",
              cursor: "pointer",
            }}
            title="Export Python Format"
            onClick={handleShowPython}
          >
            <img
              src={pyLogo}
              alt="myimage"
              style={{ height: "50px", width: "50px" }}
            />
          </span>

          <span
            style={{
              zIndex: 5,
              position: "absolute",
              bottom: "20px",
              right: "90px",
              cursor: "pointer",
            }}
            title="Export OCR File"
            onClick={exportToOcr}
          >
            <img
              src={ocrExport}
              alt="myimage"
              style={{ height: "50px", width: "50px" }}
            />
          </span>

          <span
            style={{
              zIndex: 5,
              position: "absolute",
              bottom: "20px",
              right: "160px",
              cursor: "pointer",
            }}
            title="Import OCR File"
            onClick={importOcr}
          >
            <img
              src={ocrImport}
              alt="myimage"
              style={{ height: "50px", width: "50px" }}
            />
          </span>

          <input
            type="file"
            id="ocrfile"
            accept={".ocr"}
            onChange={handleOcrFileChange}
            style={{ display: "none" }}
          />

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
        //zoomOnScroll={false}
        //panOnScroll={true}
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
