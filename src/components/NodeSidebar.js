import React from 'react';
import customNodes from "../constants/nodes";

const NodeSidebar = () => {

    const nodes = customNodes;

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside>
            <div className="description">You can drag these nodes to the pane on the right.</div>

            {nodes.map((node) => (
                <div className={node.className} key={node.key} onDragStart={(event) => onDragStart(event, JSON.stringify(node))} draggable>
                    {node.data.functionName}
                </div>
            ))}
        </aside>
    );
};

export default NodeSidebar;