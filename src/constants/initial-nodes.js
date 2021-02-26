const initialNodes = [
    {
        id: "start_0",
        data: {
            label: "start",
        },
        position: { x: 120, y: 450 },
        sourcePosition: "right",
        type: "start"
    },
    {
        id: "finish_0",
        data: {
            label: "finish",
            parameters: [
                { name: "finish", type: "OutputArray", required: true, default: "" },
            ]
        },
        position: { x: 920, y: 450 },
        targetPosition: "left",
        type: "finish"
    }
];

export default initialNodes;