import React from 'react';
import { useStoreState } from 'react-flow-renderer';

export const NodeStateContext = React.createContext({
    assignValue: () => { }
});

export const NodeStateProvider = ({ children }) => {
    const currentNodes = useStoreState((store) => store.nodes);

    return (
        <NodeStateContext.Provider value={{
            assignValue: (id, name, value) => {
                let [nodeToBeUpdated] = currentNodes.filter(node => id === node.id);

                let { parameters } = nodeToBeUpdated.data;

                for (const parameter of parameters) {
                    if (parameter.name === name) {
                        parameter.currentValue = value;
                    }
                }
            }
        }}>
            {children}
        </NodeStateContext.Provider>
    );
}
