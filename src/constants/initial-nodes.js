const initialNodes = [
    {
        id: "start_0",
        type: "start",
        isExecuted: false,
        data: {
            label: "start",
            functionName: "start",
            returnType: "InputArray",
            returnValue: null,
            parameters: []
        },
        position: { x: 120, y: 300 },
        sourcePosition: "right"
    },
    {
        id: "finish_0",
        type: "finish",
        isExecuted: false,
        data: {
            label: "finish",
            functionName: "finish",
            returnType: "void",
            returnValue: null,
            parameters: [
                { name: "dst", type: "OutputArray", required: true, currentValue: "", default: "" },
            ]
        },
        position: { x: 1220, y: 300 },
        targetPosition: "left",
    },
];

export default initialNodes;