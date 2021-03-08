//__________________________________________Funktionen__________________________________________
/*Sprung*/

var funcF;
var funcG;
/*Rampe*/

/*SinusSignal*/
//ay * Math.sin(ax * (t + 1.5));


/*Gauß:             Dichtefunktion der Standardnormalverteilung mit der Variabeln ay und ax*/
//ay * (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * t * t * ax);



/*Sinc Funktion*/
//ay * Math.sin(Math.PI * t * ax) / (Math.PI * t * ax);



/*Sinc*/
//ay * Math.sin(t / 2) / (t / 2);



/*Sprung ähnlich*/
//0.5 + 0.5 * Math.tanh(t);

/*Rechteck*/

//ay * (1 / (1 + Math.exp(-999 * (ax * t + 1)))) - ay * (1 / (1 + Math.exp(-999 * (ax * t - 1))));

//var RechteckAlsHilfe = (1 / (1 + Math.exp(-999 * (t + 1)))) - (1 / (1 + Math.exp(-999 * (t - 1))));

/*Sägezahn*/
//ay * ((1 / (1 + Math.exp(-999 * (t + 1)))) - (1 / (1 + Math.exp(-999 * (t - 1)))) / 2) * (1 - t);

/*Dreieck*/
//ay * ((ax * t + 1) * (1 / (1 + Math.exp(-Infinity * (ax * t + 1)))) -
//2 * ((ax * t) * (1 / (1 + Math.exp(-Infinity * (ax * t))))) -
//   ((ax * t - 1) * (1 / (1 + Math.exp(-Infinity * (ax * t - 1))))) +
// 2 * (ax * t - 1) * (1 / (1 + Math.exp(-Infinity * (ax * t - 1)))));

//////////////////////// ////////

/*___________________________________________Board 1___________________________________________*/
var board1 = JXG.JSXGraph.initBoard('FuncPlot', {
    boundingbox: [-10, 10, 10, -10],
    axis: true,
    showCopyright: false

});
var A = board1.create('point', [1, 1], {
    name: 'A'
});


Sprung = function funcG(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * (1 / (1 + Math.exp(-999 * (ax * t))));
};

Dreieck = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    /*Dreieck*/
    return ay * ((ax * t + 1) * (1 / (1 + Math.exp(-Infinity * (ax * t + 1)))) -
        2 * ((ax * t) * (1 / (1 + Math.exp(-Infinity * (ax * t))))) -
        ((ax * t - 1) * (1 / (1 + Math.exp(-Infinity * (ax * t - 1))))) +
        2 * (ax * t - 1) * (1 / (1 + Math.exp(-Infinity * (ax * t - 1)))));

};
Rechteck = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * (1 / (1 + Math.exp(-999 * (ax * t + 1)))) - ay * (1 / (1 + Math.exp(-999 * (ax * t - 1))));

};


Rampe = function funcG(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * t * (1 / (1 + Math.exp(-999 * (t))));
};
/*SinusSignal*/
Sin = function funcG(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * Math.sin(ax * (t + 1.5));
};



/*Gauß:             Dichtefunktion der Standardnormalverteilung mit der Variabeln ay und ax*/
Gauss = function funcG(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * t * t * ax);
};




/*Sinc Funktion*/
Sinc = function funcG(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * Math.sin(Math.PI * t * ax) / (Math.PI * t * ax);
};




Saegezahn = function funcG(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * ((1 / (1 + Math.exp(-999 * (t + 1)))) - (1 / (1 + Math.exp(-999 * (t - 1)))) / 2) * (1 - t);
};
funcF = Sprung;
funcG = Sprung;
board1.create('functiongraph', [funcF]).setName("funcF");
board1.on("update", updateConv);

/*________________________________________Board 2___________________________________________*/

var board2 = JXG.JSXGraph.initBoard('FuncPlot2', {
    boundingbox: [-10, 10, 10, -10],
    axis: true,
    showCopyright: false



});


var A2 = board2.create('point', [1, 1], {
    name: 'A2'
});

/* funcG = function funcG(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return ay * (((1 / (1 + Math.exp(-999 * (ax * t + 1)))) - (1 / (1 + Math.exp(-999 * (ax * t - 1))))) / 2) * (1 - ax * t);
}; */
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
        board1.create('functiongraph', [funcF], {
            strokewidth: 2
        }).setName("funcF");
    } else if (id == "functionList2") {
        funcG = func;
        board2.removeObject(board2.elementsByName.funcG);
        board2.create('functiongraph', [funcG], {
            strokewidth: 2,
            strokecolor: "#ff0000"
        }).setName("funcG");
    }

}

board2.create('functiongraph', [funcG], {
    strokewidth: 2,
    strokecolor: "#ff0000"
}).setName("funcG");
board2.on("update", updateConv);

/*___________________________________________Board 3___________________________________________*/


var board3 = JXG.JSXGraph.initBoard("FuncPlot3", {
    axis: true,
    showCopyright: false,
    showNavigation: false,
    zoom: {
        factorX: 1.25, // horizontal zoom factor (multiplied to JXG.Board#zoomX)
        factorY: 1.25, // vertical zoom factor (multiplied to JXG.Board#zoomY)
        wheel: true, // allow zooming by mouse wheel or
        // by pinch-to-toom gesture on touch devices
        needShift: true, // mouse wheel zooming needs pressing of the shift key
        min: 0.001, // minimal values of JXG.Board#zoomX and JXG.Board#zoomY, limits zoomOut
        max: 1000.0, // maximal values of JXG.Board#zoomX and JXG.Board#zoomY, limits zoomIn

        pinchHorizontal: true, // Allow pinch-to-zoom to zoom only horizontal axis
        pinchVertical: true, // Allow pinch-to-zoom to zoom only vertical axis
        pinchSensitivity: 7 // Sensitivity (in degrees) for recognizing horizontal or vertical pinch-to-zoom gestures.
    },
    boundingbox: [-10, 10, 10, -10],
    keepAspectRatio: true,
    pan: { enabled: true },
    axis: true,
    needsFullUpdate: true,
    // JXG.Coords(COORDS_BY_SCREEN, [-10, 10, 10, -10], board3, true),
    //fullUpdate(),
    //JXG.Board.BOARD_MODE_MOVE_ORIGIN,
    //applyZoom() {},
    //hasPoint(JXG.Coords): true,
});



sliderG = board3.create("slider", [
    [-9, -1],
    [9, -1],
    [-10, -10, 10]
], {
    fillColor: "#ff0000",
    strokeColor: "#ff0000",
    size: 6,
    withLabel: false,
    withTicks: false,


    layer: 0,
});
////////////////////////////////////
var funcFConv = board3.create("functiongraph", [function(x) {
    return funcF(x);
}], {
    strokewidth: 2,
});

var funcGConv = board3.create("functiongraph", [function(x) {
    return funcG(sliderG.Value() - x);
}], {
    strokewidth: 2,
    strokecolor: "#ff0000"
});

var conv = board3.create("functiongraph", [function(t) {
    if (t > sliderG.Value())
        return Math.Nan;
    sum = 0
    step = 0.1
        // http://hipersayanx.blogspot.de/2015/06/image-convolution.html



    for (var x = -10; x < 10; x += step)
        sum += funcF(x) * funcG(t - x)

    return sum * step;
}, -10, 10], {
    strokewidth: 2,
    strokecolor: "#000000",
    trace: false,
    highlight: true,
    scalable: true,
    dragToTopOfLayer: false,
    fillColor: '#565656',
    strokeOpacity: 0.8,
    fillOpacity: 0.8,
    includeBoundaries: true,



});

function updateConv() {
    board3.update();
    if (conv) board3.zoomElements([conv]);
};