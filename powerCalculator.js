const powerCalculator = (base, exponent) => {
    if (exponent < 0) {
        console.log('Exponent should be >= 0');
        return;
    }
    console.log(Math.pow(base, exponent));
    return;
};

powerCalculator(10, 2);

powerCalculator(10, -2);