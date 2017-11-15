// generate random integer value including both from and to
// min: int|[int,int]|{from:int,to:int}
function randomInt(from, to) {
    if (from.constructor === Array) {
        to = from[1];
        from = from[0];
    } else if (typeof from === 'object' && from.from && from.to) {
        to = from.to;
        from = from.from;
    }
    return Math.floor(Math.random() * (to - from + 1)) + from;
}