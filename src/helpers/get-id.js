let id = 1;

const getId = (type) => {
    if (type === "start" || type === "finish") {
        return `${type}_${id++}`
    }
    else {
        return `node_${id++}`;
    }
};

export default getId;