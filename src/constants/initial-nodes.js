const initialNodes = [
    {
        id: "start_0",
        type: "start",
        data: {
            label: "start",
            functionName: "start",
            returnType: "InputArray"
        },
        position: { x: 120, y: 450 },
        sourcePosition: "right",
        type: "start"
    },
    {
        id: "finish_0",
        data: {
            label: "finish",
            functionName: "finish",
            returnType: "void",
            parameters: [
                { name: "dst", type: "OutputArray", required: true, default: "" },
            ]
        },
        position: { x: 920, y: 450 },
        targetPosition: "left",
        type: "finish",
    },
];

export default initialNodes;