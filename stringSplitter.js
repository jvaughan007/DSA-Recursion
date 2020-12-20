const stringSplitter = (string, separator) => {
    let index = string.indexOf(separator);
    //Base
    if (index === -1) {
        return [string];
    }
    //Gen
    return [string.slice(0, index)].concat(
        stringSplitter(string.slice(index + separator.length), separator)
    );
};

console.log(stringSplitter('02/20/2020', '/'));