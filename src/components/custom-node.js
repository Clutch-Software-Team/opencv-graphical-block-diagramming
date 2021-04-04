import React from 'react';
import uuid from 'react-uuid';
import CustomHandle from './custom-handle';

const CustomNodeComponent = (node) => {

    const getHeaderColor = (name) => {
        let colors = [
            "#488948",
            "#7B2A31",
            "#6C5AAD",
            "#4A87AE",
            "#9C343E"
        ]

        return colors[name.length % colors.length]
    }

    let local_index = 0;

    const containerStyle = {
        width: 200,
        backgroundColor: "#5A5A5A",
        opacity: 0.8,
        height: node.data.parameters.length * 45,
        borderRadius: 5,
        border: node.selected ? "2px solid white" : "2px solid black"
    }

    const titleContainerStyle = {
        padding: 5,
        color: "white",
        backgroundColor: getHeaderColor(node.data.functionName)
    }

    return (
        <div style={containerStyle}>
            <div style={titleContainerStyle}>{node.data.functionName}</div>
            {node.data.parameters.map((parameter, index) => {
                local_index += 1;
                if (node.data.returnType === "void" && parameter.type === "OutputArray") {
                    return (
                        <CustomHandle
                            key={uuid()}
                            parameter={parameter}
                            position="right"
                            type="source"
                            localIndex={local_index}
                            isFunctionReturn={false}
                        />
                    )
                }

                if (parameter.type !== "OutputArray") {
                    return (
                        <CustomHandle
                            key={uuid()}
                            parameter={parameter}
                            position="left"
                            type="target"
                            localIndex={local_index}
                            isFunctionReturn={false}
                        />
                    )
                }
                else {
                    return null;
                }
            })}
            {node.data.returnType !== "void" ?
                <CustomHandle
                    key={uuid()}
                    parameter={{
                        name: node.data.functionName,
                        type: node.data.returnType
                    }}
                    position="right"
                    type="source"
                    isFunctionReturn={true}
                />
                :
                null
            }
        </div>
    );
};

export default CustomNodeComponent;