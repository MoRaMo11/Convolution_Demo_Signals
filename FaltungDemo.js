//__________________________________________Funktionen-FuncF__________________________________________
var funcF;
Sprung = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * (1 / (1 + Math.exp(-999 * (ax * t))));
};
Dreieck = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * ((ax * t + 1) * (1 / (1 + Math.exp(-999 * (ax * t + 1)))) -
        2 * ((ax * t) * (1 / (1 + Math.exp(-999 * (ax * t))))) -
        ((ax * t - 1) * (1 / (1 + Math.exp(-999 * (ax * t - 1))))) +
        2 * (ax * t - 1) * (1 / (1 + Math.exp(-999 * (ax * t - 1)))));
};
Rechteck = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * (1 / (1 + Math.exp(-9999 * (ax * t + 1)))) - ay * (1 / (1 + Math.exp(-9999 * (ax * t - 1))));
};
Rampe = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * t * (1 / (1 + Math.exp(-999 * (t))));
};
Sin = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * Math.sin(ax * (t + 1.5));
};
/*Gauß:Dichtefunktion der Standardnormalverteilung mit der Variabeln ay und ax*/
Gauss = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * t * t * ax);
};
Sinc = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * Math.sin(Math.PI * t * ax) / (Math.PI * t * ax);
};
Saegezahn = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * (((1 / (1 + Math.exp(-999 * (ax * t + 1)))) - (1 / (1 + Math.exp(-999 * (ax * t - 1))))) / 2) * (1 - ax * t);

};

funcF = Dreieck;
//__________________________________________Funktionen-FuncG__________________________________________
var funcG;
Sprung2 = function funcF(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return ay * (1 / (1 + Math.exp(-999 * (ax * t))));
};
Dreieck2 = function funcF(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return ay * ((ax * t + 1) * (1 / (1 + Math.exp(-Infinity * (ax * t + 1)))) -
        2 * ((ax * t) * (1 / (1 + Math.exp(-Infinity * (ax * t))))) -
        ((ax * t - 1) * (1 / (1 + Math.exp(-Infinity * (ax * t - 1))))) +
        2 * (ax * t - 1) * (1 / (1 + Math.exp(-Infinity * (ax * t - 1)))));
};
Rechteck2 = function funcF(t) {

    var ax = A2.X(),
        ay = A2.Y();

    return ay * (1 / (1 + Math.exp(-999 * (ax * t + 1)))) - ay * (1 / (1 + Math.exp(-999 * (ax * t - 1))));
};
Rampe2 = function funcF(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return ay * t * (1 / (1 + Math.exp(-999 * (t))));
};
Sin2 = function funcF(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return ay * Math.sin(ax * (t + 1.5));
};
/*Gauß:Dichtefunktion der Standardnormalverteilung mit der Variabeln ay und ax*/
Gauss2 = function funcF(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return ay * (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * t * t * ax);
};
Sinc2 = function funcF(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return ay * Math.sin(Math.PI * t * ax) / (Math.PI * t * ax);
};
Saegezahn2 = function funcF(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return ay * (((1 / (1 + Math.exp(-999 * (ax * t + 1)))) - (1 / (1 + Math.exp(-999 * (ax * t - 1))))) / 2) * (1 - ax * t);
};

funcG = Rechteck2;
/*___________________________________________ChangeFunc-FuncF___________________________________________*/
changeFunction = function(value, id) {
        switch (value) {
            case "Sprung":
                func = Sprung;
                break;
            case "Rampe":
                func = Rampe;
                break;
            case "Rechteck":
                func = Rechteck;
                break;
            case "Dreieck":
                func = Dreieck;
                break;
            case "Sägezahn":
                func = Saegezahn;
                break;
            case "Sin":
                func = Sin;
                break;
            case "Sinc":
                func = Sinc;
                break;
            case "Gauß":
                func = Gauss;
                break;
        }
        if (id == "functionList1") {
            funcF = func;
            board1.removeObject(board1.elementsByName.funcF);
            board1.create('functiongraph', [funcF], { strokecolor: "#0000ff", strokewidth: 4, }).setName("funcF");
        }
    }
    /*___________________________________________ChangeFunc-FuncG___________________________________________*/
changeFunction2 = function(value2, id2) {
        switch (value2) {
            case "Sprung":
                func2 = Sprung2;
                break;
            case "Rampe":
                func2 = Rampe2;
                break;
            case "Rechteck":
                func2 = Rechteck2;
                break;
            case "Dreieck":
                func2 = Dreieck2;
                break;
            case "Sägezahn":
                func2 = Saegezahn2;
                break;
            case "Sin":
                func2 = Sin2;
                break;
            case "Sinc":
                func2 = Sinc2;
                break;
            case "Gauß":
                func2 = Gauss2;
                break;
        }
        if (id2 == "functionList2") {
            funcG = func2;
            board2.removeObject(board2.elementsByName.funcG);
            board2.create('functiongraph', [funcG], { strokecolor: "#ff0000", strokewidth: 4, }).setName("funcG");
        }
    }
    /*___________________________________________Board 1___________________________________________*/
var board1 = JXG.JSXGraph.initBoard('FuncPlot', {
    boundingbox: [-10, 10, 10, -10],
    axis: true,
    showCopyright: false,
    showNavigation: false,

    minFrameRate: 999,

});
var A = board1.create('point', [1, 1], "snapWidth: 1", {
    name: '(x,y)',
    snapWidth: 1,
    snapSizeY: 10,
    snapSizeX: 2,
    sizeUnit: 'user',
    ignoredSnapToPoints: [(1, 1), (0, 0)],
    attractorUnit: 'screen',
    attractorDistance: 1,
    snapToGrid: false,
    snapToPoints: true,
    snatchDistance: 100,


});
board1.create('functiongraph', [funcF], { strokecolor: "#0000ff", strokewidth: 4, }).setName("funcF");
board1.on("update", updateConv);
/*________________________________________Board 2___________________________________________*/
var board2 = JXG.JSXGraph.initBoard('FuncPlot2', {
    boundingbox: [-10, 10, 10, -10],
    axis: true,
    showCopyright: false,
    showNavigation: false,

    minFrameRate: 80008,

});
var A2 = board2.create('point', [1, 1], "snapWidth: 1", {
    name: '(x,y)',
    snapWidth: 1,
    snapSizeY: 2,
    snapSizeX: 10,
    sizeUnit: 'screen',
    ignoredSnapToPoints: [(1, 1), (0, 0)],
    attractorUnit: 'screen',
    attractorDistance: 5,
    snapToGrid: false,
    snapToPoints: true,
    snatchDistance: 1,


});
board2.create('functiongraph', [funcG], { strokecolor: "#ff0000", strokewidth: 4, }).setName("funcG");
board2.on("update", updateConv);
/*___________________________________________Board 3___________________________________________*/
var board3 = JXG.JSXGraph.initBoard("FuncPlot3", {
    axis: true,
    showCopyright: false,
    showNavigation: false,
    boundingbox: [-10, 10, 10, -10],
    zoom: {
        factorX: 1.25, // horizontal zoom factor (multiplied to JXG.Board#zoomX)
        factorY: 1.25, // vertical zoom factor (multiplied to JXG.Board#zoomY)
        wheel: true, // allow zooming by mouse wheel or
        // by pinch-to-toom gesture on touch devices
        needShift: false, // mouse wheel zooming needs pressing of the shift key
        min: 1, // minimal values of JXG.Board#zoomX and JXG.Board#zoomY, limits zoomOut
        max: 1, // maximal values of JXG.Board#zoomX and JXG.Board#zoomY, limits zoomIn

        pinchHorizontal: true, // Allow pinch-to-zoom to zoom only horizontal axis
        pinchVertical: true, // Allow pinch-to-zoom to zoom only vertical axis
        pinchSensitivity: 7 // Sensitivity (in degrees) for recognizing horizontal or vertical pinch-to-zoom gestures.
    },
    pan: { enabled: true, needShift: false },
    axis: true,
});
sliderG = board3.create("slider", [
    [-9, -5],
    [7, -5],
    [-20, -20, 20]
], {
    name: 't',
    fillColor: "#ff0000",
    strokeColor: "#ff0000",
    size: 6,
    withTicks: false,
    point1: { fixed: false },
    point2: { fixed: false },
    baseline: { fixed: false },
});
////////////////////////////////////
var funcFConv = board3.create("functiongraph", [function(x) {
    return funcF(x);
}], {
    strokewidth: 4,
});

var funcGConv = board3.create("functiongraph", [function(x) {
    return funcG(sliderG.Value() - x);
}], {
    strokewidth: 4,
    strokecolor: "#ff0000"
});

var conv = board3.create("functiongraph", [function(t) {
    if (t > sliderG.Value())
        return Math.Nan;
    sum = 0
    step = 0.01
        // http://hipersayanx.blogspot.de/2015/06/image-convolution.html
    for (var x = -20; x < 20; x += step)
        sum += funcF(x) * funcG(t - x)

    return sum * step;
}, -20, 20], {
    strokewidth: 4,
    strokecolor: "#000000",
});

function updateConv() {
    board3.update();
    if (conv) board3.zoomElements([conv]);
};