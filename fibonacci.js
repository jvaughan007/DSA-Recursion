const fibonacci = num => {
    if (num <= 1) {
        return [0, 1];
    }
    let array = fibonacci(num - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
};

console.log(fibonacci(5));


