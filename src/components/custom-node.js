import React from 'react';
import { Handle } from 'react-flow-renderer';
import uuid from 'react-uuid';

const CustomNodeComponent = (node) => {

    const isValidConnection = (connection) => {
        if (connection.source === connection.target) {
            return false;
        }

        let sourceType = connection.sourceHandle.split("-")[2];
        let targetType = connection.targetHandle.split("-")[2];

        if (targetType === sourceType) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div style={{
            width: 75,
            height: node.data.parameters.length * 10,
            padding: 10,
            fontSize: 12,
            background: "#f0f2f3",
            textAlign: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#555",
        }}>
            {node.data.parameters.map((parameter, index) => {
                return (
                    <Handle
                        key={uuid()}
                        id={`param-${parameter.name}-${parameter.type}`}
                        type="target"
                        position="left"
                        style={{ top: (index + 1) * 12, borderRadius: 5 }}
                        isValidConnection={isValidConnection}
                    />
                )
            })}
            <div>{node.data.functionName}</div>
            {node.data.returnType !== "void" ?
                <Handle
                    id={`return-${node.data.functionName}-${node.data.returnType}`}
                    type="source"
                    position="right"
                    style={{ borderRadius: 5 }}
                    isValidConnection={isValidConnection}
                /> : null}
        </div>
    );
};

export default CustomNodeComponent;