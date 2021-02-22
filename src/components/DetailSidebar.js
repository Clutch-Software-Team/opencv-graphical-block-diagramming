import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid'

const DetailSidebar = (props) => {
    const [node, setNode] = useState(undefined);

    useEffect(() => {
        setNode(props.currentNode)
    }, [props.currentNode])

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
                            <div key={uuid()}>
                                <h3>{parameter.name}</h3>
                                <input />
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