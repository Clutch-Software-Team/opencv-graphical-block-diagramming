const getInputType = (type) => {

    switch (type) {
        case 'double':
            return 'number'

        case 'int':
            return 'number'

        default:
            return 'text'
    }
}

export default getInputType;