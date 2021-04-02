import React from 'react';
import { Handle } from 'react-flow-renderer';

const StartNodeComponent = (node) => {

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

    const onChange = (event) => {
        let imgElement = document.getElementById(node.id);
        imgElement.src = URL.createObjectURL(event.target.files[0]);
    };

    return (
        <>
            <div style={{ width: 250, height: 250 }}>
                <img id={node.id} alt="" style={{ width: 250, height: 225 }} />
                <br />
                <input
                    className="nodrag"
                    type="file"
                    onChange={onChange}
                />
            </div>
            <Handle
                type="source"
                position="right"
                id="return-start-InputArray"
                isValidConnection={isValidConnection}
                style={{ background: '#555' }}
            />
        </>
    );
};

export default StartNodeComponent;