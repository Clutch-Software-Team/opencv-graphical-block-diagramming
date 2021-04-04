import React, { useContext, useState } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls, Background } from 'react-flow-renderer';

import { NodeStateContext } from './provider/node-state-provider';
import DetailSidebar from './components/detail-sidebar';
import initialNodes from './constants/initial-nodes';
import NodeSidebar from './components/node-sidebar';
import nodeTypes from './constants/node-types';
import getId from './helpers/get-id';

import './assets/css/validation.css';
import './assets/css/dnd.css';

export default function DnDFlow() {

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const { nodes, assignValue } = useContext(NodeStateContext);
  const [currentNode, setCurrentNode] = useState(undefined);
  const [elements, setElements] = useState(initialNodes);

  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onDragOver = (event) => { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; };
  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);

  const onConnect = (params) => {
    let elements_ = JSON.parse(JSON.stringify(reactFlowInstance.getElements()));

    let { target: targetID, source: sourceID } = params;

    let targetParamName = params.targetHandle.split("-")[1];
    let targetParamValue = "";

    let [type, , paramType] = params.sourceHandle.split("-");

    if (type === "return" || paramType === "OutputArray") {
      targetParamValue = `ref:${sourceID}`;
    }

    let isNodeFound = false;

    for (const node of nodes) {
      if (node.id === targetID) {
        isNodeFound = true;
        assignValue({
          node: node,
          paramName: targetParamName,
          paramValue: targetParamValue
        })
      }
    }

    if (!isNodeFound) {
      for (const element of elements_) {
        if (element.id === targetID) {
          assignValue({
            node: element,
            paramName: targetParamName,
            paramValue: targetParamValue
          })
        }
      }
    }

    params.animated = true
    params.type = "smoothstep"
    setElements((els) => addEdge(params, els))
  };

  const onDrop = (event) => {
    event.preventDefault();
    let eventData = event.dataTransfer.getData('application/reactflow');
    if (eventData !== "") {
      const node = JSON.parse(eventData);
      const position = reactFlowInstance.project({ x: event.clientX, y: event.clientY });

      const newNode = {
        id: getId(node.type),
        type: node.type,
        position,
        sourcePosition: 'right',
        targetPosition: 'left',
        data: node.data,
      };

      setElements((es) => es.concat(newNode));
    }
  };

  const onElementClick = (event, element) => {
    //check if clicked element is a node
    if (!element.source) {
      setCurrentNode(element);
    }
  }

  const run = () => {
    let elements = reactFlowInstance.getElements();
    console.log(nodes, elements);
  }

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <NodeSidebar />
        <div className="reactflow-wrapper">
          <button className="run_btn" onClick={run}>Run</button>
          <ReactFlow
            nodeTypes={nodeTypes}
            elements={elements}
            onConnect={onConnect}
            onElementClick={onElementClick}
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
                backgroundColor: "#393939"
              }}
            />
            <Controls />
          </ReactFlow>
        </div>
        <DetailSidebar currentNode={currentNode} />
      </ReactFlowProvider>
    </div>
  );
};
