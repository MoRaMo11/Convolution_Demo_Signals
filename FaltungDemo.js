/*_______________________________________Funktions-FuncF difinition with ax and ay as variables to change the value of the functions________________________*/
var funcF;

Dreieck = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
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
Gauss = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return 2.5 * ay * (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * t * t * ax);
};
Sinc = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * Math.sin(Math.PI * t * 2 * ax) / (Math.PI * t * 2 * ax);
};
Saegezahn = function funcF(t) {
    var ax = A.X(),
        ay = A.Y();
    return ay * (((1 / (1 + Math.exp(-999 * (ax * t + 1)))) - (1 / (1 + Math.exp(-999 * (ax * t - 1))))) / 2) * (1 - ax * t);
};
funcF = Rechteck; // default value for funcF

/*____________________________________Funktions-FuncF difinition with ax and ay as variables to change the value of the functions__________________________*/
var funcG;

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
Gauss2 = function funcF(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return 2.5 * ay * (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * t * t * ax);
};
Sinc2 = function funcF(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return ay * Math.sin(Math.PI * t * 2 * ax) / (Math.PI * t * 2 * ax);
};
Saegezahn2 = function funcF(t) {
    var ax = A2.X(),
        ay = A2.Y();
    return ay * (((1 / (1 + Math.exp(-999 * (ax * t + 1)))) - (1 / (1 + Math.exp(-999 * (ax * t - 1))))) / 2) * (1 - ax * t);
};

funcG = Rechteck2; // default value for funcG
/*____________________________________________________________________________ChangeFunc_______________________________________________________________________*/
changeFunction = function(value, id) {
    if (id == "functionList1") {
        funcF = eval(value);
        board1.removeObject(board1.elementsByName.funcF);
        board1.create('functiongraph', [funcF], { strokecolor: "#0000ff", strokewidth: 4 }).setName("funcF");
    } else if (id == "functionList2") {
        funcG = eval(value);
        board2.removeObject(board2.elementsByName.funcG);
        board2.create('functiongraph', [funcG], { strokecolor: "#ff0000", strokewidth: 4 }).setName("funcG");
    }
}

/*___________________________________Board 1 _________________________________________*/
var board1 = JXG.JSXGraph.initBoard('FuncPlot', { //Board 1 Initialization
    boundingbox: [-3, 3, 3, -3],
    axis: true,
    showCopyright: false,
    showNavigation: false,
});
var A = board1.create('point', [1, 1], { name: '(X,Y)', }); // creation of Point A (Variable to Change the Value of the Functions)
board1.create('functiongraph', [funcF], { strokecolor: "#0000ff", strokewidth: 4, }).setName("funcF"); //creation of functiongraph (FuncF) in board 1
board1.on("update", updateConv); //Runs through most elements in Board 1 and calls their update() method and update board 3.

/*________________________________________Board 2___________________________________________*/
var board2 = JXG.JSXGraph.initBoard('FuncPlot2', {
    boundingbox: [-3, 3, 3, -3],
    axis: true,
    showCopyright: false,
    showNavigation: false,
});
var A2 = board2.create('point', [1, 1], { name: '(X,Y)', color: "#0000ff" });
board2.create('functiongraph', [funcG], { strokecolor: "#ff0000", strokewidth: 4, }).setName("funcG");
board2.on("update", updateConv);

/*___________________________________________Board 3___________________________________________*/
var board3 = JXG.JSXGraph.initBoard("FuncPlot3", {
    boundingbox: [-10, 10, 10, -10],
    minBoundingBox: [-10, 10, 10, -10],
    axis: true,
    showCopyright: false,
    showNavigation: false,

    zoom: {
        wheel: true, // allow zooming by mouse wheel or by pinch-to-toom gesture on touch devices
        needShift: false, // mouse wheel zooming dont need pressing of the shift key
        needTwoFingers: true
    },
    pan: { enabled: true, needTwoFingers: false, needShift: false }, //Control the possibilities for panning interaction 

});

//Get slidervalue 
sliderValue = function() {
    value = document.getElementById("slider").value;
    return value;
};

var funcFConv = board3.create("functiongraph", [function(x) {
    return funcF(x);
}], {
    strokewidth: 4,
});

var funcGConv = board3.create("functiongraph", [function(x) {
    return funcG(sliderValue() - x);
}], {
    strokewidth: 4,
    strokecolor: "#ff0000"
});
// http://hipersayanx.blogspot.de/2015/06/image-convolution.html
var conv = board3.create("functiongraph", [function(t) {
    if (t > sliderValue())
        return Math.Nan;
    sum = 0
    step = 0.01
    for (var x = -20; x < 20; x += step)

        sum += funcF(x) * funcG(t - x)

    return sum * step;

}, -20, 20], {
    strokewidth: 4,
    strokecolor: "#000000",

});

// Update function
function updateConv() {
    board3.zoomElements([conv]); // update the zoom level to fit convolution graph*/
};
