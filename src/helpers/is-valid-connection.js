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

export default isValidConnection;