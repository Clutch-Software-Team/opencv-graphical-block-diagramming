import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
export default memo(({ data }) => {
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
                <canvas id="canvasOutput"></canvas>
            </div>
        </>
    );
});