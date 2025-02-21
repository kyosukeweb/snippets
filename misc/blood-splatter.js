// Some code useful for calculating the angle of blood splatter

// [Width, Length, Distance]
// Replace with your own blood splatter data
[
    [13.2,17.8,24],
    [12.8,18.9,21],
    [13.2,19.2,19],
    [4.5,9.0,25],
    [5.1,10.6,27],
    [3.9,8.4,28],
    [3.6,8.1,29]
].forEach(AngleData => {
    var COMP0 = Math.asin(
        AngleData[0] / AngleData[1]
    );
    console.log(
        `ANGLE: sin-inv(${AngleData[0]}/${AngleData[1]}) -> ${COMP0 * 180 / Math.PI}`
    );
    console.log(
        `HEIGHT: ${AngleData[2]} * tan(${COMP0}) -> ${
            AngleData[2] * Math.tan(COMP0)
        }`
    );
    console.log(" ");
});
