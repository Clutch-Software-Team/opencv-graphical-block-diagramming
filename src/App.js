import React, { useContext, useState } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls, Background } from 'react-flow-renderer';
import NodeSidebar from './components/node-sidebar';
import DetailSidebar from './components/detail-sidebar';

import './assets/css/dnd.css';
import './assets/css/validation.css';
import CustomNodeComponent from './components/custom-node';
import StartNode from './components/start-node';
import FinishNode from './components/finish-node';

import { NodeStateContext } from './provider/node-state-provider';

const initialElements = [{
  id: "start_0",
  data: {
    label: "start",
  },
  position: { x: 120, y: 450 },
  sourcePosition: "right",
  type: "start"
},
{
  id: "finish_0",
  data: {
    label: "finish",
    parameters: [
      { name: "finish", type: "OutputArray", required: true, default: "" },
    ]
  },
  position: { x: 920, y: 450 },
  targetPosition: "left",
  type: "finish"
}
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const [currentNode, setCurrentNode] = useState(undefined);
  const { nodes, assignValue } = useContext(NodeStateContext);

  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onConnect = (params) => {
    let elements = reactFlowInstance.getElements();
    let elements_ = JSON.parse(JSON.stringify(elements));

    let targetID = params.target;
    let sourceID = params.source;
    let targetParamName = params.targetHandle.split("-")[1];
    let targetParamValue = "";
    let [type, name, paramType] = params.sourceHandle.split("-");

    if (type === "return" || paramType === "OutputArray") {
      targetParamValue = `ref:${sourceID}`;
    }

    for (const element of elements_) {
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

  const run = () => {
    let elements = reactFlowInstance.getElements();
    console.log(nodes, elements);
  }

  const onElementClick = (event, element) => {
    setCurrentNode(element);
  }

  const nodeTypes = {
    start: StartNode,
    custom: CustomNodeComponent,
    finish: FinishNode
  };


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
            className="validationflow"
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