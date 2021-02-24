var trace1 = {
    x: [1, 2, 3, 4],
    y: [-0.3121, -0.2838, 0.1282, 0.2],
    mode: 'lines+markers',
    marker: {
        color: 'rgb(128, 0, 128)',
        size: 8
    },
    line: {
        color: 'rgb(128, 0, 128)',
        width: 2
    }
};

var trace2 = {
    x: [1, 2, 3, 4],
    y: [-0.3121, -0.2838, 0.1282, 0.2],
    mode: 'lines+markers'
};

var trace3 = {
    x: [1, 2, 3, 4],
    y: [-0.3121, -0.2838, 0.1282, 0.2],
    mode: 'lines+markers',
    marker: {
        color: 'rgb(255, 0, 0)',
        size: 8
    },
    line: {
        color: 'rgb(255, 0, 0)',
        width: 2
    }
};

var data1 = [trace1];
var data2 = [trace2];
var data3 = [trace3];

var layoutx = {
    title: 'AccelX'
};

var layouty = {
    title: 'AccelY'
};

var layoutz = {
    title: 'AccelZ'
};

Plotly.newPlot('AccelX', data1, layoutx);
Plotly.newPlot('AccelY', data2, layouty);
Plotly.newPlot('AccelZ', data3, layoutz);
