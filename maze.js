let maze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const mazeRunner = (maze, x = 0, y = 0) => {
    //base
    if (maze[y][x] === 'e') {
        return ' You escaped the maze';
    }
    //general
    if (maze[y][x + 1] === ' ' || maze[y][x + 1] === 'e') {
        const path = 'R';
        maze[y][x] = '-';
        return path + mazeRunner(maze, x + 1, y);
    } else if (
        maze[y + 1] && 
        (maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e')
    ) {
        const path = 'D';
        maze[y][x] = '-';
        return path + mazeRunner(maze, x, y + 1);
    } else if (
        maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e'
    ) {
        const path = 'L';
        maze[y][x] = '-';
        return path + mazeRunner(maze, x - 1, y);
    } else if (
        maze[y - 1] && 
            (maze[y - 1][x] === ' ' || maze[y - 1][x] === 'e')
    ) {
        const path = 'U';
        maze[y][x] = '-';
        return path + mazeRunner(maze, x, y - 1);
    }
};

console.log(mazeRunner(maze));
console.log(mazeRunner(bigMaze));