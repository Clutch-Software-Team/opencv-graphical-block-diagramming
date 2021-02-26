import React, { useContext, useEffect, useState } from 'react';
import uuid from 'react-uuid'
import { NodeStateContext } from '../provider/node-state-provider';

const DetailSidebar = (props) => {
    const [node, setNode] = useState(undefined);
    const [inputValues, setInputValues] = useState([]);
    const { nodes, assignValue } = useContext(NodeStateContext);

    useEffect(() => {
        if (props.currentNode?.type === "start" || props.currentNode?.type === "finish") {
            return;
        }
        else {
            setInputValues(props.currentNode?.data.parameters.map(() => ""));
            setNode(props.currentNode);
        }
    }, [props.currentNode])

    const onChange = (index, e) => {
        let paramName = e.target.name;
        let paramValue = e.target.value;
        let curr_node = undefined;

        for (const node_ of nodes) {
            if (node_.id === node.id) {
                curr_node = node_;
                break;
            }
        }

        assignValue({
            node: curr_node,
            paramName: paramName,
            paramValue: paramValue
        })

        let values = [...inputValues];
        values[index] = paramValue;

        setInputValues(values);
    }

    if (node !== undefined) {
        return (
            <aside>
                <h1>{node.data.functionName} Function</h1>
                <hr />
                {node.data.parameters.map((parameter, index) => {
                    if (!parameter.required) {
                        return null;
                    }
                    if (parameter.type === "int" || parameter.type === "double") {
                        return (
                            <div key={parameter.name}>
                                <h3>{parameter.name}</h3>
                                <input onChange={(e) => onChange(index, e)} value={inputValues[index]} name={parameter.name} />
                            </div>
                        )
                    }
                    else {
                        return (
                            <h3 key={uuid()}>{parameter.name}</h3>
                        )
                    }
                }
                )}
            </aside>
        )
    }

    return (
        <aside>
            <div className="description">Click a node to see details.</div>
        </aside>
    );
};

export default DetailSidebar;