class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    get surface() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    move(xOffset, yOffset) {
        this.xPos = this.xPos + xOffset;
        this.yPos = this.yPos + yOffset;
    }
}

let superCircle = new Circle(2, 3, 4);
console.log(superCircle.surface);