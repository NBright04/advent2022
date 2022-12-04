import { readFileSync } from 'fs';
import Game from "./Game";

const file = readFileSync('./data.txt', 'utf8');

const main = () => {
    const game = new Game(file);
}

main();
