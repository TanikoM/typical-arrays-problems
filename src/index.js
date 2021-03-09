exports.min = function min (array) {
    if (!array || !array.length) return 0;
    return array.reduce((minElement, currentValue) => {
        return currentValue <= minElement ? currentValue : minElement
    });
}

exports.max = function max (array) {
    if (!array || !array.length) return 0;
    return array.reduce((maxElement, currentValue) => {
        return currentValue >= maxElement ? currentValue : maxElement
    });
}

exports.avg = function avg (array) {
    if (!array || !array.length) return 0;
    return array.reduce((avg, currentValue) => {
        return (avg + currentValue)
    }) / array.length
}
