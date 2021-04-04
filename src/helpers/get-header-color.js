const getHeaderColor = (name) => {
    let colors = [
        "#488948",
        "#7B2A31",
        "#6C5AAD",
        "#4A87AE",
        "#9C343E"
    ]

    return colors[name.length % colors.length]
}

export default getHeaderColor;