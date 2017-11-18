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

// convert y into row#
function y2row(y) {
    return Math.floor(y / gameSetting.scene.block.height);
}

// convert x into column#
function x2col(x) {
    return Math.floor(x / gameSetting.scene.block.width);
}

// convert y into row#
function row2y(row) {
    return row * gameSetting.scene.block.height;
}

// convert x into column#
function col2x(col) {
    return col * gameSetting.scene.block.width;
}
