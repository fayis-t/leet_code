/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {    
    let mapping = {}

    for( let i=0; i<names.length; i++){
        mapping[heights[i]] = names[i];
    }

    heights.sort((a,b) => b -a );

    for(let i=0; i<names.length; i++){
        names[i] = mapping[heights[i]];
    }

    return names;
};