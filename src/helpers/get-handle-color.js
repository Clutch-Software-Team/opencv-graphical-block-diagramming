const getHandleColor = (type) => {
    switch (type) {
        case 'Mat':
            return 'yellow'

        case 'void':
            return 'blue'

        case 'double':
            return 'red'

        case 'int':
            return 'green'

        case 'bool':
            return 'orange'

        default:
            return 'gray'
    }
}

export default getHandleColor;