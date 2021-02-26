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
    let local_index = 0;

    return (
        <div style={{ height: node.data.parameters.length * 30 }}>
            {node.data.parameters.map((parameter, index) => {
                if (parameter.type !== "OutputArray") {
                    local_index += 1;
                    return (
                        <div key={uuid()} style={{ textAlign: "left", marginBottom: -2 }}>
                            <Handle
                                key={uuid()}
                                id={`param-${parameter.name}-${parameter.type}`}
                                type="target"
                                position="left"
                                style={{ top: local_index * 28, borderRadius: 15, height: 7, width: 7 }}
                                isValidConnection={isValidConnection}
                            />
                            <h4 key={uuid()}>{parameter.name} ({parameter.type})</h4>
                        </div>
                    )
                }
                else {
                    return null;
                }
            })}
            {node.data.parameters.map((parameter) => {
                if (node.data.returnType === "void") {
                    if (parameter.type === "OutputArray") {
                        return (
                            <div key={uuid()} style={{ textAlign: "right", marginBottom: -2 }}>
                                <Handle
                                    key={uuid()}
                                    id={`param-${parameter.name}-${parameter.type}`}
                                    type="source"
                                    position="right"
                                    style={{ borderRadius: 15, height: 7, width: 7 }}
                                    isValidConnection={isValidConnection}
                                />
                                <h4 key={uuid()}>{parameter.name} ({parameter.type})</h4>
                            </div>
                        )
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return null;
                }
            })}

            {node.data.returnType !== "void" ?
                <Handle
                    id={`return-${node.data.functionName}-${node.data.returnType}`}
                    type="source"
                    position="right"
                    style={{ borderRadius: 15, height: 7, width: 7 }}
                    isValidConnection={isValidConnection}
                />
                :
                null
            }
            <div style={{ marginBottom: 5 }}>
                {node.data.functionName}
                <b> {node.data.returnType !== "void" ? `(${node.data.returnType})` : ""}</b>
            </div>
        </div>
    );
};

export default CustomNodeComponent;