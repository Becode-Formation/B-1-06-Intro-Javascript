class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }


    collides(otherRectangle) {
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this.topLeftYPos + this.length > otherRectangle.topLeftYPos) {
            return true;
        } else {

            return false;
        }
    }
}


let randPosX = () => {
    return Math.round(Math.random() * 500) + 1;
}

let randPosY = () => {
    return Math.round(Math.random() * 500) + 1;
}

let randPosW = () => {
    return Math.round(Math.random() * 20) + 1;
}

let randPosL = () => {
    return Math.round(Math.random() * 20) + 1;
}
let allRectangle = [];

let randomRectangle = () => {

    for (i = 0; i < 100; i++) {
        allRectangle[i] = new Rectangle(randPosX(), randPosY(), randPosW(), randPosL());
    }
    compRectangle(allRectangle);
}

// let compRectangle = (arr) => {
//     // let rectangleA = allRectangle;
//     for (let elt of arr) {
//         arr.collides(elt);
//     }
// }
let rectA;
let rectB;

let compRectangle = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        rectA = arr[0];
        for (let j = i + 1; j < arr.length; j++) {
            rectB = arr[j];
            rectA.collides(rectB);
        }
    }
}

console.log(randomRectangle());
