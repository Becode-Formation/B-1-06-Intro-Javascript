class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        if (this.topLeftXPos === otherRectangle.topLeftXPos && this.topLeftYPos === otherRectangle.topLeftYPos) {
            console.log("The rectangles collides");
        } else {
            console.log("The rectangle doesn't collides")
        }
    }
}

let rectangle = new Rectangle(4, 2, 6, 8);
let otherRectangle = new Rectangle(5, 2, 6, 8);
console.log(rectangle.collides(otherRectangle));