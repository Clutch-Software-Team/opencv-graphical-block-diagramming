

import React from 'react';
import { Handle } from 'react-flow-renderer';
import uuid from 'react-uuid';

const CustomHandle = (props) => {

    const { parameter, isFunctionReturn, position, localIndex, type } = props;

    const DEFAULT_MARGIN = 30
    const DEFAULT_HANDLE_MARGIN = -1

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

    const getHandleColor = () => {
        switch (parameter.type) {
            case 'InputArray':
                return "yellow"

            case 'OutputArray':
                return "purple"

            case 'void':
                return "blue"

            case 'double':
                return "red"

            default:
                return "gray"
        }
    }

    const containerStyle = {
        display: "flex",
        flexDirection: position === "right" ? "row-reverse" : "row"
    }

    const nameStyle = {
        position: "absolute",
        color: "white",
        fontSize: 12,
        top: 20,
        marginTop: localIndex * DEFAULT_MARGIN - 7,
        marginRight: position === "right" ? 10 : 0,
        marginLeft: position === "left" ? 10 : 0,
    }

    const handleParamStyle = {
        position: "absolute",
        top: 20,
        marginTop: localIndex * DEFAULT_MARGIN,
        borderRadius: 15,
        height: 8,
        width: 8,
        backgroundColor: getHandleColor(),
        borderColor: "black",
        borderWidth: 2,
        marginRight: position === "right" ? DEFAULT_HANDLE_MARGIN : 0,
        marginLeft: position === "left" ? DEFAULT_HANDLE_MARGIN : 0
    }

    const handleReturnStyle = {
        height: 8,
        width: 8,
        backgroundColor: getHandleColor(),
        borderColor: "black",
        borderWidth: 2,
        marginRight: position === "right" ? DEFAULT_HANDLE_MARGIN : 0,
        marginLeft: position === "left" ? DEFAULT_HANDLE_MARGIN : 0
    }

    return (
        <div key={uuid()} style={containerStyle}>
            {!isFunctionReturn ? <div style={nameStyle}>{parameter.name}</div> : null}
            <Handle
                id={`${isFunctionReturn ? 'return' : 'param'}-${parameter.name}-${parameter.type}`}
                type={type}
                position={position}
                style={isFunctionReturn ? handleReturnStyle : handleParamStyle}
                isValidConnection={isValidConnection}
            />
        </div>
    )
}

export default CustomHandle;