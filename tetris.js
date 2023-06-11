const size = {
    width: 8,
    height: 6
}
let num = 1;
let coordinateX = 0;
let coordinateY = 0;
let figureTypes = ["Square", "Z", "L", "T", "ZReverse", "LReverse", "Line"];
let actualFigure;
let unenviableCellForPainting = [];
let painter = '#85581B';
let cellHoverColor = 'rgba(255,255,255,0.5)';
let errorColor = "rgba(255,0,0,0.4)";
let hoverErrorColor = 'rgba(255,0,0,0.9)'//'#cc3421'
let score = 0;
let isError = false;
let actualCellElements = [];





function start() {

    let cell1;
    let cell2;
    let cell3;
    let cell4;
    let id;
    const _fatherOfCells = document.getElementById('fatherOfCells');
    for (let i = 0; i < size.height; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        _fatherOfCells.appendChild(row); { }
        row.id = "Row" + num;
        for (let j = 0; j < size.width; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
            cell.id = "(" + i + "," + j + ")";
            cell.addEventListener("mouseover", (event) => {

                id = event.target.id;
                cell1 = event.target;
                if (actualFigure.type == "Square") {
                    // event.target.style.backgroundColor = color;

                    cell2 = document.getElementById(getId(id, 0, 1))
                    cell3 = document.getElementById(getId(id, 1, 0))
                    cell4 = document.getElementById(getId(id, 1, 1));

                    actualCellElements = [
                        cell1, cell2, cell3, cell4

                    ];




                } else if (actualFigure.type == "L") {
                    if (actualFigure.rotate == 0) {


                        cell2 = document.getElementById(getId(id, 1, 0));
                        cell3 = document.getElementById(getId(id, 1, 1));
                        cell4 = document.getElementById(getId(id, 1, 2));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }
                    if (actualFigure.rotate == 90) {


                        cell2 = document.getElementById(getId(id, 0, -1));
                        cell3 = document.getElementById(getId(id, 1, -1));
                        cell4 = document.getElementById(getId(id, 2, -1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];

                    }
                    if (actualFigure.rotate == 180) {

                        cell2 = document.getElementById(getId(id, -1, 0));
                        cell3 = document.getElementById(getId(id, -1, -1));
                        cell4 = document.getElementById(getId(id, -1, -2));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];

                    } if (actualFigure.rotate == 270) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, -1, 1));
                        cell4 = document.getElementById(getId(id, -2, 1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];

                    }
                } else if (actualFigure.type == "Z") {
                    if (actualFigure.rotate == 0) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, 1, 1));
                        cell4 = document.getElementById(getId(id, 1, 2));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    } if (actualFigure.rotate == 90) {

                        cell2 = document.getElementById(getId(id, 1, 0));
                        cell3 = document.getElementById(getId(id, 1, -1));
                        cell4 = document.getElementById(getId(id, 2, -1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    } if (actualFigure.rotate == 180) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, 1, 1));
                        cell4 = document.getElementById(getId(id, 1, 2));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    } if (actualFigure.rotate == 270) {

                        cell2 = document.getElementById(getId(id, -1, 0));
                        cell3 = document.getElementById(getId(id, -1, 1));
                        cell4 = document.getElementById(getId(id, -2, 1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }


                } else if (actualFigure.type == "Line") {
                    if (actualFigure.rotate == 90 || actualFigure.rotate == 270) {

                        cell2 = document.getElementById(getId(id, 1, 0));
                        cell3 = document.getElementById(getId(id, 2, 0));
                        cell4 = document.getElementById(getId(id, 3, 0));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }
                    if (actualFigure.rotate == 0 || actualFigure.rotate == 180) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, 0, 2));
                        cell4 = document.getElementById(getId(id, 0, 3));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }


                } else if (actualFigure.type == "ZReverse") {
                    if (actualFigure.rotate == 0) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, 1, 0));
                        cell4 = document.getElementById(getId(id, 1, -1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }
                    if (actualFigure.rotate == 90) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, -1, 0));
                        cell4 = document.getElementById(getId(id, 1, 1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];

                    }
                    if (actualFigure.rotate == 180) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, 1, 0));
                        cell4 = document.getElementById(getId(id, 1, -1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }
                    if (actualFigure.rotate == 270) {

                        cell2 = document.getElementById(getId(id, -1, -1));
                        cell3 = document.getElementById(getId(id, 1, 0));
                        cell4 = document.getElementById(getId(id, 0, -1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }


                } else if (actualFigure.type == "LReverse") {
                    if (actualFigure.rotate == 0) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, 0, -1));
                        cell4 = document.getElementById(getId(id, 1, -1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }
                    if (actualFigure.rotate == 90) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, 1, 1));
                        cell4 = document.getElementById(getId(id, 2, 1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }
                    if (actualFigure.rotate == 180) {

                        cell2 = document.getElementById(getId(id, 1, -2));
                        cell3 = document.getElementById(getId(id, 1, 0));
                        cell4 = document.getElementById(getId(id, 1, -1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }
                    if (actualFigure.rotate == 270) {

                        cell2 = document.getElementById(getId(id, 0, -1));
                        cell3 = document.getElementById(getId(id, -2, -1));
                        cell4 = document.getElementById(getId(id, -1, -1));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }



                } else if (actualFigure.type == "T") {
                    if (actualFigure.rotate == 0) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, 0, -1));
                        cell4 = document.getElementById(getId(id, -1, 0));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];
                    }
                    if (actualFigure.rotate == 90) {

                        cell2 = document.getElementById(getId(id, 1, 0));
                        cell3 = document.getElementById(getId(id, 1, 1));
                        cell4 = document.getElementById(getId(id, 2, 0));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];

                    }
                    if (actualFigure.rotate == 180) {

                        cell2 = document.getElementById(getId(id, 0, 1));
                        cell3 = document.getElementById(getId(id, 0, -1));
                        cell4 = document.getElementById(getId(id, 1, 0));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];

                    }
                    if (actualFigure.rotate == 270) {

                        cell2 = document.getElementById(getId(id, 1, 0));
                        cell3 = document.getElementById(getId(id, 0, -1));
                        cell4 = document.getElementById(getId(id, -1, 0));
                        actualCellElements = [
                            cell1, cell2, cell3, cell4
                        ];

                    }
                }
                paintHoverCells(actualCellElements);

            })
            // for (let i = 0; i < actualCellElements.length; i++) {
            //     const element = actualCellElements[i];
            //     if (errorGetBoolean(actualCellElements)) {
            //         if (element != null) {
            //             element.style.backgroundColor = errorColor;
            //             isError = true;
            //             actualCellElements.push(element);
            //         }
            //     } else {
            //         element.style.backgroundColor = cellHoverColor;
            //         actualCellElements.push(element);
            //     }
            // }
            document.getElementById('score').innerHTML = 'Score:' + score;

            cell.addEventListener("click", (event) => {
                if (!getErrorBoolean(actualCellElements)) {
                    for (let i = 0; i < actualCellElements.length; i++) {
                        const element = actualCellElements[i];
                        element.style.backgroundColor = painter;
                        element.isPainted = true;

                    }
                    score = score + 40;

                    getLines();
                    nextFigure();
                    boomControl();
                    if (checkGameEnd()) {

                        gameOver();
                        // alert("GAME OVER BITCH");
                    }
                }
                document.getElementById('score').innerHTML = 'Score:' + score;


            })


            cell.addEventListener("mouseleave", () => {
                // hover Exacnery datark hover exacy
                for (let j = 0; j < actualCellElements.length; j++) {
                    const element = actualCellElements[j];
                    if (!!element && !element.isPainted) {
                        // console.log(actualCellElements.isPainted)
                        element.style.backgroundColor = ""

                    }
                }
                // nerkvac celleri guynery het enq berum
                for (let i = 0; i < unenviableCellForPainting.length; i++) {
                    const element = unenviableCellForPainting[i];
                    element.style.backgroundColor = painter;
                }
            })
        }
        num++;

    }
    randomFigureGenerator(1);
    randomFigureGenerator(2);
    randomFigureGenerator(3);


    actualFigure = getFigureProps(3);

    const allScores = localStorage.getItem('allScores');
    if (allScores != null) {
        bestFinder(JSON.parse(allScores))

    }

}

start();

function createFigureT() {
    let figureT = document.createElement("div");
    // let box = document.getElementById("three");
    // box.appendChild(figureT);
    figureT.classList.add("figureT");
    let row = document.createElement("div");
    row.classList.add("figureRow");
    figureT.appendChild(row);
    row.appendChild(figureItemCreator());
    row.setAttribute("style", "justify-content: center;")
    row = document.createElement("div");
    row.classList.add("figureRow");
    figureT.appendChild(row);
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    figureT.type = "T"
    return figureT;

}


function figureL() {
    let figureL = document.createElement("div");
    // let box = document.getElementById("three");
    // box.appendChild(figureL);
    figureL.classList.add("figureL");
    let row = document.createElement("div");
    row.classList.add("figureRow");
    figureL.appendChild(row);
    row.appendChild(figureItemCreator());
    row = document.createElement("div");
    row.classList.add("figureRow");
    figureL.appendChild(row);
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    figureL.type = "L"
    return figureL;


}

function figureItemCreator() {
    const figureItem = document.createElement("div");
    figureItem.classList.add("figureItem");

    return figureItem;

}
function figureLine() {
    let figureLine = document.createElement("div");
    // let box = document.getElementById("three");
    // box.appendChild(figureLine);
    figureLine.classList.add("figureLine");
    let row = document.createElement("div");
    row.classList.add("figureRow");
    figureLine.appendChild(row);
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    figureLine.type = "Line"
    return figureLine;
}

function figureLReverse() {
    let figureLReverse = document.createElement("div");
    // let box = document.getElementById("three");
    // box.appendChild(figureLReverse);
    figureLReverse.classList.add("figureLReverse");
    let row = document.createElement("div");
    row.classList.add("figureRow");
    figureLReverse.appendChild(row);
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    row = document.createElement("div");
    row.classList.add("figureRow");
    figureLReverse.appendChild(row);
    row.appendChild(figureItemCreator());
    figureLReverse.type = "LReverse"
    return figureLReverse;

}

function figureSquare() {
    let figureSquare = document.createElement("div");
    // let box = document.getElementById("three");
    // box.appendChild(figureSquare);
    figureSquare.classList.add("figureSquare");
    let row = document.createElement("div");
    row.classList.add("figureRow");
    figureSquare.appendChild(row);
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    row = document.createElement("div");
    row.classList.add("figureRow");
    figureSquare.appendChild(row);
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    figureSquare.type = "Square"
    return figureSquare;
}
function figureZ() {
    let figureZ = document.createElement("div");
    // let box = document.getElementById("three");
    // box.appendChild(figureZ);
    figureZ.classList.add("figureZ");
    let row = document.createElement("div");
    row.classList.add("figureRow");
    figureZ.appendChild(row);
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    row = document.createElement("div");
    row.classList.add("figureRow");
    figureZ.appendChild(row);
    row.setAttribute("style", "justify-content: end;")
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    figureZ.type = "Z"
    return figureZ;

}
function figureZReverse() {
    let figureZReverse = document.createElement("div");
    // let box = document.getElementById("three");
    // box.appendChild(figureZ);
    figureZReverse.classList.add("figureZ");
    let row = document.createElement("div");
    row.classList.add("figureRow");
    figureZReverse.appendChild(row);
    row.setAttribute("style", "justify-content: end;")
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    row = document.createElement("div");
    row.classList.add("figureRow");
    figureZReverse.appendChild(row);
    row.setAttribute("style", "justify-content: start;")
    row.appendChild(figureItemCreator());
    row.appendChild(figureItemCreator());
    figureZReverse.type = "ZReverse"
    return figureZReverse;

}

function figureCreator(boxNumber, figureType, rotation) {

    let boxElement = null;
    if (boxNumber == 1) {
        boxElement = document.getElementById("one")
    } else if (boxNumber == 2) {
        boxElement = document.getElementById("two");

    } else if (boxNumber == 3) {
        boxElement = document.getElementById("three");

    }

    if (!boxElement) {
        console.error("BOX IS NULL", boxNumber);
        return;
    }


    let figure;
    boxElement.innerHTML = " ";
    if (figureType == "Square") {
        figure = figureSquare();
    } else if (figureType == "Z") {
        figure = figureZ();
    } else if (figureType == "L") {
        figure = figureL();
    } else if (figureType == "T") {
        figure = createFigureT();
    } else if (figureType == "Line") {
        figure = figureLine();
    } else if (figureType == "ZReverse") {
        figure = figureZReverse();
    } else if (figureType == "LReverse") {
        figure = figureLReverse();
    }
    boxElement.appendChild(figure);
    //degrees
    if (rotation == 0) {
        figure.classList.add("rotate0");
    } else if (rotation == 90) {
        figure.classList.add("rotate90")
    } else if (rotation == 180) {
        figure.classList.add("rotate180")
    } else if (rotation == 270) {
        figure.classList.add("rotate270")
    }
    // figure.classList.add("rotate" + rotation);



}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomFigureGenerator(boxNumber) {
    let number = getRandomInt(7);
    // console.log(number);
    let figureTypeRandom = figureTypes[number];
    // console.log(figureTypeRandom);
    let random = getRandomInt(4);
    let randomRotation = 0;
    if (random == 1) {
        randomRotation = 0;
    } else if (random == 2) {
        randomRotation = 90;
    } else if (random == 3) {
        randomRotation = 180;
    } else if (random == 4) {
        randomRotation = 270;
    }
    figureCreator(boxNumber, figureTypeRandom, randomRotation);

}

function getFigureProps(boxNumber) {
    let box;
    if (boxNumber == 1) {
        box = document.getElementById("one")
    } else if (boxNumber == 2) {
        box = document.getElementById("two")

    } else if (boxNumber == 3) {
        box = document.getElementById("three")

    }

    let root = box.children[0];
    let childrenRotate = root.classList[1];
    let object = {
        type: root.type,
        rotate: childrenRotate.slice(6)
    }

    // if (childrenRotate != undefined || childrenRotate != null) {
    //     childrenRotate = childrenRotate.slice(6);
    // }
    // else {
    //     rotate = 0;
    // }
    return object;
}

function getId(id, y, x) {
    // (4,2) misht gumarum, x - y taberutynnerrn en
    id = id.slice(1, -1);
    id = id.split(")");
    id = id[0].split(",");
    let a = id[0];
    let b = id[1];
    a = parseInt(a);
    b = parseInt(b);
    a = a + y;
    b = b + x;
    // console.log(a);
    // console.log(b);
    a.toString();
    b.toString();
    id = "(" + a + "," + b + ")"
    return id



}

function getErrorBoolean(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element == null) {// id chi linum,
            return true;
        }
        if (element.isPainted) {
            return true;
        }
    }
    return false

}
function paintHoverCells(array) {

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (getErrorBoolean(array)) {
            if (element != null) {
                element.style.backgroundColor = errorColor
                if (element.isPainted) {
                    element.style.backgroundColor = hoverErrorColor;
                    unenviableCellForPainting.push(element);
                }
            }
        } else { //bolor cellery kan
            element.style.backgroundColor = cellHoverColor;


        }




    }
}
function nextFigure() {
    //two go three
    // document.getElementById("three").innerHTML = ""
    // const twoGoThree = document.getElementById("two");
    // const figureRoot = twoGoThree.children[0]
    // // console.log(figureRoot);
    // let rotate = figureRoot.classList[1];
    // if (rotate != undefined || rotate != null) {
    //     rotate = rotate.slice(6);
    // }
    // else {
    //     rotate = 0;
    // }

    let figurePRops3 = getFigureProps(2);

    figureCreator(3, figurePRops3.type, figurePRops3.rotate);
    actualFigure = figurePRops3
    //one go two
    // document.getElementById('two').innerHTML = '';
    // const oneGone = document.getElementById('one');
    // const figureRoot1 = oneGone.children[0];
    // rotate = figureRoot1.classList[1];

    // if (rotate != undefined || rotate != null) {
    //     rotate = rotate.slice(6);
    // }
    // else {
    //     rotate = 0;
    // }
    let figureProps2 = getFigureProps(1);

    figureCreator(2, figureProps2.type, figureProps2.rotate);

    //random figure first Div
    document.getElementById('one').innerHTML = '';
    randomFigureGenerator(1);

}
function checkArrayFull(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!element.isPainted) {
            return false;
        }
    }
    return true;
}
function arrayBoom(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.isPainted) {
            element.style.backgroundColor = ''
            element.isPainted = false;
        }
    }
}
function getLines() {
    let a = 0;
    let b = 0;
    let rows = [];
    let columns = [];

    for (let a = 0; a < size.height; a++) {
        let rowChildren = [];
        for (let b = 0; b < size.width; b++) {
            let cell = document.getElementById('(' + a + ',' + b + ')');
            rowChildren.push(cell)

        }
        rows.push(rowChildren);

    }
    // console.log(rows);

    // columns
    array = [];
    a = 0;
    b = 0;
    for (let b = 0; b < size.width; b++) {
        let array = [];
        for (let a = 0; a < size.height; a++) {
            let column = document.getElementById('(' + a + ',' + b + ')');
            array.push(column);
        }
        columns.push(array);
    }

    // console.log(columns);
    const obj = {
        rows: rows,
        columns: columns

    }

    return obj;
}
function boomControl() {
    let trueArray = [];
    let getObjectRow = getLines().rows;
    let getObjectColumn = getLines().columns;
    for (let i = 0; i < getObjectRow.length; i++) {
        const element = getObjectRow[i];
        if (checkArrayFull(element)) {
            trueArray.push(element);


        }
    }
    for (let i = 0; i < getObjectColumn.length; i++) {
        const element = getObjectColumn[i];
        if (checkArrayFull(element)) {
            trueArray.push(element);
        }
    }
    let scoreToAdd = 0;

    for (let i = 0; i < trueArray.length; i++) {
        const element = trueArray[i];
        unenviableCellForPainting = [];
        arrayBoom(element);
        // if (numberForCellsBoom > 1) {
        //     score += (element.length * 10) * 1.5;
        //     score = parseInt(score);
        // } else if (numberForCellsBoom > 2) {
        //     score = (score + element.length * 10) ** 1.5;
        //     score = parseInt(score);
        // }
        // else {
        //     score = score + element.length * 10;

        // }
        scoreToAdd += element.length * 10;


    }
    score += scoreToAdd * 1.5 ** (trueArray.length - 1);
    // console.log(scoreToAdd);
}

function checkGameEnd() {
    let emptyArray = [];
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        const element = cells[i];
        if (!element.isPainted) {
            emptyArray.push(element);
        }

    }
    console.log(emptyArray);

    for (let i = 0; i < emptyArray.length; i++) {
        const emptyCell = emptyArray[i];
        let imitateActualCells = [];
        let id = emptyCell.id;
        cell1 = emptyCell;
        if (actualFigure.type == "Square") {
            // event.target.style.backgroundColor = color;
            cell2 = document.getElementById(getId(id, 0, 1))
            cell3 = document.getElementById(getId(id, 1, 0))
            cell4 = document.getElementById(getId(id, 1, 1));

            imitateActualCells = [
                cell1, cell2, cell3, cell4

            ];




        } else if (actualFigure.type == "L") {
            if (actualFigure.rotate == 0) {


                cell2 = document.getElementById(getId(id, 1, 0));
                cell3 = document.getElementById(getId(id, 1, 1));
                cell4 = document.getElementById(getId(id, 1, 2));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }
            if (actualFigure.rotate == 90) {


                cell2 = document.getElementById(getId(id, 0, -1));
                cell3 = document.getElementById(getId(id, 1, -1));
                cell4 = document.getElementById(getId(id, 2, -1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];

            }
            if (actualFigure.rotate == 180) {

                cell2 = document.getElementById(getId(id, -1, 0));
                cell3 = document.getElementById(getId(id, -1, -1));
                cell4 = document.getElementById(getId(id, -1, -2));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];

            } if (actualFigure.rotate == 270) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, -1, 1));
                cell4 = document.getElementById(getId(id, -2, 1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];

            }
        } else if (actualFigure.type == "Z") {
            if (actualFigure.rotate == 0) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, 1, 1));
                cell4 = document.getElementById(getId(id, 1, 2));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            } if (actualFigure.rotate == 90) {

                cell2 = document.getElementById(getId(id, 1, 0));
                cell3 = document.getElementById(getId(id, 1, -1));
                cell4 = document.getElementById(getId(id, 2, -1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            } if (actualFigure.rotate == 180) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, 1, 1));
                cell4 = document.getElementById(getId(id, 1, 2));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            } if (actualFigure.rotate == 270) {

                cell2 = document.getElementById(getId(id, -1, 0));
                cell3 = document.getElementById(getId(id, -1, 1));
                cell4 = document.getElementById(getId(id, -2, 1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }


        } else if (actualFigure.type == "Line") {
            if (actualFigure.rotate == 90 || actualFigure.rotate == 270) {

                cell2 = document.getElementById(getId(id, 1, 0));
                cell3 = document.getElementById(getId(id, 2, 0));
                cell4 = document.getElementById(getId(id, 3, 0));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }
            if (actualFigure.rotate == 0 || actualFigure.rotate == 180) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, 0, 2));
                cell4 = document.getElementById(getId(id, 0, 3));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }


        } else if (actualFigure.type == "ZReverse") {
            if (actualFigure.rotate == 0) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, 1, 0));
                cell4 = document.getElementById(getId(id, 1, -1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }
            if (actualFigure.rotate == 90) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, -1, 0));
                cell4 = document.getElementById(getId(id, 1, 1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];

            }
            if (actualFigure.rotate == 180) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, 1, 0));
                cell4 = document.getElementById(getId(id, 1, -1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }
            if (actualFigure.rotate == 270) {

                cell2 = document.getElementById(getId(id, -1, -1));
                cell3 = document.getElementById(getId(id, 1, 0));
                cell4 = document.getElementById(getId(id, 0, -1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }


        } else if (actualFigure.type == "LReverse") {
            if (actualFigure.rotate == 0) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, 0, -1));
                cell4 = document.getElementById(getId(id, 1, -1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }
            if (actualFigure.rotate == 90) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, 1, 1));
                cell4 = document.getElementById(getId(id, 2, 1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }
            if (actualFigure.rotate == 180) {

                cell2 = document.getElementById(getId(id, 1, -2));
                cell3 = document.getElementById(getId(id, 1, 0));
                cell4 = document.getElementById(getId(id, 1, -1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }
            if (actualFigure.rotate == 270) {

                cell2 = document.getElementById(getId(id, 0, -1));
                cell3 = document.getElementById(getId(id, -2, -1));
                cell4 = document.getElementById(getId(id, -1, -1));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }



        } else if (actualFigure.type == "T") {
            if (actualFigure.rotate == 0) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, 0, -1));
                cell4 = document.getElementById(getId(id, -1, 0));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];
            }
            if (actualFigure.rotate == 90) {

                cell2 = document.getElementById(getId(id, 1, 0));
                cell3 = document.getElementById(getId(id, 1, 1));
                cell4 = document.getElementById(getId(id, 2, 0));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];

            }
            if (actualFigure.rotate == 180) {

                cell2 = document.getElementById(getId(id, 0, 1));
                cell3 = document.getElementById(getId(id, 0, -1));
                cell4 = document.getElementById(getId(id, 1, 0));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];

            }
            if (actualFigure.rotate == 270) {

                cell2 = document.getElementById(getId(id, 1, 0));
                cell3 = document.getElementById(getId(id, 0, -1));
                cell4 = document.getElementById(getId(id, -1, 0));
                imitateActualCells = [
                    cell1, cell2, cell3, cell4
                ];

            }
        }
        if (!getErrorBoolean(imitateActualCells)) {
            return false;
        }

    }

    return true;
}
function gameOver() {
    document.getElementById("gameOverScore").innerHTML = score;
    document.getElementById('gameOverWindowParent').style.visibility = 'visible'



}
function reload() {
    location.reload();
}

function saveScore() {

    let name = document.getElementById('nameInput');
    name = name.value;
    let objScore = {
        name: name,
        score: score

    }
    let allScores = localStorage.getItem('allScores');
    if (allScores) {
        allScores = JSON.parse(allScores);
        allScores.push(objScore);
        localStorage.setItem('allScores', JSON.stringify(allScores));
    }
    else {
        allScores = []
        allScores.push(objScore);
        localStorage.setItem('allScores', JSON.stringify(allScores));

    }
    alert('Your Score Saved!')
    bestFinder(allScores);
}
function bestFinder(allScores) {
    allScores.sort(function (a, b) { return b.score - a.score });
    if (allScores[0]) {
        document.getElementById('best1').innerHTML = allScores[0].name + ':' + allScores[0].score;

    }
    if (allScores[1]) {
        document.getElementById('best2').innerHTML = allScores[1].name + ':' + allScores[1].score;
    }
    if (allScores[2]) {

        document.getElementById('best3').innerHTML = allScores[2].name + ':' + allScores[2].score;
    }


}

