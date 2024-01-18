const unquote = (str) => {
    return str.replace(/(^")|("$)/g, '');
}

module.exports = {
    unquote
}