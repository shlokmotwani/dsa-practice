var findPoisonedDuration = function (timeSeries, duration) {
    let poisonedDuration = 0;
    for (let i = 0; i < timeSeries.length; i++) {
        let overlappingDuration = 0;
        poisonedDuration += duration;
        if(i === timeSeries.length - 1) break;

        if (timeSeries[i] + duration > timeSeries[i + 1]) {
            overlappingDuration = timeSeries[i] + duration - timeSeries[i + 1];
        } 
        poisonedDuration -= overlappingDuration;
    }
    return poisonedDuration;
};

console.log(findPoisonedDuration([1, 4], 2));
console.log(findPoisonedDuration([1, 2], 2));


/*
*
*

My approach is to add the duration for each element in timeSeries array,
and the subtract the overlapping durations from the total time.

Another interesting approach could be finding out the TIMEGAP between two
adjacent numbers, and add to the total time whichever is the minimum amongst
the two.
*
*
*/