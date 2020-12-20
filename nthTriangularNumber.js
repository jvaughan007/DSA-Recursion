const triangularNum = nth => {
    if (nth <= 0) {
        return 0;
    }
    return nth + triangularNum(nth - 1);
};

console.log(triangularNum(1));
console.log(triangularNum(2));
console.log(triangularNum(3));
console.log(triangularNum(4));