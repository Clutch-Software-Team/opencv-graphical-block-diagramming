import React, { useState } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls, Background } from 'react-flow-renderer';
import NodeSidebar from './components/NodeSidebar';
import DetailSidebar from './components/DetailSidebar';

import './assets/css/dnd.css';
import CustomNodeComponent from './components/custom-node';
import { NodeStateProvider } from './provider/node-state-provider';

const initialElements = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const [currentNode, setCurrentNode] = useState(undefined);

  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
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
    <NodeStateProvider>
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
    </NodeStateProvider>
  );
};

export default DnDFlow;