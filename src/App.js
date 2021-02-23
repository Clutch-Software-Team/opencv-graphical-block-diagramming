import React, { useContext, useState } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls, Background } from 'react-flow-renderer';
import NodeSidebar from './components/NodeSidebar';
import DetailSidebar from './components/DetailSidebar';

import './assets/css/dnd.css';
import CustomNodeComponent from './components/custom-node';
import { NodeStateContext } from './provider/node-state-provider';

const initialElements = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const [currentNode, setCurrentNode] = useState(undefined);
  const { assignValue } = useContext(NodeStateContext);

  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onConnect = (params) => {
    let elements = reactFlowInstance.getElements();

    let targetID = params.target;
    let targetParamName = params.targetHandle.split("-")[1];
    let targetParamValue = "";
    let [type, name] = params.sourceHandle.split("-");

    if (type === "return") {
      targetParamValue = `ref:${name}`;
    }

    for (const element of elements) {
      if (element.id === targetID) {
        assignValue({
          node: element,
          paramName: targetParamName,
          paramValue: targetParamValue
        })
      }
    }

    setElements((els) => addEdge(params, els))
  };

  const onDrop = (event) => {
    event.preventDefault();

    const node = JSON.parse(event.dataTransfer.getData('application/reactflow'));
    const position = reactFlowInstance.project({ x: event.clientX, y: event.clientY });

    const newNode = {
      id: getId(),
      type: node.type,
      position,
      sourcePosition: 'right',
      targetPosition: 'left',
      data: node.data,
    };

    setElements((es) => es.concat(newNode));
  };

  const onElementClick = (event, element) => {
    setCurrentNode(element);
  }

  const nodeTypes = {
    custom: CustomNodeComponent,
  };


  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <NodeSidebar />
        <div className="reactflow-wrapper">
          <ReactFlow
            nodeTypes={nodeTypes}
            elements={elements}
            onConnect={onConnect}
            onElementClick={onElementClick}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            connectionLineType="stepedge"
            deleteKeyCode={46}
            multiSelectionKeyCode={17}
          >
            <Background
              variant="lines"
              gap={48}
              size={2}
            />
            <Controls />
          </ReactFlow>
        </div>
        <DetailSidebar currentNode={currentNode} />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;