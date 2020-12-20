const countingSheep = num =>  {
    //Base Case
    if (num < 1) {
        return console.log('All sheep jumped over the fence');  
    }
    //General Case
    console.log(`${num}: Another sheep jumps over the fence`);
    countingSheep(num - 1);
};

countingSheep(3);