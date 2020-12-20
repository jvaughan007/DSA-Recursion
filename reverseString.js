const reverse = string => {
    //Base
    if (string.length === 1) {
        return string[0];
    }
    //General
    return (
        string.slice(string.length-1) + reverse(string.substring(0, string.length - 1))
    );
};

console.log(reverse('string'));