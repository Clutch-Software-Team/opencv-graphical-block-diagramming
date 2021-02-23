import React, { useContext, useEffect, useState } from 'react';
import uuid from 'react-uuid'
import { NodeStateContext } from '../provider/node-state-provider';

const DetailSidebar = (props) => {
    const [node, setNode] = useState(undefined);
    const [inputValues, setInputValues] = useState([]);
    const { nodes, assignValue } = useContext(NodeStateContext);

    useEffect(() => {
        setInputValues(props.currentNode?.data.parameters.map(() => ""));
        setNode(props.currentNode);
    }, [props.currentNode])

    const onChange = (index, e) => {
        let paramName = e.target.name;
        let paramValue = e.target.value;

        assignValue({
            node: node,
            paramName: paramName,
            paramValue: paramValue
        })

        let values = [...inputValues];
        values[index] = paramValue;

        setInputValues(values);
    }

    const run = () => {
        console.log(nodes)
    }

    if (node !== undefined) {
        return (
            <aside>
                <h1>{node.data.functionName} Function</h1>
                <hr />
                {node.data.parameters.map((parameter, index) => {
                    if (!parameter.required) {
                        return;
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
                <button onClick={run}>run</button>
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