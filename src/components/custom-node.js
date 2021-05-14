import React from 'react';

import CustomHandle from './custom-handle';

import getHeaderColor from '../helpers/get-header-color';

const CustomNodeComponent = (node) => {

    let local_index = 0;

    const containerStyle = {
        width: 200,
        backgroundColor: "#414141",
        height: node.data.parameters.length * 45,
        borderRadius: 5,
        border: node.selected ? "2px solid grey" : "2px solid black"
    }

    const titleContainerStyle = {
        padding: 5,
        color: "white",
        backgroundColor: getHeaderColor(node.data.functionName)
    }

    return (
        <div style={containerStyle}>
            <div style={titleContainerStyle}>{node.data.functionName}</div>
            {node.data.parameters.map((parameter, index) => (
                <CustomHandle
                    key={parameter.name}
                    node={node}
                    parameter={parameter}
                    position={parameter.isOutput ? "right" : "left"}
                    type={parameter.isOutput ? "source" : "target"}
                    localIndex={index + 1}
                />
            ))}

            {node.data.returnType !== "void" &&
                <CustomHandle
                    key={node.data.returnType}
                    node={node}
                    parameter={{
                        name: node.data.functionName,
                        type: node.data.returnType
                    }}
                    position="right"
                    type="source"
                    isFunctionReturn={true}
                />
            }
        </div>
    );
};

export default CustomNodeComponent;