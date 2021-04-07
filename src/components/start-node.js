import React from 'react';
import CustomHandle from './custom-handle';
const cv = require("../assets/js/opencv");

const StartNodeComponent = (node) => {

    const onChange = (event) => {
        let imgElement = document.getElementById(node.id);
        imgElement.src = URL.createObjectURL(event.target.files[0]);
    };

    const containerStyle = {
        width: 250,
        backgroundColor: "#414141",
        height: 280,
        borderRadius: 5,
        border: node.selected ? "2px solid white" : "2px solid black"
    }

    const imageStyle = {
        width: 220,
        height: 200
    }

    const titleContainerStyle = {
        padding: 5,
        color: "white",
        backgroundColor: "#6C5AAD"
    }

    const innerContainerStyle = {
        padding: 15,
    }

    const inputStyle = {
        maxWidth: 200
    }

    const onLoad = () => {/*
        let mat = cv.imread(node.id);
        cv.cvtColor(mat, mat, cv.COLOR_RGBA2GRAY);
        cv.imshow('finish_0', mat);
        mat.delete();*/
    }

    return (
        <div style={containerStyle}>
            <div style={titleContainerStyle}>Input</div>
            <div style={innerContainerStyle}>
                <img id={node.id} alt="" style={imageStyle} onLoad={onLoad} />
                <br />
                <input
                    className="nodrag"
                    type="file"
                    onChange={onChange}
                    style={inputStyle}
                />
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
            </div>
        </div>
    );
};

export default StartNodeComponent;