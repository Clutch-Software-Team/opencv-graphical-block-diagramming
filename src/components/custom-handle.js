

import React, { useContext, useEffect, useState } from 'react';
import { Handle } from 'react-flow-renderer';
import getHandleColor from '../helpers/get-handle-color';
import isValidConnection from '../helpers/is-valid-connection';
import { NodeStateContext } from '../provider/node-state-provider';

const CustomHandle = (props) => {
    const [parameterValue, setParameterValue] = useState("");
    const [isReferenced, setIsReferenced] = useState(false);

    const { assignValue } = useContext(NodeStateContext);

    const { node, parameter, isFunctionReturn = false, position, localIndex, type } = props;

    const [isSelect, setIsSelect] = useState(parameter?.choices?.length > 0);

    useEffect(() => {
        if (parameterValue.startsWith("ref:")) {
            setIsReferenced(true);
        }
    }, [parameterValue])

    const containerStyle = {
        display: "flex",
        paddingLeft: 9
    }

    const handleParamStyle = {
        position: "absolute",
        top: 20,
        marginTop: localIndex * 30,
        borderRadius: 15,
        height: 8,
        width: 8,
        backgroundColor: getHandleColor(parameter.type),
        borderColor: "black",
        borderWidth: 2,
        marginRight: position === "right" ? -1 : 0,
        marginLeft: position === "left" ? -1 : 0
    }

    const handleReturnStyle = {
        height: 8,
        width: 8,
        backgroundColor: getHandleColor(parameter.type),
        borderColor: "black",
        borderWidth: 2,
        marginRight: position === "right" ? -1 : 0,
        marginLeft: position === "left" ? -1 : 0
    }

    const inputStyle = {
        position: "absolute",
        top: 20,
        width: 175,
        marginTop: localIndex * 30 - 10,
        color: "white",
        fontSize: 12,
        backgroundColor: "#575757",
        borderRadius: 3,
        height: 18,
        border: 0
    }

    const onChange = (e) => {
        assignValue(node.id, parameter.name, e.target.value);
        setParameterValue(e.target.value);
    }

    return (
        <div key={parameter.name} style={containerStyle}>
            {!isFunctionReturn ?
                !isSelect ?
                    <input
                        id={`${node.id}-${parameter.name}`}
                        name={parameter.name}
                        autoComplete="off"
                        className="nodrag"
                        onChange={onChange}
                        value={parameterValue}
                        style={inputStyle}
                        placeholder={parameter.name}
                        disabled={isReferenced || parameter.name == 'dst'}
                    />
                    :
                    <select
                        style={inputStyle}
                        onChange={onChange}
                    >
                        <option value="" hidden>Select a Value</option>
                        {parameter.choices.map((choice, index) => (
                            <option key={parameter.name + index} value={choice}>{choice}</option>
                        ))}
                    </select>
                :
                null
            }
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