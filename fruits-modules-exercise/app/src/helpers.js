/*
 * This file should export 2 array helper functions
 *
 * choice(items):returns a randomly selected item from an array of items
 * remove(items,item):removes the first matching item from items, if item exists and returns it. 
 * Otherwise returns Undefined.
*/

// returns a randomly selected item from an array of items
function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

// removes the first matching item from items, if item exists and returns it. 
// Otherwise returns Undefined.
function remove(items,item) {
    return items.find((itemInArr,itemIndex) => {
        return itemInArr === item ? items.splice(itemIndex, 1) : undefined;
    })
}


export {choice, remove};