import React from 'react';
import { Handle } from 'react-flow-renderer';

const FinishNodeComponent = (node) => {
    return (
        <>
            <Handle
                type="target"
                position="left"
                id="param-finish-OutputArray"
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
            />
            <div style={{ width: 250, height: 300 }}>
                <h3>Output</h3>
                <canvas id={node.id}></canvas>
            </div>
        </>
    );
};

export default FinishNodeComponent;