import React from 'react';
import customNodes from "../constants/nodes";

const NodeSidebar = () => {

    const nodes = customNodes;

    const onDragStart = (event, node) => {
        event.dataTransfer.setData('application/reactflow', JSON.stringify(node));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside style={{ overflowX: 'hidden' }}>
            <div className="description">You can drag these nodes to the pane on the right.</div>

            {nodes.map((node, index) => (
                <div className={"dndnode"} key={index} onDragStart={(event) => onDragStart(event, node)} draggable>
                    {node.data.functionName}
                </div>
            ))}
        </aside>
    );
};

export default NodeSidebar;