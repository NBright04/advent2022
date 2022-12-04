import { readFileSync } from 'fs';
import Calories from "./Calories";

const file = readFileSync('./data.txt', 'utf8');

const main = () => {
    const calories = new Calories(file);

    console.log(calories.getMostCalories());
    console.log(calories.getSumOfTopThree());
}

main();
