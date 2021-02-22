import React from 'react';
import { Handle } from 'react-flow-renderer';
import uuid from 'react-uuid';

const CustomNodeComponent = ({ data }) => {

    const isValidConnection = (connection) => {
        if (connection.source === connection.target) {
            return false;
        }

        let sourceType = connection.sourceHandle.split("-")[1];
        let targetType = connection.targetHandle.split("-")[1];

        if (targetType === sourceType) {
            return true;
        }
        else {
            return false;
        }
    }

    const onConnect = (c) => {
        console.log("çağrıldı", c)
    }
    //target -> source
    return (
        <div style={{
            width: 75,
            height: data.parameters.length * 10,
            padding: 10,
            fontSize: 12,
            background: "#f0f2f3",
            textAlign: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#555",
        }}>
            {data.parameters.map((parameter, index) => {
                return (
                    <Handle
                        key={uuid()}
                        id={`${parameter.name}-${parameter.type}`}
                        type="target"
                        position="left"
                        style={{ top: (index + 1) * 12, borderRadius: 5 }}
                        onConnect={onConnect}
                        isValidConnection={isValidConnection}
                    />
                )
            })}
            <div>{data.functionName}</div>
            {data.returnType !== "void" ?
                <Handle
                    id={`${data.functionName}-${data.returnType}`}
                    type="source"
                    position="right"
                    style={{ borderRadius: 5 }}
                    isValidConnection={isValidConnection}
                /> : null}
        </div>
    );
};

export default CustomNodeComponent;