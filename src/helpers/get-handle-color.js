const getHandleColor = (type) => {
    switch (type) {
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

export default getHandleColor;