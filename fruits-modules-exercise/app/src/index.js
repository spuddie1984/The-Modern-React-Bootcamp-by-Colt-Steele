/*
 * This file should import the fruits and both arrray helpers, it should then:
 * 
 * Randomly draw a fruit from the array
 * Log the message "I'd like one RANDOMFRUIT, please!"
 * Log the message "Here you go: RANDOMFRUIT"
 * Log the message "Delicous may I have another?"
 * Remove the fruit from the Array of fruits
 * Log the message "I'm sorry, we're all out. We have FRUITSLEFT left"
 * 
 */

import {choice, remove} from './helpers';
import foods from './foods';

let randomFruit = choice(foods);


console.log(`I'd like one ${randomFruit}, please!`);

console.log(`Here you go: ${randomFruit}`);

console.log(`Delicious may I have another?`);

remove(foods,randomFruit);

console.log(foods.length);
console.log(`I'm sorry, we're all out. We have ${foods} left`)