let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const findAllPaths = (maze, x = 0, y = 0, steps = [], paths = []) {
    if (x < 0 || x >= maze.length || y < 0 || y >= maze[x].length {
        return paths;
    }
    const position = maze[x][y];
    if (position === 'e') {
        return[...paths, steps];
    } else if (position === '*') {
        return paths;
    } else if ( position === ' ')
    )
}