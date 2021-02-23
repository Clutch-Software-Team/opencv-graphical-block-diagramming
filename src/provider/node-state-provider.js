import React, { useState } from 'react';

export const NodeStateContext = React.createContext({
    nodes: [],
    assignValue: (params) => { }
});

export const NodeStateProvider = ({ children }) => {
    const [nodes, setNodes] = useState([]);

    return (
        <NodeStateContext.Provider value={{
            nodes: nodes,
            assignValue: (params) => {
                let nodes_ = [...nodes]

                for (const parameter of params.node.data.parameters) {
                    if (parameter.name === params.paramName) {
                        parameter.currentValue = params.paramValue;
                        break;
                    }
                }

                let filteredArray = nodes_.filter(node => params.node.id === node.id);

                const length = filteredArray.length;
                const index = nodes_.indexOf(filteredArray[0])

                if (length === 0) {
                    nodes_.push(params.node);
                    setNodes(nodes_);
                }
                else {
                    nodes_[index] = params.node;
                    setNodes(nodes_);
                }
            }
        }}>
            {children}
        </NodeStateContext.Provider>
    );
}
